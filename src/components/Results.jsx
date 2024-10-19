import QUESTIONS from "../questions.js";
import summaryImg from "../assets/quiz-complete.png";

export default function Results({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, i) => answer === QUESTIONS[i].answers[0]
  );

  const skippedPercentage = Math.round(
    (skippedAnswers.length / QUESTIONS.length) * 100
  );
  const correctPercentage = Math.round(
    (correctAnswers.length / QUESTIONS.length) * 100
  );
  const wrongPercentage = 100 - correctPercentage - skippedPercentage;

  return (
    <div id="summary">
      <img src={summaryImg} alt="" />
      <h2>Finish!</h2>
      <ol id="summary-stats">
        <li>
          <p className="number">{skippedPercentage}%</p>
          <p className="text">skipped</p>
        </li>
        <li>
          <p className="number">{correctPercentage}%</p>
          <p className="text">correct</p>
        </li>
        <li>
          <p className="number">{wrongPercentage}%</p>
          <p className="text">wrong</p>
        </li>
      </ol>
      <div>
        <h3>Answers:</h3>
        <ol>
          {userAnswers.map((userAnswer, i) => {
            // wrong skipped correct
            let cssClass = "user-answer";
            if (userAnswer === null) {
              cssClass = cssClass + " skipped";
            } else if (userAnswer === QUESTIONS[i].answers[0]) {
              cssClass = cssClass + " correct";
            } else {
              cssClass = cssClass + " wrong";
            }

            return (
              <li key={i}>
                <p className="question">{QUESTIONS[i].text}</p>
                <p className={cssClass}>{userAnswer}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
