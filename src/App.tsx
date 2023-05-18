// App.tsx
import React, { useState } from "react";
import "./App.css";
import Quiz from "./quiz";
import Result from "./result";

interface QuestionType {
  text: string;
  answers: string[];
  correctAnswer: string;
}

const questions: QuestionType[] = [
  {
    text: "Which type of climbing involves a rope from above for safety?",
    answers: [
      "Bouldering",
      "Top-rope climbing",
      "Free soloing",
      "Deep water soloing",
    ],
    correctAnswer: "Top-rope climbing",
  },
  {
    text: "What is the name of the world famous climbing area in Yosemite National Park, USA?",
    answers: ["El Capitan", "K2", "Everest", "Kilimanjaro"],
    correctAnswer: "El Capitan",
  },
  // Add as many questions as you like
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (selectedAnswer: string) => {
    setSelectedAnswer(selectedAnswer);
    setIsAnswered(true);

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setIsAnswered(false);
      } else {
        setShowScore(true);
      }
    }, 1000); // Wait 1 second before going to the next question
  };

  return (
    <div className="App bg-gradient-to-r from-pink-200 via-blue-200 to-purple-200 min-h-screen flex items-center justify-center">
      {showScore ? (
        <Result score={score} total={questions.length} />
      ) : (
        <Quiz
          questions={[questions[currentQuestion]]}
          handleAnswer={handleAnswer}
          selectedAnswer={selectedAnswer}
          isAnswered={isAnswered}
        />
      )}
    </div>
  );
}

export default App;
