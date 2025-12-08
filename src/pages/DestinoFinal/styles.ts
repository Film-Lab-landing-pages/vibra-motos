import styled from "styled-components";
import {
  BaseContentWrapper,
  BaseText,
  BaseTitle,
  BaseParagraphs,
  ContentImage as BaseContent,
} from "../../styles/ParadaContentStyles";
import { FramedTextTarja1 } from "../../components/FramedText";

// Usando os componentes base - resultado visual idêntico
export const ContentWrapper = styled(BaseContentWrapper)`
  flex-direction: column;

  .body {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 4rem 10%;
  }
  .image-header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .icon-final {
    width: 100px;
  }
  .tarja-listra {
    width: 100%;
  }

  .flex {
    display: flex;
    padding: 0;
    justify-content: center;
  }
`;
export const Text = styled(FramedTextTarja1)``;
export const Title = styled(BaseTitle)`
  margin: 2rem auto 4rem;
  text-align: center;
  display: block;
  .title-text h2 {
    font-size: 58px;
    color: var(--secondary-color);
  }
  .title-text span {
    color: var(--primary-color);
  }
`;
export const Paragraphs = styled(BaseParagraphs)`
  gap: 1rem;
  padding: 3rem 2rem;
  b {
    color: #000;
    margin-bottom: 0;
  }
`;

// ContentImage já é idêntico ao base
export const ContentImage = styled(BaseContent)`
  object-fit: contain;
  margin-left: -2rem;
`;

export const CompleteButton = styled.button`
  background: none;
  border: none;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2.5rem;
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  animation: pulse 2.7s infinite;
  img {
    width: 360px;
    cursor: pointer;
  }
`;
