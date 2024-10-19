import { useState } from "react";

import Answers from "./Answers.jsx";
import Progressbar from "./Progressbar.jsx";
import QUESTIONS from "../questions.js";

export default function Question({
  activeQuestionIndx,
  onTimeout,
  onAnswerSelect,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timeout = 10000;
  if (answer.selectedAnswer) {
    timeout = 1000;
  }
  if (answer.isCorrect !== null) {
    timeout = 2000;
  }

  function handleAnswerSelection(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[activeQuestionIndx].answers[0] === answer,
      });

      setTimeout(() => {
        onAnswerSelect(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }
  return (
    <div id="question">
      <Progressbar
        key={timeout}
        timeout={timeout}
        onTimeout={answer.selectedAnswer === "" ? onTimeout : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[activeQuestionIndx].text}</h2>
      <Answers
        answers={QUESTIONS[activeQuestionIndx].answers}
        answerResult={answerState}
        selectedAnswer={answer.selectedAnswer}
        onAnswerSelect={handleAnswerSelection}
      />
    </div>
  );
}
