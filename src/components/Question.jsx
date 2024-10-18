import { useState, useCallback } from 'react';

import Answers from './Answers';
import Progressbar from './Progressbar';

const TIMER_TIMEOUT = 5000;
const INTERVAL_STEP = 100;

export default function Question({question, activeIndx, handleAnswerSelect}) {
    const handleSkipAnswerByTimeout = useCallback(() => {() => handleAnswerSelect(null)}, [handleAnswerSelect])

    return (
        <div id="question">
            <Progressbar key={activeIndx} timeout={TIMER_TIMEOUT} intervalStep={INTERVAL_STEP} onTimeout={handleSkipAnswerByTimeout} />
            <h2>{question.text}</h2>
            <Answers answers={question.answers} handleAnswerSelect={handleAnswerSelect}/>
        </div>
    )
}