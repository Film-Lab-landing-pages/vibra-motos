import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContainer, QuizBackground } from "../Quiz1/styles";
import { withPageLoader } from "../../hoc/withPageLoader";
import quizBackground from "../../assets/quiz-background.png";
import seta from "../../assets/seta.png";
import { QUIZ3_DATA } from "../../data/quiz3Data";
import { useScorm } from "../../hooks/useScorm";
import QuizFeedback from "../../components/QuizFeedback";
import CourseFeedback from "../../components/CourseFeedback";
import { NextButton } from "../../styles/ButtonStyles";
import avancar from "../../assets/avancar.png";
import reiniciar from "../../assets/reiniciar.png";
import { useQuizScores } from "../../store/quizScoresStore";
import { shuffleQuestionOptions } from "../../utils/shuffleUtils";
import acerto from "../../assets/acerto.png";
import erro from "../../assets/erro.png";

const Quiz3Base: React.FC = () => {
  // Embaralha as questões uma única vez na inicialização
  const [shuffledQuestions] = useState(() =>
    QUIZ3_DATA.questions.map((question) => shuffleQuestionOptions(question))
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [showCourseFeedback, setShowCourseFeedback] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(
    new Set()
  );

  const navigate = useNavigate();

  // Hook SCORM para comunicação com LMS
  const scormHook = useScorm();
  const { completeLesson, setSuspendData } = scormHook;

  // Store para armazenar scores dos quizzes
  const { setQuiz3Score, getTotalScore } = useQuizScores();

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

  // Função para continuar para o feedback do curso
  const handleContinueToCourseFeedback = () => {
    // Salva o score do Quiz3
    const scoreData = calculateScore();
    setQuiz3Score(scoreData);
    setShowCourseFeedback(true);
  };

  // Função para finalizar o curso
  const handleCourseComplete = () => {
    // Calcular score total e determinar se passou
    const totalScore = getTotalScore();
    const passed = totalScore.correct >= 8; // Desempenho alto = passou

    // Marcar curso como completo no SCORM
    if (completeLesson && typeof completeLesson === "function") {
      completeLesson(totalScore.percentage, passed);
    }

    // Navegar para página final ou início
    navigate("/destinofinal");
  };

  // Função para reiniciar o curso
  const handleRestart = () => {
    // Limpar localStorage (timer e progression)
    localStorage.removeItem("timer-storage");
    localStorage.removeItem("progression-storage");

    // Limpar quiz scores
    localStorage.removeItem("quiz-scores-storage");

    // Limpar suspend_data no SCORM
    if (setSuspendData && typeof setSuspendData === "function") {
      setSuspendData("");
    }

    // Navegar para o início
    navigate("/");

    // Forçar reload da página para garantir que tudo seja resetado
    window.location.reload();
  };

  // Se deve mostrar o feedback do curso
  if (showCourseFeedback) {
    const totalScore = getTotalScore();

    return (
      <div>
        <CourseFeedback
          totalScore={totalScore}
          nextButton={
            <NextButton onClick={handleCourseComplete}>
              <img src={avancar} alt="Finalizar Curso" />
            </NextButton>
          }
          restartButton={
            <NextButton onClick={handleRestart}>
              <img src={reiniciar} alt="Reiniciar Curso" />
            </NextButton>
          }
        />
      </div>
    );
  }

  // Se o quiz foi concluído, mostrar tela de resultado do Quiz3
  if (isCompleted) {
    const scoreData = calculateScore();

    return (
      <div>
        <QuizFeedback
          score={{
            correct: scoreData.correct,
            total: scoreData.total,
            percentage: scoreData.percentage,
          }}
          nextButton={
            <NextButton onClick={handleContinueToCourseFeedback}>
              <img src={avancar} alt="Ver Resultado Final" />
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
    if (isQuestionAnswered) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answerId,
    }));
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    if (!isQuestionAnswered) {
      // Primeira vez respondendo esta pergunta
      setAnsweredQuestions((prev) => new Set([...prev, currentQuestion.id]));
    } else {
      // Navegação entre perguntas
      if (currentQuestionIndex === shuffledQuestions.length - 1) {
        // Última pergunta - finalizar quiz
        setIsCompleted(true);

        // Calcular e registrar pontuação no SCORM
        const scoreData = calculateScore();

        if (completeLesson && typeof completeLesson === "function") {
          completeLesson(scoreData.percentage, scoreData.percentage >= 70);
        }
      } else {
        // Próxima pergunta
        setCurrentQuestionIndex((prev) => prev + 1);
      }
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
            <h3 className="title">{QUIZ3_DATA.title}</h3>
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

const Quiz3 = withPageLoader(Quiz3Base, {
  imageSources: [quizBackground, seta, avancar, reiniciar, acerto, erro],
  minLoadingTime: 400,
  loadingText: "Preparando quiz...",
});

export default Quiz3;
