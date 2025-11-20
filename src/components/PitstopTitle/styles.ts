import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const slideRight = keyframes`
  from {
    transform: translateX(-20px);
  }
  to {
    transform: translateX(0);
  }
`;

export const PitstopTitleStyled = styled.div`
  position: relative;
  height: 3rem;
  width: 100%;
  font-family: var(--font-family);
  animation: ${fadeIn} 1s ease-in-out, ${slideRight} 1s ease-in-out;

  .title {
    position: absolute;
    left: 8rem;
    top: 50%;
    padding-top: 0.5rem;
    line-height: 1;
    transform: translateY(-50%);
    font-size: 34px;
  }

  .tarja-paradas {
    height: 3rem;
    width: 100%;
  }

  .tarja-icon {
    position: absolute;
    left: 2rem;
    bottom: 0;
    height: 8.9rem;
  }
`;
