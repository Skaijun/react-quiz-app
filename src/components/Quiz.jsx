import { useState, useCallback } from 'react';

import Question from './Question';
import Results from './Results';
import QUESTIONS from "../questions.js";

export default function Quiz() {
    const [activeQuestionIndx, setActiveQuestionIndx] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    const handleAnswerSelect = useCallback(() => {
        function handleAnswerSelect(userAnswer) {
            setUserAnswers(prevAnswers => {
                return [...prevAnswers, userAnswer];
            })

            setActiveQuestionIndx(prevIndx => prevIndx + 1);
        }
    }, []);

    const isCompleted = activeQuestionIndx === QUESTIONS.length;
    if (isCompleted) {
        return (
            <Results userAnswers={userAnswers} />
        )
    }

    return (
        <div id="quiz">
            <Question key={activeQuestionIndx} activeIndx={activeQuestionIndx} question={QUESTIONS[activeQuestionIndx]} handleAnswerSelect={handleAnswerSelect}/>
        </div>
    )
}