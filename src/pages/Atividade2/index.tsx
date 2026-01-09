import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AtividadeContainer,
  ActivityCard,
  InstructionHeader,
  GameArea,
  LeftColumn,
  RightColumn,
  AvatarContainer,
  EquipmentsGrid,
  EquipmentItem,
  ProgressBar,
  ProgressFill,
  ProgressText,
  BottomContainer,
} from "./styles";
import { NextButton } from "../../styles/ButtonStyles";
import { withPageLoader } from "../../hoc/withPageLoader";
import { useScorm } from "../../hooks/useScorm";
import atividadeIcon from "../../assets/atividade.png";
import avancarIcon from "../../assets/avancar.png";

// Atividade 2 - Boneco base
import bonecoBase from "../../assets/atividade2/atividade-2-boneco.png";

// Equipamentos posicionados no boneco (absolute positioning)
import capaceteBoneco from "../../assets/atividade2/atividade-2-capacete-boneco.png";
import jaquetaBoneco from "../../assets/atividade2/atividade-2-jaqueta-boneco.png";
import joelheiraBoneco from "../../assets/atividade2/atividade-2-joelheira-boneco.png";
import botasBoneco from "../../assets/atividade2/atividade-2-botas-boneco.png";
import luvasBoneco from "../../assets/atividade2/atividade-2-luvas-boneco.png";

// Equipamentos soltos (opções para selecionar)
import capacete from "../../assets/atividade2/atividade-2-capacete.png";
import jaqueta from "../../assets/atividade2/atividade-2-jaqueta.png";
import joelheira from "../../assets/atividade2/atividade-2-joelheira.png"; // Falta arquivo joelheira solto
import botas from "../../assets/atividade2/atividade-2-botas.png";
import chinelo from "../../assets/atividade2/atividade-2-chinelo.png";
import luvas from "../../assets/atividade2/atividade-2-luvas.png";
import luvasForno from "../../assets/atividade2/atividade-2-luvas-forno.png";
import oculos from "../../assets/atividade2/atividade-2-oculos.png";

interface Equipment {
  id: string;
  name: string;
  image: string;
  isCorrect: boolean;
  bonecoImage?: string;
}

const EQUIPMENTS: Equipment[] = [
  // Primeira linha: joelheira, chinelo, óculos, luva
  {
    id: "joelheira",
    name: "Joelheira",
    image: joelheira,
    isCorrect: true,
    bonecoImage: joelheiraBoneco,
  },
  { id: "chinelo", name: "Chinelo", image: chinelo, isCorrect: false },
  { id: "oculos", name: "Óculos", image: oculos, isCorrect: false },
  {
    id: "luvas",
    name: "Luvas",
    image: luvas,
    isCorrect: true,
    bonecoImage: luvasBoneco,
  },
  // Segunda linha: capacete, jaqueta, botas, luvas forno
  {
    id: "capacete",
    name: "Capacete",
    image: capacete,
    isCorrect: true,
    bonecoImage: capaceteBoneco,
  },
  {
    id: "luvasForno",
    name: "Luvas de Forno",
    image: luvasForno,
    isCorrect: false,
  },
  {
    id: "jaqueta",
    name: "Jaqueta",
    image: jaqueta,
    isCorrect: true,
    bonecoImage: jaquetaBoneco,
  },
  {
    id: "botas",
    name: "Botas",
    image: botas,
    isCorrect: true,
    bonecoImage: botasBoneco,
  },
];

const Atividade2Base: React.FC = () => {
  const navigate = useNavigate();
  const { reportProgress } = useScorm();

  const [equippedItems, setEquippedItems] = useState<Set<string>>(new Set());
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);
  const [hasReportedCompletion, setHasReportedCompletion] = useState(false);

  const correctEquipments = EQUIPMENTS.filter((e) => e.isCorrect);
  const totalCorrect = correctEquipments.length;
  const completedCount = equippedItems.size;
  const progress = (completedCount / totalCorrect) * 100;
  const isCompleted = completedCount === totalCorrect;

  // Reporta conclusão da atividade ao SCORM quando completada
  useEffect(() => {
    if (isCompleted && !hasReportedCompletion && reportProgress) {
      reportProgress({
        score: 100,
        completion: "incomplete", // Mantém como incomplete até o curso todo ser concluído
        success: "passed",
      });
      setHasReportedCompletion(true);
    }
  }, [isCompleted, hasReportedCompletion, reportProgress]);

  const handleDragStart = (equipmentId: string) => {
    setDraggedItem(equipmentId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (!draggedItem) return;

    const equipment = EQUIPMENTS.find((eq) => eq.id === draggedItem);
    if (!equipment) return;

    if (equipment.isCorrect) {
      // Equipamento correto - adiciona ao set
      setEquippedItems((prev) => new Set([...prev, draggedItem]));
    } else {
      // Equipamento incorreto - mostra erro
      setShowError(true);
      setTimeout(() => setShowError(false), 500);
    }

    setDraggedItem(null);
  };

  const handleAdvance = () => {
    if (isCompleted) {
      navigate("/parada3");
    }
  };

  const isEquipmentUsed = (equipmentId: string) => {
    return equippedItems.has(equipmentId);
  };

  return (
    <AtividadeContainer>
      <ActivityCard>
        <InstructionHeader>
          <img
            src={atividadeIcon}
            className="atividade-title"
            alt="Atividade"
          />
          <p className="instruction-text">
            Vista o motociclista com os <br /> equipamentos de segurança.
          </p>
          <p className="instruction-text-2">
            Clique nos equipamentos e <br /> arraste para o motociclista.
          </p>
        </InstructionHeader>

        <GameArea className="game-area" $showError={showError}>
          <LeftColumn>
            <AvatarContainer
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              $showError={showError}
            >
              <img
                src={bonecoBase}
                alt="Motociclista"
                className="boneco-base"
              />

              {/* Equipamentos posicionados absolute - só aparecem quando equipados */}
              {equippedItems.has("capacete") && (
                <img
                  src={capaceteBoneco}
                  alt="Capacete"
                  className="equipment-boneco capacete"
                />
              )}
              {equippedItems.has("jaqueta") && (
                <img
                  src={jaquetaBoneco}
                  alt="Jaqueta"
                  className="equipment-boneco jaqueta"
                />
              )}
              {equippedItems.has("joelheira") && (
                <img
                  src={joelheiraBoneco}
                  alt="Joelheira"
                  className="equipment-boneco joelheira"
                />
              )}
              {equippedItems.has("botas") && (
                <img
                  src={botasBoneco}
                  alt="Botas"
                  className="equipment-boneco botas"
                />
              )}
              {equippedItems.has("luvas") && (
                <img
                  src={luvasBoneco}
                  alt="Luvas"
                  className="equipment-boneco luvas"
                />
              )}
            </AvatarContainer>
          </LeftColumn>

          <RightColumn>
            <EquipmentsGrid>
              {EQUIPMENTS.map((equipment) => (
                <EquipmentItem
                  key={equipment.id}
                  draggable={!isEquipmentUsed(equipment.id)}
                  onDragStart={() => handleDragStart(equipment.id)}
                  $isUsed={isEquipmentUsed(equipment.id)}
                >
                  <img src={equipment.image} alt={equipment.name} />
                </EquipmentItem>
              ))}
            </EquipmentsGrid>
          </RightColumn>
        </GameArea>
      </ActivityCard>

      {/* Barra de progresso e botão de avançar */}
      <BottomContainer>
        <ProgressBar $completed={isCompleted}>
          <ProgressFill $progress={progress}>
            <ProgressText $completed={isCompleted}>
              Conclua a atividade para avançar
            </ProgressText>
            <ProgressText $completed={isCompleted} className="completed">
              Conteúdo concluído! Você pode avançar.
            </ProgressText>
          </ProgressFill>
        </ProgressBar>
        <NextButton $canAdvance={isCompleted} onClick={handleAdvance}>
          <img src={avancarIcon} alt="Avançar" />
        </NextButton>
      </BottomContainer>
    </AtividadeContainer>
  );
};

const Atividade2 = withPageLoader(Atividade2Base, {
  imageSources: [
    atividadeIcon,
    avancarIcon,
    bonecoBase,
    capaceteBoneco,
    jaquetaBoneco,
    joelheiraBoneco,
    botasBoneco,
    luvasBoneco,
    capacete,
    jaqueta,
    botas,
    chinelo,
    luvas,
    luvasForno,
    oculos,
  ],
  minLoadingTime: 400,
  loadingText: "Carregando atividade...",
});

export default Atividade2;
