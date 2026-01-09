import React, { useEffect } from "react";
import * as S from "./styles";
import Timer from "../Timer";
import { NextButton } from "../../styles/ButtonStyles";
import avancar from "../../assets/avancar.png";
import { DEFAULT_TIMER_DURATION } from "../../constants/timer";
import { useContentTimer } from "../../hooks/useContentTimer";

interface ContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  contentId: string;
  timerDuration?: number;
  children: React.ReactNode;
}

const ContentModal: React.FC<ContentModalProps> = ({
  isOpen,
  onClose,
  contentId,
  timerDuration = DEFAULT_TIMER_DURATION,
  children,
}) => {
  const { canAdvance } = useContentTimer(contentId, timerDuration);
  // Previne scroll do body quando modal está aberta
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <S.ModalOverlay>
      <S.ModalCard $isOpen={isOpen}>
        <S.ModalContent>
          <div className="children">{children}</div>
          <S.ModalFooter>
            <div style={{ flex: 1 }}></div>
            <Timer contentId={contentId} duration={timerDuration} />
            <div
              style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}
            >
              <NextButton
                onClick={onClose}
                disabled={!canAdvance}
                $canAdvance={canAdvance}
              >
                <img src={avancar} alt="Avançar" />
              </NextButton>
            </div>
          </S.ModalFooter>
        </S.ModalContent>
      </S.ModalCard>
    </S.ModalOverlay>
  );
};

export default ContentModal;
