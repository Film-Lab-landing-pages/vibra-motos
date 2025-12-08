import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContainer, QuizBackground } from "./styles";
import { withPageLoader } from "../../hoc/withPageLoader";
import quizBackground from "../../assets/quiz-background.png";
import seta from "../../assets/seta.png";
import { QUIZ1_DATA } from "../../data/quiz1Data";
import { useScorm } from "../../hooks/useScorm";
import QuizFeedback from "../../components/QuizFeedback";
import { NextButton } from "../../styles/ButtonStyles";
import avancar from "../../assets/avancar.png";
import { useQuizScores } from "../../store/quizScoresStore";
import { shuffleQuestionOptions } from "../../utils/shuffleUtils";
import acerto from "../../assets/acerto.png";
import erro from "../../assets/erro.png";

const Quiz1Base: React.FC = () => {
  // Embaralha as questões uma única vez na inicialização
  const [shuffledQuestions] = useState(() =>
    QUIZ1_DATA.questions.map((question) => shuffleQuestionOptions(question))
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(
    new Set()
  );

  const navigate = useNavigate();

  // Hook SCORM para comunicação com LMS
  const scormHook = useScorm();
  const { completeLesson } = scormHook;

  // Store para armazenar scores dos quizzes
  const { setQuiz1Score } = useQuizScores();

  // Função para calcular pontuação
  const calculateScore = () => {
    let correct = 0;
    shuffledQuestions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    const percentage = Math.round((correct / shuffledQuestions.length) * 100);
    return { correct, total: shuffledQuestions.length, percentage };
  };

  // Função para avançar para a Parada 2
  const handleAdvanceToParada2 = () => {
    // Salva o score do Quiz1 antes de navegar
    const scoreData = calculateScore();
    setQuiz1Score(scoreData);
    navigate("/parada2");
  };

  // Se o quiz foi concluído, mostrar tela de resultado
  if (isCompleted) {
    const scoreData = calculateScore();
    const passed = scoreData.percentage >= 70;

    return (
      <div>
        <QuizFeedback
          score={{
            correct: scoreData.correct,
            total: scoreData.total,
            percentage: scoreData.percentage,
          }}
          nextButton={
            <NextButton onClick={handleAdvanceToParada2}>
              <img src={avancar} alt="Avançar para Parada 2" />
            </NextButton>
          }
        />
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestion.id];
  const isQuestionAnswered = answeredQuestions.has(currentQuestion.id);

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answerId,
    }));
  };

  const handleNext = () => {
    const currentQuestionId = currentQuestion.id;
    const isQuestionAnswered = answeredQuestions.has(currentQuestionId);

    if (!isQuestionAnswered) {
      // Primeira ação: RESPONDER - marcar a questão como respondida
      setAnsweredQuestions((prev) => new Set([...prev, currentQuestionId]));
      return;
    }

    // Segunda ação: PRÓXIMA - avançar para próxima questão ou finalizar
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Quiz finalizado - calcular pontuação e enviar para SCORM
      const scoreData = calculateScore();
      const passed = scoreData.percentage >= 70; // Critério de aprovação: 70%

      // Reportar para SCORM/LMS (com verificação segura)
      if (completeLesson && typeof completeLesson === "function") {
        completeLesson(scoreData.percentage, passed);
      }

      setIsCompleted(true);
    }
  };

  return (
    <div>
      <QuizContainer>
        <QuizBackground>
          <img
            className="bg-image"
            src={quizBackground}
            alt="Quiz Background"
          />

          {/* Indicador de progresso em posição absoluta */}
          <div className="progress-indicator">
            {currentQuestionIndex + 1} de {shuffledQuestions.length}
          </div>

          <div className="text-container">
            <h3 className="title">{QUIZ1_DATA.title}</h3>
            <span className="question-title">
              Pergunta {currentQuestion.id}
            </span>
            <p className="question-text">{currentQuestion.question}</p>

            <ul className="options">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedAnswer === option.id;
                const isCorrect = option.id === currentQuestion.correctAnswer;

                let className = "";
                if (isSelected) className += "selected ";

                if (isQuestionAnswered) {
                  if (isSelected && !isCorrect) {
                    className += "incorrect ";
                  }
                  if (isCorrect) {
                    className += "correct ";
                  }
                }

                return (
                  <li
                    key={option.id}
                    className={className.trim()}
                    onClick={() =>
                      !isQuestionAnswered && handleAnswerSelect(option.id)
                    }
                    style={{
                      cursor: isQuestionAnswered ? "default" : "pointer",
                    }}
                  >
                    {option.id}) {option.text}
                    {isQuestionAnswered && (isSelected || isCorrect) && (
                      <img
                        className="feedback-icon"
                        src={isCorrect ? acerto : erro}
                        alt={isCorrect ? "Correto" : "Incorreto"}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <button
            className="quiz-button"
            onClick={handleNext}
            disabled={!selectedAnswer}
          >
            <p className="button-text">
              {!isQuestionAnswered
                ? "RESPONDER"
                : currentQuestionIndex === shuffledQuestions.length - 1
                ? "FINALIZAR"
                : "PRÓXIMA"}
            </p>
            <img className="seta" src={seta} alt="Seta" />
          </button>
        </QuizBackground>
      </QuizContainer>
    </div>
  );
};

const Quiz1 = withPageLoader(Quiz1Base, {
  imageSources: [quizBackground, seta, avancar],
  minLoadingTime: 400,
  loadingText: "Preparando quiz...",
});

export default Quiz1;
