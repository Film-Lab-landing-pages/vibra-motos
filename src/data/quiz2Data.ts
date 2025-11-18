import { QuizData } from "../types/quiz";

export const QUIZ2_DATA: QuizData = {
  title: "VAMOS PRATICAR?",
  questions: [
    {
      id: 1,
      question:
        "De acordo com o conteúdo sobre condução defensiva, qual é o princípio básico para reduzir o risco de acidentes?",
      options: [
        { id: "a", text: "Evitar ultrapassagens em alta velocidade" },
        {
          id: "b",
          text: "Prever cenários adversos e manter distância de segurança",
        },
        { id: "c", text: "Andar sempre no limite de velocidade da via" },
        {
          id: "d",
          text: "Evitar qualquer contato visual com outros motoristas",
        },
      ],
      correctAnswer: "b",
    },
    {
      id: 2,
      question:
        "O que é recomendado para garantir que a moto esteja em condições de segurança?",
      options: [
        { id: "a", text: "Manter a moto o mais leve possível, sem acessórios" },
        {
          id: "b",
          text: "Realizar manutenção preventiva nos itens essenciais",
        },
        {
          id: "c",
          text: "Fazer manutenção apenas quando a moto apresentar problemas",
        },
        {
          id: "d",
          text: "Substituir as peças apenas quando houver desgaste visível",
        },
      ],
      correctAnswer: "b",
    },
    {
      id: 3,
      question:
        "Entre os equipamentos de segurança recomendados, qual deles pode reduzir a gravidade das lesões em braços e tronco em até 60%?",
      options: [
        { id: "a", text: "Capacete de última geração" },
        {
          id: "b",
          text: "Jaqueta com proteções nos ombros, coluna e cotovelos",
        },
        { id: "c", text: "Luvas reforçadas para maior aderência" },
        { id: "d", text: "Calças reforçadas para maior conforto" },
      ],
      correctAnswer: "b",
    },
  ],
};
