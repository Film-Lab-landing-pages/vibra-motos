import React from "react";
import Retrovisor from "../../components/Retrovisor";

const Retrovisor1 = () => {
  const paragraphs = [
    "O Brasil é, sem dúvida, um país de motociclistas. A moto simboliza liberdade, praticidade e paixão, mas também carrega riscos elevados. Entender o contexto, respeitar as regras e pilotar de forma consciente é o que transforma essa liberdade em algo sustentável.",
    <>
      Ao final, fica uma verdade simples e poderosa:{" "}
      <b>
        não importa se o destino é o trabalho, a estrada ou a trilha… A chegada
        só tem sentido se for com vida.
      </b>
    </>,
    "O Brasil é apaixonado por motos. Mas paixão sem consciência pode virar tragédia. Vale mais chegar um pouco depois do que não chegar. Concorda?",
  ];

  return (
    <Retrovisor
      paragraphs={paragraphs}
      nextRoute="/quiz1"
      nextButtonAlt="Ir para Quiz"
    />
  );
};

export default Retrovisor1;
