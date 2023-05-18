// quiz.tsx
import React from "react";
import Question from "./question";

interface QuestionType {
  text: string;
  answers: string[];
  correctAnswer: string;
}

interface QuizProps {
  questions: QuestionType[];
  handleAnswer: (selectedAnswer: string) => void;
  selectedAnswer: string | null;
  isAnswered: boolean;
}

const Quiz: React.FC<QuizProps> = ({
  questions,
  handleAnswer,
  selectedAnswer,
  isAnswered,
}) => {
  return (
    <div className="quiz grid grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      {questions.map((question, index) => (
        <Question
          key={index}
          question={question}
          handleAnswer={handleAnswer}
          selectedAnswer={selectedAnswer}
          isAnswered={isAnswered}
        />
      ))}
    </div>
  );
};

export default Quiz;
