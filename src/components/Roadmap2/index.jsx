import React from "react";
import roadmap from "../../assets/roadmap2.png";
import { Container } from "./styles";
import AnchorsContainer from "../AnchorsContainer";
import { PARADA2_ANCHORS } from "../../data/anchorsData";

export const Roadmap2 = ({ onAnchorClick }) => {
  return (
    <Container>
      <img className="path" src={roadmap} alt="estrada" />
      <AnchorsContainer
        anchors={PARADA2_ANCHORS}
        startX={157.5}
        startY={220}
        spacing={157}
        yOffset={95}
        onAnchorClick={onAnchorClick}
      />
    </Container>
  );
};

export default Roadmap2;
