import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContainer, QuizBackground } from "./styles";
import quizBackground from "../../assets/quiz-background.png";
import seta from "../../assets/seta.png";
import { QUIZ1_DATA } from "../../data/quiz1Data";
import { useScorm } from "../../hooks/useScorm";

const Quiz1: React.FC = () => {
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

  console.log("useScorm retornou:", scormHook);
  console.log("completeLesson:", completeLesson);

  // Função para calcular pontuação
  const calculateScore = () => {
    let correct = 0;
    QUIZ1_DATA.questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    const percentage = Math.round(
      (correct / QUIZ1_DATA.questions.length) * 100
    );
    return { correct, total: QUIZ1_DATA.questions.length, percentage };
  };

  // Função para avançar para a Parada 2
  const handleAdvanceToParada2 = () => {
    navigate("/parada2");
  };

  // Debug log
  console.log("Estado isCompleted:", isCompleted);

  // Se o quiz foi concluído, mostrar tela de resultado
  if (isCompleted) {
    console.log("Renderizando tela de resultado");
    const scoreData = calculateScore();
    const passed = scoreData.percentage >= 70;

    return (
      <div>
        <QuizContainer>
          <QuizBackground>
            <img
              className="bg-image"
              src={quizBackground}
              alt="Quiz Background"
            />
            <div className="text-container">
              <div className="provisional-screen">
                <h2 className="provisional-title">Quiz Concluído!</h2>
                <div className="score-display">
                  <h3 className="score-title">Resultado do Quiz</h3>
                  <div className="score-info">
                    <p className="score-text">
                      Sua pontuação:{" "}
                      <strong>
                        {scoreData.correct}/{scoreData.total} acertos
                      </strong>
                    </p>
                    <p className="score-percentage">
                      ({scoreData.percentage}%)
                    </p>
                    <p className="status-text">
                      Status: {passed ? "✅ APROVADO" : "⚠️ NECESSITA MELHORIA"}
                    </p>
                  </div>
                </div>
                <div className="test-info">
                  <p className="test-note">
                    Score registrado no sistema SCORM: {scoreData.percentage}%
                  </p>
                  <p className="test-note">
                    Parabéns! Agora você pode avançar para a próxima parada.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="quiz-button"
              onClick={handleAdvanceToParada2}
              style={{ marginTop: "2rem" }}
            >
              <p className="button-text">AVANÇAR PARA PARADA 2</p>
              <img className="seta" src={seta} alt="Seta" />
            </button>
          </QuizBackground>
        </QuizContainer>
      </div>
    );
  }

  const currentQuestion = QUIZ1_DATA.questions[currentQuestionIndex];
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
    console.log(
      "handleNext chamado - currentQuestionIndex:",
      currentQuestionIndex
    );
    console.log("Total de questões:", QUIZ1_DATA.questions.length);

    if (currentQuestionIndex < QUIZ1_DATA.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      console.log("Finalizando quiz...");

      // Quiz finalizado - calcular pontuação e enviar para SCORM
      const scoreData = calculateScore();
      const passed = scoreData.percentage >= 70; // Critério de aprovação: 70%

      console.log("Score calculado:", scoreData);
      console.log("Aprovado:", passed);

      // Reportar para SCORM/LMS (com verificação segura)
      if (completeLesson && typeof completeLesson === "function") {
        completeLesson(scoreData.percentage, passed);
      } else {
        console.warn(
          "completeLesson não está disponível - funcionando em modo desenvolvimento"
        );
      }

      console.log("Definindo isCompleted como true");
      setIsCompleted(true);

      console.log(
        `Quiz finalizado! Pontuação: ${scoreData.correct}/${scoreData.total} (${
          scoreData.percentage
        }%) - ${passed ? "APROVADO" : "NECESSITA MELHORIA"}`
      );
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
            {currentQuestionIndex + 1} de {QUIZ1_DATA.questions.length}
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
                : currentQuestionIndex === QUIZ1_DATA.questions.length - 1
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

export default Quiz1;
