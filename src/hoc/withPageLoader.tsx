import React from "react";
import LoadingScreen from "../components/LoadingScreen";
import { usePageLoader } from "../hooks/usePageLoader";

interface WithPageLoaderOptions {
  imageSources?: string[];
  videoSources?: string[];
  minLoadingTime?: number;
  loadingText?: string;
}

/**
 * Higher Order Component que adiciona loading screen a qualquer página.
 * Garante que o conteúdo só seja exibido após todos os recursos estarem carregados.
 */
export const withPageLoader = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options: WithPageLoaderOptions = {}
) => {
  const ComponentWithLoader: React.FC<P> = (props) => {
    const { imageSources = [], videoSources = [], minLoadingTime = 500, loadingText } = options;
    const { isLoading } = usePageLoader({ imageSources, videoSources, minLoadingTime });

    if (isLoading) {
      return <LoadingScreen />;
    }

    return <WrappedComponent {...props} />;
  };

  ComponentWithLoader.displayName = `withPageLoader(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return ComponentWithLoader;
};
