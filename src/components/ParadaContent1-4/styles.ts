import styled from "styled-components";
import {
  BaseContentWrapper,
  BaseText,
  BaseTitle,
  BaseParagraphs,
  ContentImageVariant4,
} from "../../styles/ParadaContentStyles";

// Usando os componentes base com customizações específicas
export const ContentWrapper = styled(BaseContentWrapper)`
  margin-left: 5rem;
  flex-direction: column;

  .flex {
    display: flex;
    margin-bottom: 2rem;
    gap: 1rem;
  }
`;

export const Text = styled(BaseText)`
  width: 65%;
  margin-left: 0;
  margin-right: 1rem;

  .chamada,
  .conclusao {
    width: 100%;
  }
`;

export const Title = styled(BaseTitle)`
  .title-text span {
    font-size: 64px;
  }
`;

export const Paragraphs = styled(BaseParagraphs)`
  p {
    .paragraph-title {
      color: var(--primary-color);
    }
  }
`;

export const ContentImage = ContentImageVariant4;
