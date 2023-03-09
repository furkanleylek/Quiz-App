'use client'
import React, { useState, useEffect } from 'react'
import CheckAnswer from '../checkAnswer'
import { useQuestionsContext } from '../context'
import ProgressBar from '../progressBar'

function Answers({ quizType, handleNext }) {


    const { questionNumber, setQuestionNumber, setProgress, setProgressColor } = useQuestionsContext()


    const [currentAnswer, setCurrentAnswer] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState('')
    const [checkAnswer, setCheckAnswer] = useState(1)
    const [answerId, setAnswerId] = useState('')

    const allAnswers = [
        quizType.correctAnswer,
        quizType.incorrectAnswers[0],
        quizType.incorrectAnswers[1],
        quizType.incorrectAnswers[2]
    ]

    /* mix answers options */
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

    /* use animation after choose option */
    useEffect(() => {

        function changeAnimationCheck(answerOption, answerOptionId, cancel) {

            if (answerOption == correctAnswer && cancel == 0) {
                document.getElementById(answerOptionId).style.cssText = 'background:green ; opacity:1'
            }
            if (cancel == 1) {
                document.getElementById(answerOptionId).style.cssText = 'background:#CBD5E1'
            }
        }
        if (checkAnswer == 0) {
            setProgress(questionNumber)

            if (currentAnswer == correctAnswer) {
                setProgressColor((e) => [...e, 'green'])
            }
            else if (currentAnswer !== correctAnswer) {
                setProgressColor((e) => [...e, 'red'])
            }
            if (answerId.length > 0) {
                if (currentAnswer !== correctAnswer) {
                    document.getElementById(answerId).style.cssText = 'background:red'
                }
                changeAnimationCheck(allAnswers[randomIndex1], 'answer1', 0)
                changeAnimationCheck(allAnswers[randomIndex2], 'answer2', 0)
                changeAnimationCheck(allAnswers[randomIndex3], 'answer3', 0)
                changeAnimationCheck(allAnswers[randomIndex4], 'answer4', 0)
            }
        }

        /* back old styles */
        if (checkAnswer == 1) {
            if (answerId.length > 0) {
                document.getElementById(answerId).style.cssText = 'background:#CBD5E1 '
            }
            changeAnimationCheck('', 'answer1', 1)
            changeAnimationCheck('', 'answer2', 1)
            changeAnimationCheck('', 'answer3', 1)
            changeAnimationCheck('', 'answer4', 1)
        }

    }, [checkAnswer])


    return (
        <div className='flex flex-col justify-center items-center w-3/4 lg:w-1/2 '>
            <CheckAnswer currentAnswer={currentAnswer} correctAnswer={correctAnswer} checkAnswer={checkAnswer} />
            <div className='flex flex-col items-center justify-center gap-4 w-full '>
                <button className='categoryBtn hover:text-orange-500 disabled:opacity-30 disabled:text-white disabled:pointer-events-none' disabled={!checkAnswer && true} id="answer1" onClick={() => { setCorrectAnswer(quizType.correctAnswer), setCurrentAnswer(allAnswers[randomIndex1]), setCheckAnswer(0), setAnswerId("answer1") }} > {allAnswers[randomIndex1]}</button>
                <button className='categoryBtn hover:text-orange-500 disabled:opacity-30 disabled:text-white disabled:pointer-events-none' disabled={!checkAnswer && true} id="answer2" onClick={() => { setCorrectAnswer(quizType.correctAnswer), setCurrentAnswer(allAnswers[randomIndex2]), setCheckAnswer(0), setAnswerId("answer2") }} > {allAnswers[randomIndex2]}</button>
                <button className='categoryBtn hover:text-orange-500 disabled:opacity-30 disabled:text-white disabled:pointer-events-none' disabled={!checkAnswer && true} id="answer3" onClick={() => { setCorrectAnswer(quizType.correctAnswer), setCurrentAnswer(allAnswers[randomIndex3]), setCheckAnswer(0), setAnswerId("answer3") }} > {allAnswers[randomIndex3]}</button>
                <button className='categoryBtn hover:text-orange-500 disabled:opacity-30 disabled:text-white disabled:pointer-events-none' disabled={!checkAnswer && true} id="answer4" onClick={() => { setCorrectAnswer(quizType.correctAnswer), setCurrentAnswer(allAnswers[randomIndex4]), setCheckAnswer(0), setAnswerId("answer4") }} > {allAnswers[randomIndex4]}</button>
            </div>
            <button className='w-3/4 h-full px-5 py-3 rounded mt-12 bg-orange-500 mb-8' onClick={() => { handleNext(), setCheckAnswer(1), random(), setQuestionNumber((e) => { return e + 1 }) }}>Next Question</button>
            <ProgressBar />
        </div>
    )
}

export default Answers