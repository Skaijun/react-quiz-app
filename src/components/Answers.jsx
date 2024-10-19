import { useRef } from "react";

export default function Answers({
  answers,
  answerResult,
  selectedAnswer,
  onAnswerSelect,
}) {
  let shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current = shuffledAnswers.current.sort(
      () => 0.5 - Math.random()
    );
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isCurrentAnswerSelected = selectedAnswer === answer;
        let cssClasses = "";

        if (answerResult === "answered" && isCurrentAnswerSelected) {
          cssClasses = "selected";
        }

        if (
          (answerResult === "correct" || answerResult === "wrong") &&
          isCurrentAnswerSelected
        ) {
          cssClasses = answerResult;
        }

        return (
          <li key={answer} className="answer">
            <button
              className={cssClasses}
              onClick={() => onAnswerSelect(answer)}
              disabled={answerResult !== ""}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
