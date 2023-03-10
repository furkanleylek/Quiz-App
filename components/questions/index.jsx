'use client'
import React, { useState } from 'react'
import Answers from '../answers'
import { useQuestionsContext } from '../context'
import GameOver from '../gameover'
function question(quizType, index, handleNext, questionNumber) {

    return (
        <div className=' h-full '>
            <div className='mt-12 flex flex-col justify-center items-center mx-4 gap-12 '>
                <h1 key={quizType[index].id} className="text-3xl text-center " >{quizType[index].question}</h1>
                <Answers quizType={quizType[index]} handleNext={handleNext} />
            </div>
            {
                questionNumber == 11 && (
                    <GameOver />
                )
            }
        </div>
    )
}


function Questions({ sportsQuiz, randomQuiz, filmQuiz, historyQuiz, musicQuiz, generalKnowledgeQuiz }) {

    const { category, questionNumber } = useQuestionsContext()


    const [index, setIndex] = useState(0)


    const handleNext = () => {
        if (index < 9) {
            setIndex(index + 1);
        }
    };
    return (
        <div className='h-full mt-12 flex flex-col justify-center items-center'>
            {questionNumber < 11 && (
                <div>
                    <div className='text-center md:mt-16'>
                        <span className='border-[6px] border-orange-500 py-4 px-7 text-3xl text-center font-extrabold rounded-[100%]'>{questionNumber}</span>
                    </div>
                </div>
            )}
            {category == "sports" && (
                question(sportsQuiz, index, handleNext, questionNumber)
            )}
            {category == "film" && (
                question(filmQuiz, index, handleNext, questionNumber)
            )}
            {category == "history" && (
                question(historyQuiz, index, handleNext, questionNumber)
            )}
            {category == "music" && (
                question(musicQuiz, index, handleNext, questionNumber)
            )}
            {category == "generalknowledge" && (
                question(generalKnowledgeQuiz, index, handleNext, questionNumber)
            )}
            {category == "random" && (
                question(randomQuiz, index, handleNext, questionNumber)
            )}
        </div>
    )
}

export default Questions