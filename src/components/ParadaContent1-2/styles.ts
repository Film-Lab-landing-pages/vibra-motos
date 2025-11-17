import styled from "styled-components";
import {
  BaseContentWrapper,
  BaseText,
  BaseTitle,
  BaseParagraphs,
  ContentImageVariant2,
} from "../../styles/ParadaContentStyles";

// Usando os componentes base com props específicas para manter resultado visual idêntico
export const ContentWrapper = styled(BaseContentWrapper)`
  flex-direction: column;
`;

export const Text = styled(BaseText)`
  margin-left: 1rem;
  margin-right: 5rem;
  width: 65%;
`;

export const Title = styled(BaseTitle)`
  flex: 3;
  margin-left: 5rem;

  .title-text span {
    font-size: 64px;
  }
`;

export const Paragraphs = BaseParagraphs;
export const ContentImage = ContentImageVariant2;
