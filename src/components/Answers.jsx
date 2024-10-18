import { useState } from 'react';

export default function Answers({answers, handleAnswerSelect}) {
    const shuffledAnswers = answers.sort(() => 0.5 - Math.random());

    return (
        <ul id="answers">
            {shuffledAnswers.map(answer => {
                return (
                    <li key={answer} className="answer">
                        <button onClick={() => handleAnswerSelect(answer)}>{answer}</button>
                    </li>
                )
            })}
        </ul>
    )
}