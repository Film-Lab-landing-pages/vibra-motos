import { useState, useEffect } from "react";

interface UsePageLoaderOptions {
  imageSources?: string[];
  videoSources?: string[];
  minLoadingTime?: number; // Tempo mínimo em ms para evitar flash
}

/**
 * Hook personalizado para garantir que todos os recursos da página estejam carregados
 * antes de exibir o conteúdo, evitando problemas de animação e transição.
 */
export const usePageLoader = (options: UsePageLoaderOptions = {}) => {
  const { imageSources = [], videoSources = [], minLoadingTime = 500 } =
    options;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    let mounted = true;

    const loadResources = async () => {
      try {
        // Aguarda o DOM estar completamente carregado
        if (document.readyState !== "complete") {
          await new Promise<void>((resolve) => {
            window.addEventListener("load", () => resolve(), { once: true });
          });
        }

        const loadPromises: Promise<void>[] = [];

        // Pré-carrega todas as imagens especificadas
        if (imageSources.length > 0) {
          imageSources.forEach((src) => {
            loadPromises.push(
              new Promise<void>((resolve) => {
                const img = new Image();
                img.onload = () => resolve();
                img.onerror = () => {
                  console.warn(`Failed to preload image: ${src}`);
                  resolve(); // Resolve mesmo com erro para não travar
                };
                img.src = src;
              })
            );
          });
        }

        // Pré-carrega vídeos (apenas metadata para ser rápido)
        if (videoSources.length > 0) {
          videoSources.forEach((src) => {
            loadPromises.push(
              new Promise<void>((resolve) => {
                const video = document.createElement("video");
                video.preload = "metadata";
                video.onloadedmetadata = () => resolve();
                video.onerror = () => {
                  console.warn(`Failed to preload video: ${src}`);
                  resolve();
                };
                video.src = src;
              })
            );
          });
        }

        // Aguarda todas as imagens e vídeos
        await Promise.all(loadPromises);

        // Garante tempo mínimo de loading para evitar flash
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < minLoadingTime) {
          await new Promise((resolve) =>
            setTimeout(resolve, minLoadingTime - elapsedTime)
          );
        }

        // Pequeno delay adicional para garantir que scripts e estilos estejam aplicados
        await new Promise((resolve) => setTimeout(resolve, 100));

        if (mounted) {
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error during preload:", error);
        // Mesmo com erro, remove o loading após o tempo mínimo
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    loadResources();

    return () => {
      mounted = false;
    };
  }, [imageSources, videoSources, minLoadingTime]);

  return { isLoading };
};

