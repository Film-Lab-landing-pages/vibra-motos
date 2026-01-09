import React from "react";
import { ContentWrapper, Text, Title, VideoSection } from "./styles";
import ContentImage from "../ContentImage";
import paradaVideo from "../../assets/video-cego.mp4";

interface ParadaContent3_1Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}
const ParadaContent3_1: React.FC<ParadaContent3_1Props> = ({
  number = "1",
}) => {
  return (
    <ContentWrapper className="content">
      <Title>
        <h1 className="number">{number}</h1>
        <div className="title-text">
          <h2 className="title">
            Ponto cego: o <span>inimigo invisível</span>
          </h2>
        </div>
      </Title>
      <VideoSection>
        <div className="video-container">
          <video
            src={paradaVideo}
            title="Ponto cego: o inimigo invisível"
            controls
            width="100%"
          ></video>
        </div>
      </VideoSection>
    </ContentWrapper>
  );
};

export default ParadaContent3_1;
