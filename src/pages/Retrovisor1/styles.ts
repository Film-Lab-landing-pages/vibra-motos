import styled from "styled-components";
import { GlobalContainer } from "../../styles/GlobalStyles";

export const ModuleMain = styled.main`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const RetrovisorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;

  padding: 1rem 5rem;
  .section-title {
    position: relative;
  }

  .section-title-image {
    width: 500px;
  }
  .section-title-text {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 32px;
    text-align: center;
  }

  .section-body {
    position: relative;
  }
  .paragraphs {
    position: absolute;
    left: 0;
    top: 0;
    padding: 4rem 4.6rem;
    color: #000;
    p {
      margin-bottom: 0.5rem;
    }
  }

  .section-body-image {
    width: 600px;
    margin-bottom: 4rem;
  }
  .retrovisor-image {
    position: absolute;
    top: 55%;
    left: 55%;
    width: 600px;
    transform: translate(-50%, -50%);
  }
  .retrovisor-image-back {
    position: absolute;
    transform-origin: center;
    width: 450px;
  }
  .retrovisor-image-front {
    transform-origin: center;
    position: absolute;
    width: 450px;
  }

  border-radius: 16px;
  border: #808080 solid 2px;
  box-shadow: 4px 10px 12px rgba(0, 0, 0, 0.5);
`;
