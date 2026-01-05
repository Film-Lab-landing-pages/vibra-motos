import React, { useEffect } from "react";
import * as S from "./styles";
import Timer from "../Timer";
import { NextButton } from "../../styles/ButtonStyles";
import avancar from "../../assets/avancar.png";

interface ContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  contentId: string;
  timerDuration?: number;
  canAdvance: boolean;
  children: React.ReactNode;
}

const ContentModal: React.FC<ContentModalProps> = ({
  isOpen,
  onClose,
  contentId,
  timerDuration = 60,
  canAdvance,
  children,
}) => {
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
            <Timer contentId={contentId} duration={timerDuration} />
            <NextButton
              onClick={onClose}
              disabled={!canAdvance}
              $canAdvance={canAdvance}
            >
              <img src={avancar} alt="Avançar" />
            </NextButton>
          </S.ModalFooter>
        </S.ModalContent>
      </S.ModalCard>
    </S.ModalOverlay>
  );
};

export default ContentModal;
