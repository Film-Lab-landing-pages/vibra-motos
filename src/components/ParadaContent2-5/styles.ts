import styled from "styled-components";
import {
  BaseContentWrapper,
  BaseText,
  BaseTitle,
  BaseParagraphs,
  ContentImage as BaseContent,
} from "../../styles/ParadaContentStyles";

// Usando os componentes base - resultado visual idêntico
export const ContentWrapper = styled(BaseContentWrapper)`
  flex-direction: column;
  .flex {
    display: flex;
  }
`;
export const Text = BaseText;
export const Title = styled(BaseTitle)`
  margin-left: 5rem;
  margin-bottom: 0;
`;
export const Paragraphs = BaseParagraphs;

// ContentImage já é idêntico ao base
export const ContentImage = styled(BaseContent)`
  padding: 5rem 3rem;
`;
