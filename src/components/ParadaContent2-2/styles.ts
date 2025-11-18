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
    flex-direction: column;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    align-items: center;
    width: 100%;
    .content-image {
      width: 80%;
      object-fit: contain;
    }
  }
`;

export const Text = styled(TextVariant3)`
  margin-left: 0;
  margin-right: 5rem;
`;

export const Title = styled(BaseTitle)`
  .title-text span {
    font-size: 64px;
  }
`;

export const Paragraphs = styled(BaseParagraphs)`
  p {
    text-align: justify;

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
