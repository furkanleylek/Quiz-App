'use client'
import { check } from 'prettier'
import React, { useState, useContext, useEffect } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import CheckAnswer from '../checkAnswer'
import { Context } from '../context'

function Answers({ quizType, index, handleNext, handleBack }) {

    // const { random } = useContext(Context)
    const [currentAnswer, setCurrentAnswer] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState('')
    const [checkAnswer, setCheckAnswer] = useState(1)
    const [answerId, setAnswerId] = useState('')
    const [correct, setCorrect] = useState(false)
    const allAnswers = [
        quizType.correctAnswer,
        quizType.incorrectAnswers[0],
        quizType.incorrectAnswers[1],
        quizType.incorrectAnswers[2]
    ]

    function random() {
        window.randomIndex1 = (Math.floor(Math.random() * 4))
        window.randomIndex2 = (Math.floor(Math.random() * 4))
        window.randomIndex3 = (Math.floor(Math.random() * 4))
        window.randomIndex4 = (Math.floor(Math.random() * 4))
        while (randomIndex1 == randomIndex2) {
            randomIndex2 = (Math.floor(Math.random() * 4))
        }
        while (randomIndex3 == randomIndex2 || randomIndex3 == randomIndex1) {
            randomIndex3 = (Math.floor(Math.random() * 4))
        }
        while (randomIndex4 == randomIndex1 || randomIndex4 == randomIndex2 || randomIndex4 == randomIndex3) {
            randomIndex4 = (Math.floor(Math.random() * 4))
        }
    }

    if (checkAnswer == 1) {
        random()
    }

    useEffect(() => {
        window.oldAnswerId = ''
        console.log("answer", answerId)
        if (checkAnswer == 0) {
            oldAnswerId = answerId
            if (answerId.length > 0) {
                if (currentAnswer == correctAnswer) {
                    document.getElementById(answerId).style.background = 'red'
                }
            }
        }
        if (checkAnswer == 1) {
            console.log("old", oldAnswerId)
            if (oldAnswerId.length > 0) {
                if (currentAnswer == correctAnswer) {
                    document.getElementById(oldAnswerId).style.background = ''
                }
            }
        }

    }, [checkAnswer])



    return (
        <div>
            <CheckAnswer currentAnswer={currentAnswer} correctAnswer={correctAnswer} checkAnswer={checkAnswer} />
            <div className='flex items-center justify-center'>
                <button className='categoryBtn hover:text-white disabled:opacity-50' disabled={!checkAnswer && true} id="answer1" onClick={() => { setCorrectAnswer(quizType.correctAnswer), setCurrentAnswer(allAnswers[randomIndex1]), setCheckAnswer(0), setAnswerId("answer1") }} > {allAnswers[randomIndex1]}</button>
                <button className='categoryBtn hover:text-white disabled:opacity-50' disabled={!checkAnswer && true} id="answer2" onClick={() => { setCorrectAnswer(quizType.correctAnswer), setCurrentAnswer(allAnswers[randomIndex2]), setCheckAnswer(0), setAnswerId("answer2") }} > {allAnswers[randomIndex2]}</button>
                <button className='categoryBtn hover:text-white disabled:opacity-50' disabled={!checkAnswer && true} id="answer3" onClick={() => { setCorrectAnswer(quizType.correctAnswer), setCurrentAnswer(allAnswers[randomIndex3]), setCheckAnswer(0), setAnswerId("answer3") }} > {allAnswers[randomIndex3]}</button>
                <button className='categoryBtn hover:text-white disabled:opacity-50' disabled={!checkAnswer && true} id="answer4" onClick={() => { setCorrectAnswer(quizType.correctAnswer), setCurrentAnswer(allAnswers[randomIndex4]), setCheckAnswer(0), setAnswerId("answer4") }} > {allAnswers[randomIndex4]}</button>
            </div>
            <button className='categoryBtn my-4 hover:bg-green-500' onClick={() => { handleNext(), setCheckAnswer(1), random(), setAnswerId(() => '') }}>Next Question</button>
            <button className='bg-red-500 w-4 h-4' onClick={() => { handleBack(), setCheckAnswer(0) }} ><BiArrowBack /></button>
            <h3>{answerId}</h3>
        </div>
    )
}

export default Answers