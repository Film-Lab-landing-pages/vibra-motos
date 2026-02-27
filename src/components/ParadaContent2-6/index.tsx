import React from "react";
import {
  ContentWrapper,
  Text,
  Title,
  Paragraphs,
  ContentImage,
  ContentVideo,
} from "./styles";
import mapaMoto from "../../assets/img-parada-2-6.png";
import image from "../../assets/video-parada-2-6.webm";
import {
  TitledParagraph,
  TitledList,
  NormalParagraph,
} from "../SmartParagraphs";

interface ParadaContent2_6Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

const ParadaContent2_6: React.FC<ParadaContent2_6Props> = ({
  number = "6",

  imageSrc = mapaMoto,
  imageAlt = "alt prosivório",
}) => {
  return (
    <ContentWrapper className="content">
      <Title>
        <h1 className="number">{number}</h1>
        <div className="title-text">
          <h2>
            <span> Casos reais</span> deixam claro que:
          </h2>
        </div>
      </Title>

      <div className="flex">
        <Text>
          <Paragraphs>
            <TitledList
              items={[
                "Em São Paulo, motociclistas sem capacete têm 3 vezes mais chance de morrer em acidentes do que aqueles que utilizam o equipamento corretamente (Infosiga-SP).",
                "Estudo da Abramet (2022) revelou que o uso completo de equipamentos de proteção reduziu em até 60% a gravidade das lesões analisadas.",
                "Pesquisas da PRF apontam que falhas simples como pneus carecas ou freios gastos estão presentes em 20% dos acidentes com motos em rodovias federais.",
              ]}
            />
            <NormalParagraph>
              Esses dados não deixam dúvidas: prevenção é o caminho mais eficaz
              para salvar vidas.
            </NormalParagraph>
          </Paragraphs>
        </Text>

        <video
          className="content-image"
          src={image}
          width={"45%"}
          autoPlay
          loop
          muted
        />
      </div>
    </ContentWrapper>
  );
};

export default ParadaContent2_6;
