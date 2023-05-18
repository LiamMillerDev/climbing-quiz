// question.tsx
import React from "react";

interface QuestionType {
  text: string;
  answers: string[];
  correctAnswer: string;
}

interface QuestionProps {
  question: QuestionType;
  handleAnswer: (selectedAnswer: string) => void;
  selectedAnswer: string | null;
  isAnswered: boolean;
}

const Question: React.FC<QuestionProps> = ({
  question,
  handleAnswer,
  selectedAnswer,
  isAnswered,
}) => {
  return (
    <div className="mb-4">
      <h2 className="mb-2 font-semibold text-xl text-gray-900">
        {question.text}
      </h2>
      <div className="space-y-2">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(answer)}
            className={`block w-full py-2 px-4 rounded ${
              isAnswered
                ? answer === question.correctAnswer
                  ? "bg-green-300"
                  : selectedAnswer === answer
                  ? "bg-red-300"
                  : "bg-blue-200"
                : "bg-blue-200"
            }`}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
