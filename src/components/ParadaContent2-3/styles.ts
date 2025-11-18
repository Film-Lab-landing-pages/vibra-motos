import styled from "styled-components";
import {
  BaseContentWrapper,
  BaseTitle,
  BaseParagraphs,
  TextVariant3,
} from "../../styles/ParadaContentStyles";

// Usando os componentes base com customizações específicas
export const ContentWrapper = styled(BaseContentWrapper)`
  margin-left: 5rem;
  flex-direction: column;

  .flex {
    display: flex;
    margin-bottom: 2rem;
    .content-image {
      padding: 3rem;
    }
  }
`;

export const Text = styled(TextVariant3)`
  margin-left: 0;
  margin-right: 5rem;
  .chamada {
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

export const ContentImage = styled.img`
  /* Estilos para a imagem do conteúdo */
  max-width: 100%;
  height: auto;
`;
