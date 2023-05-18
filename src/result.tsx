// result.tsx
import React from "react";

interface ResultProps {
  score: number;
  total: number;
}

const Result: React.FC<ResultProps> = ({ score, total }) => {
  return (
    <div className="result text-center p-6">
      <h2 className="mb-4 text-3xl font-semibold">
        You scored <span className="text-blue-600">{score}</span> out of{" "}
        <span className="text-blue-600">{total}</span>!
      </h2>
      <p className="text-lg">Well done! You've completed the quiz!</p>
    </div>
  );
};

export default Result;
