'use client'
import React, { useState } from 'react'
import Answers from '../answers'
import CheckAnswer from '../checkAnswer'

function question(quizType, options, index, handleNext, handleBack) {
    return (
        <div>
            <h1 key={quizType[index].id}>{quizType[index].question}</h1>
            <Answers quizType={quizType[index]} index={index} handleNext={handleNext} handleBack={handleBack} />
        </div>
    )
}


function Questions({ sportsQuiz, randomQuiz, filmQuiz, historyQuiz, musicQuiz, generalKnowledgeQuiz, category }) {

    const [options, setOptions] = useState(true)
    const [index, setIndex] = useState(0)

    const handleNext = () => {
        if (index < 9) {
            setIndex(index + 1);
        }
    };
    const handleBack = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };
    return (
        <div>
            <h1 className="text-3xl font-bold italic">ADAM ASMACA QUİZ</h1>
            {category == "sports" && (
                question(sportsQuiz, options, index, handleNext, handleBack)
            )}
            {category == "film" && (
                question(filmQuiz, options, index, handleNext, handleBack)
            )}
            {category == "history" && (
                question(historyQuiz, options, index, handleNext, handleBack)
            )}
            {category == "music" && (
                question(musicQuiz, options, index, handleNext, handleBack)
            )}
            {category == "generalknowledge" && (
                question(generalKnowledgeQuiz, options, index, handleNext, handleBack)
            )}
            {category == "random" && (
                question(randomQuiz, options, index, handleNext, handleBack)
            )}
        </div>
    )
}

export default Questions