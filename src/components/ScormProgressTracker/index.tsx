import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useScorm } from "../../hooks/useScorm";

/**
 * Componente que rastreia automaticamente o progresso do aluno
 * Salva a rota atual no suspend_data do SCORM
 */
const ScormProgressTracker: React.FC = () => {
  const location = useLocation();
  const { setSuspendData } = useScorm();

  useEffect(() => {
    // Salva a rota atual sempre que mudar
    const progressData = {
      currentRoute: location.pathname,
      timestamp: new Date().toISOString(),
    };

    if (setSuspendData && typeof setSuspendData === "function") {
      setSuspendData(JSON.stringify(progressData));
    }
  }, [location.pathname, setSuspendData]);

  return null; // Componente não renderiza nada
};

export default ScormProgressTracker;
