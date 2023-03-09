/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useState, useEffect } from 'react'

function CheckAnswer({ currentAnswer, correctAnswer, checkAnswer }) {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (currentAnswer == correctAnswer && currentAnswer.length > 0 && checkAnswer == 1) {
            setCount((c) => { return c + 1 })
        }
    }, [correctAnswer, checkAnswer])
    return (
        <div>
            <h1>Current Answer : {currentAnswer}</h1>
            <h1>Correct Answer : {correctAnswer}</h1>
            <h1>checkAnswer : {checkAnswer}</h1>
            <h1>Count : {count}</h1>
        </div>
    )

}

export default CheckAnswer


