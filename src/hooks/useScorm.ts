import { useEffect } from "react";
import scormService from "../services/scormService";

interface ScormData {
  score: number;
  completion: "completed" | "incomplete";
  success: "passed" | "failed";
}

export const useScorm = () => {
  useEffect(() => {
    // Inicializa SCORM quando o componente monta
    scormService.initialize();

    return () => {
      // Termina sessão SCORM quando o componente desmonta
      scormService.terminate();
    };
  }, []);

  const reportProgress = (data: ScormData) => {
    scormService.setScore(data.score);
    scormService.setLessonStatus(data.completion);
    scormService.commit();
  };

  const completeLesson = (score: number, passed: boolean) => {
    const data: ScormData = {
      score,
      completion: "completed",
      success: passed ? "passed" : "failed",
    };

    reportProgress(data);
  };

  const passCourse = (score: number) => {
    scormService.setScore(score);
    scormService.setLessonStatus("passed");
    scormService.commit();
    return true;
  };

  const setSuspendData = (data: string) => {
    scormService.setSuspendData(data);
    scormService.commit();
  };

  const getSuspendData = (): string | null => {
    return scormService.getSuspendData();
  };

  return {
    reportProgress,
    completeLesson,
    passCourse,
    setSuspendData,
    getSuspendData,
  };
};
