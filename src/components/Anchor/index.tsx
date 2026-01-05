import React, { useState } from "react";
import { AnchorWrapper } from "./styles";
import { useNavigation } from "../../store/navigationStore";
import { useProgression } from "../../store/progressionStore";

interface AnchorProps {
  variant: "primary" | "secondary";
  position: number;
  iconSrc: string;
  isOpen?: boolean;
  startX: number;
  startY: number;
  spacing: number;
  yOffset: number;
  contentId: number; // ID do content que este anchor controla
  number: number; // Número do anchor (1, 2, 3, etc)
  title: string; // Título do anchor
  onAnchorClick?: (contentId: number) => void;
}

const Anchor: React.FC<AnchorProps> = ({
  variant,
  position,
  iconSrc,
  isOpen = false,
  startX,
  startY,
  spacing,
  yOffset,
  contentId,
  number,
  title,
  onAnchorClick,
}) => {
  const x = startX + position * spacing;
  const y = variant === "primary" ? startY : startY + yOffset;

  const { activeContentId, setActiveContent } = useNavigation();
  const { getAnchorState, isAnchorClickable, updateProgression } =
    useProgression();

  // Estado local para hover (temporário)
  const [isHovering, setIsHovering] = useState(false);

  // Determinar o estado do anchor baseado na progressão
  const anchorState = getAnchorState(contentId, activeContentId || 1);
  const isClickable = isAnchorClickable(contentId);

  // Estados derivados
  const isActive = activeContentId === contentId;
  const isPrevious = anchorState === "previous";
  const isBlocked = anchorState === "blocked";
  const isVisited = isPrevious || isActive; // Visited = previous + active
  const isOpenState = isActive || isHovering;

  // Handlers para hover (só funciona se não estiver bloqueado)
  const handleMouseEnter = () => {
    if (!isBlocked) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Handler para clique no point (só funciona se for clicável)
  const handlePointClick = () => {
    if (isClickable) {
      setActiveContent(contentId);
      updateProgression(contentId); // Atualiza a progressão quando clica

      // Se há callback, chama (para abrir modal)
      if (onAnchorClick) {
        onAnchorClick(contentId);
      }
    }
  };
  return (
    <AnchorWrapper
      $variant={variant}
      $isPrevious={isPrevious}
      $isBlocked={isBlocked}
      style={{
        top: `${y}px`,
        left: `${x}px`,
      }}
    >
      <div className={`line ${isOpenState || isVisited ? "open" : ""}`}></div>
      <div
        className="point"
        onMouseOver={handleMouseEnter}
        onMouseOut={handleMouseLeave}
        onClick={handlePointClick}
        style={{
          cursor: isClickable ? "pointer" : "not-allowed",
        }}
      ></div>
      <div className={`text-box ${isOpenState || isVisited ? "open" : ""}`}>
        <h3 className="number">{number}</h3>
        <p className="title">{title}</p>
      </div>
      <div
        className={`icon ${isOpenState || isVisited ? "open" : ""}`}
        onClick={handlePointClick}
        style={{
          cursor: isClickable ? "pointer" : "not-allowed",
        }}
      >
        <img src={iconSrc} alt={`icon ${position + 1}`} />
      </div>
    </AnchorWrapper>
  );
};

export default Anchor;
