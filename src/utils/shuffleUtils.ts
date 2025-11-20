// Função para embaralhar um array usando algoritmo Fisher-Yates
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]; // Cria uma cópia para não modificar o original

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

// Função para gerar letras sequenciais (a, b, c, d, etc.)
export function generateSequentialIds(count: number): string[] {
  return Array.from({ length: count }, (_, i) => String.fromCharCode(97 + i)); // 97 = 'a'
}

// Interface para opção de quiz
interface QuizOption {
  id: string;
  text: string;
}

// Interface para questão de quiz
interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
  correctAnswer: string;
}

// Função para processar uma questão e embaralhar suas opções
export function shuffleQuestionOptions(question: QuizQuestion) {
  // Embaralha as opções
  const shuffledOptions = shuffleArray(question.options);

  // Gera novos IDs sequenciais (a, b, c, d)
  const newIds = generateSequentialIds(shuffledOptions.length);

  // Mapeia as opções com novos IDs e encontra a nova posição da resposta correta
  const processedOptions = shuffledOptions.map((option, index) => ({
    ...option,
    originalId: option.id, // Mantém o ID original para referência
    id: newIds[index], // Novo ID sequencial
  }));

  // Encontra qual é a nova letra da resposta correta
  const correctOptionIndex = shuffledOptions.findIndex(
    (option) => option.id === question.correctAnswer
  );
  const newCorrectAnswer = newIds[correctOptionIndex];

  return {
    ...question,
    options: processedOptions,
    correctAnswer: newCorrectAnswer,
    originalCorrectAnswer: question.correctAnswer, // Mantém a referência original
  };
}
