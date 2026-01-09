import styled from "styled-components";
import { FramedTextTarja2 } from "../../components/FramedText";

export const AtividadeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem 0.5rem 2rem;
`;

export const ActivityCard = styled(FramedTextTarja2)`
  margin: 0 auto;
  width: 80%;
  border-radius: 16px;
  overflow: hidden;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &::before {
    display: none;
  }
  &::after {
    border-radius: 0 0 16px 16px;
  }

  > div {
    border-radius: 16px 16px 0 0;
    padding: 0;
  }
`;

export const InstructionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  padding: 1rem 2rem;
  background-color: #96d6ac;

  .atividade-title {
    height: 100px;
  }

  .instruction-text {
    color: #49594c;
    font-family: "Acumin Pro Condensed";
    font-size: 2.1rem;
    font-style: italic;
    font-weight: 700;
    line-height: 30px; /* 83.333% */
  }
  .instruction-text-2 {
    color: #115727;
    font-family: "Acumin Pro Condensed";
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 700;
    line-height: 24px; /* 100% */
  }
`;

export const GameArea = styled.div<{ $showError?: boolean }>`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 3rem;
  min-height: 360px;
  background-color: ${(props) =>
    props.$showError ? "rgba(255, 0, 0, 0.5)" : "transparent"} !important;
  transition: background-color 0.3s ease;
`;

export const LeftColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 2;
`;

export const RightColumn = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 2;
`;

export const BottomContainer = styled.div`
  width: calc(100% - 4rem);
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const ProgressBar = styled.div<{ $completed: boolean }>`
  flex: 1;
  height: 50px;
  background-color: ${(props) => (props.$completed ? "#137b1a" : "#2d5f44")};
  border-radius: 30px;
  overflow: visible;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px;
  transition: background-color 0.5s ease;
`;

export const ProgressText = styled.span<{ $completed: boolean }>`
  color: #fff;
  text-align: center;
  font-family: "Acumin Pro Condensed";
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 700;
  line-height: 30px; /* 125% */
  z-index: 2;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  transition: opacity 0.5s ease;
  opacity: ${(props) => (props.$completed ? 0 : 1)};

  &.completed {
    opacity: ${(props) => (props.$completed ? 1 : 0)};
  }
`;

interface ProgressFillProps {
  $progress: number;
}

export const ProgressFill = styled.div<ProgressFillProps>`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    left: ${(props) => (props.$progress === 100 ? "calc(100% - 40px)" : "0")};
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-color: ${(props) =>
      props.$progress === 100 ? "#96d6ac" : "#fff"};
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transition: left 0.8s ease, background-color 0.5s ease 0.3s;
  }
`;

export const AvatarContainer = styled.div<{ $showError: boolean }>`
  position: relative;
  width: auto;
  height: 350px;
  margin: 0 auto;
  cursor: ${(props) => (props.$showError ? "not-allowed" : "default")};

  .boneco-base {
    height: 100%;
    width: auto;
    display: block;
    margin: 0 auto;
  }

  .equipment-boneco {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: auto;
    pointer-events: none;
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${(props) =>
    props.$showError &&
    `
    animation: shake 0.5s ease;

    
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10% { transform: translateX(-5px); }
      25% { transform: translateX(7px); }
      40% { transform: translateX(-5px); }
      55% { transform: translateX(5px); }
      70% { transform: translateX(-3px); }
      85% { transform: translateX(3px); }
    }
  `}
`;

export const EquipmentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 2rem;
  align-items: center;
`;

export const EquipmentItem = styled.div<{ $isUsed: boolean }>`
  cursor: ${(props) => (props.$isUsed ? "not-allowed" : "grab")};
  opacity: ${(props) => (props.$isUsed ? 0.3 : 1)};
  transition: all 0.3s ease;
  filter: ${(props) => (props.$isUsed ? "grayscale(100%)" : "none")};
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    cursor: ${(props) => (props.$isUsed ? "not-allowed" : "grabbing")};
  }

  &:hover:not([style*="not-allowed"]) {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;
