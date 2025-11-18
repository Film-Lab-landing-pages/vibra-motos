import styled from "styled-components";
import {
  BaseContentWrapper,
  BaseText,
  BaseTitle,
  BaseParagraphs,
  ContentImage as BaseContent,
} from "../../styles/ParadaContentStyles";

// Usando os componentes base - resultado visual idêntico
export const ContentWrapper = BaseContentWrapper;
export const Text = BaseText;
export const Title = BaseTitle;
export const Paragraphs = BaseParagraphs;

// ContentImage já é idêntico ao base
export const ContentImage = styled(BaseContent)`
  padding: 5rem 3rem;
`;
