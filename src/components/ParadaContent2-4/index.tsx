import React from "react";
import { ContentWrapper, Text, Title, VideoSection } from "./styles";
import ContentImage from "../ContentImage";
import paradaVideo from "../../assets/video-armadura.mp4";

interface ParadaContent2_4Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}
const ParadaContent2_4: React.FC<ParadaContent2_4Props> = ({
  number = "4",
}) => {
  return (
    <ContentWrapper className="content">
      <Title>
        <h1 className="number">{number}</h1>
        <div className="title-text">
          <h2 className="title">
            Equipamentos: a <span>armadura</span> do piloto
          </h2>
        </div>
      </Title>
      <VideoSection>
        <div className="video-container">
          <video
            src={paradaVideo}
            title="Equipamentos: a armadura do piloto"
            controls
            width="100%"
          ></video>
        </div>
      </VideoSection>
    </ContentWrapper>
  );
};

export default ParadaContent2_4;
