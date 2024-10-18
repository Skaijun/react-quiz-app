import { useState } from 'react';

import Answers from './Answers';

export default function Question({question, handleAnswerSelect}) {

    return (
        <div id="question">
            <h2>{question.text}</h2>
            <Answers answers={question.answers} handleAnswerSelect={handleAnswerSelect}/>
        </div>
    )
}