import React from "react";
import { useTimerStore } from "../../store/timerStore";
import { DEFAULT_TIMER_DURATION } from "../../constants/timer";
import * as S from "./styles";

interface TimerProps {
  contentId: string;
  duration?: number; // Duração em segundos (padrão definido em constants/timer.ts)
}

const Timer: React.FC<TimerProps> = ({
  contentId,
  duration = DEFAULT_TIMER_DURATION,
}) => {
  const currentContentTimer = useTimerStore(
    (state) => state.currentContentTimer
  );
  const isContentCompleted = useTimerStore((state) => state.isContentCompleted);

  const progressPercentage = Math.min(
    100,
    (currentContentTimer / duration) * 100
  );
  const isCompleted = isContentCompleted(contentId);

  return (
    <S.TimerContainer>
      <p>
        {isCompleted
          ? "Conteúdo concluído! Você pode avançar."
          : `Você tem ${duration} segundos para concluir este conteúdo.`}
        <br />
        {!isCompleted && "Clique em avançar ao final da contagem."}
      </p>
      <S.TimerDisplay $isCompleted={isCompleted}>
        <S.CircularProgress>
          <S.CircularProgressSvg viewBox="0 0 44 44">
            <S.CircularProgressCircleBackground cx="22" cy="22" r="18" />
            <S.CircularProgressCircle
              cx="22"
              cy="22"
              r="18"
              $progress={progressPercentage}
              $isCompleted={isCompleted}
            />
          </S.CircularProgressSvg>
        </S.CircularProgress>
      </S.TimerDisplay>
    </S.TimerContainer>
  );
};

export default Timer;
