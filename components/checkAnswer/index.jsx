'use client'
import React, { useEffect } from 'react'
import { useQuestionsContext } from '../context'

function CheckAnswer({ currentAnswer, correctAnswer, checkAnswer }) {

    const { questionNumber, setCorrectCount } = useQuestionsContext()

    useEffect(() => {
        if (currentAnswer == correctAnswer && currentAnswer.length > 0 && checkAnswer == 1) {
            setCorrectCount((c) => { return c + 1 })
        }
    }, [correctAnswer, checkAnswer])


    return (
        <div>
        </div>
    )

}

export default CheckAnswer


