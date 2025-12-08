import { useEffect } from "react";
import { useTimerStore } from "../store/timerStore";

// Funções diretas para SCORM (simuladas por enquanto)
const scormAPI = {
  getSuspendData: (): string | null => {
    try {
      // window.API?.LMSGetValue('cmi.suspend_data') || null;
      return null; // Retorna null por enquanto (modo simulação)
    } catch (error) {
      return null;
    }
  },

  setSuspendData: (data: string) => {
    try {
      // window.API?.LMSSetValue('cmi.suspend_data', data);
      // window.API?.LMSCommit('');
    } catch (error) {
      // Silently fail in development mode
    }
  },
};

/**
 * Hook que sincroniza a progressão de contents completados
 * entre SCORM (quando disponível) e localStorage (fallback)
 */
export const useContentProgress = () => {
  const {
    setCompletedContents,
    getCompletedContentsArray,
    markContentAsCompleted,
  } = useTimerStore();

  // Carregar progressão salva ao iniciar
  useEffect(() => {
    const loadProgress = () => {
      // Tentar carregar do SCORM primeiro
      const scormData = scormAPI.getSuspendData();

      if (scormData) {
        try {
          const parsed = JSON.parse(scormData);
          if (
            parsed.completedContents &&
            Array.isArray(parsed.completedContents)
          ) {
            setCompletedContents(parsed.completedContents);
            return;
          }
        } catch (error) {
          // Fall back to localStorage
        }
      }
      // localStorage é automaticamente carregado pelo persist middleware do Zustand
    };

    loadProgress();
  }, [setCompletedContents]);

  /**
   * Marca um content como completado e salva no SCORM + localStorage
   */
  const completeContent = (contentId: string) => {
    // Marca no store (que já verifica duplicação internamente via Set)
    markContentAsCompleted(contentId);

    // Pega o array atualizado (sem duplicação)
    const completedContents = getCompletedContentsArray();

    // Salvar no SCORM imediatamente
    const dataToSave = JSON.stringify({ completedContents });
    scormAPI.setSuspendData(dataToSave);

    // localStorage é automaticamente salvo pelo persist middleware do Zustand
  };

  return {
    completeContent,
  };
};
