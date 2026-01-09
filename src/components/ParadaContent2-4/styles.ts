import styled from "styled-components";
import {
  BaseContentWrapper,
  BaseText,
  BaseTitle,
  BaseParagraphs,
} from "../../styles/ParadaContentStyles";
import { FramedTextTarja1 } from "../FramedText";

// Usando os componentes base com customizações específicas
export const ContentWrapper = styled(BaseContentWrapper)`
  margin: 0 4rem;
  flex-direction: column;
  margin-top: 0 !important;
`;

export const Text = styled(FramedTextTarja1)`
  width: 65%;
  margin-left: 0;
  margin-right: 1rem;

  .chamada,
  .conclusao {
    width: 100%;
  }
`;

export const Title = styled(BaseTitle)`
  margin: 0 auto;
  .number {
  }
  .title-text span {
    font-size: 64px;
  }
`;

export const VideoSection = styled.section`
  padding: 0;

  display: flex;

  justify-content: center;
  flex-direction: column;

  align-items: center;

  .video-container {
    width: 70%;
    padding: 1rem;
    background: linear-gradient(to right, #7d7676ff, #3f3b3bff, #686767ff);
    border-radius: 16px;
    border: #808080 solid 2px;
    box-shadow: 4px 10px 12px rgba(0, 0, 0, 0.5);
  }

  video {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 12px;
    display: block;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.7);
  }
`;
