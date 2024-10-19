import { useState, useCallback } from "react";

import Results from "./Results.jsx";
import Question from "./Question.jsx";
import QUESTIONS from "../questions.js";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndx = userAnswers.length;
  const isCompleted = activeQuestionIndx === QUESTIONS.length;

  const handleAnswerSelect = useCallback((selectedUserAnswer) => {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedUserAnswer];
    });
  }, []);

  const handleSkipAnswerByTimeout = useCallback(
    () => handleAnswerSelect(null),
    [handleAnswerSelect]
  );

  if (isCompleted) {
    return <Results userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndx}
        activeQuestionIndx={activeQuestionIndx}
        onTimeout={handleSkipAnswerByTimeout}
        onAnswerSelect={handleAnswerSelect}
      />
    </div>
  );
}
