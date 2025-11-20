import { create } from "zustand";

interface QuizScore {
  correct: number;
  total: number;
  percentage: number;
}

interface QuizScoresState {
  quiz1Score: QuizScore | null;
  quiz2Score: QuizScore | null;
  quiz3Score: QuizScore | null;
  setQuiz1Score: (score: QuizScore) => void;
  setQuiz2Score: (score: QuizScore) => void;
  setQuiz3Score: (score: QuizScore) => void;
  getTotalScore: () => QuizScore;
  resetScores: () => void;
}

export const useQuizScores = create<QuizScoresState>((set, get) => ({
  quiz1Score: null,
  quiz2Score: null,
  quiz3Score: null,

  setQuiz1Score: (score) => set({ quiz1Score: score }),
  setQuiz2Score: (score) => set({ quiz2Score: score }),
  setQuiz3Score: (score) => set({ quiz3Score: score }),

  getTotalScore: () => {
    const { quiz1Score, quiz2Score, quiz3Score } = get();

    const totalCorrect =
      (quiz1Score?.correct || 0) +
      (quiz2Score?.correct || 0) +
      (quiz3Score?.correct || 0);

    const totalQuestions =
      (quiz1Score?.total || 0) +
      (quiz2Score?.total || 0) +
      (quiz3Score?.total || 0);

    const percentage =
      totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0;

    return {
      correct: totalCorrect,
      total: totalQuestions,
      percentage: Math.round(percentage),
    };
  },

  resetScores: () =>
    set({
      quiz1Score: null,
      quiz2Score: null,
      quiz3Score: null,
    }),
}));
