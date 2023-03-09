'use client'
import React, { useState, useContext } from 'react'
import Questions from '@/components/questions'
import { BiArrowBack } from 'react-icons/bi'
import { Context } from '../context'
function Categories({ sportsQuiz, randomQuiz, filmQuiz, historyQuiz, musicQuiz, generalKnowledgeQuiz }) {

    const [question, setQuestion] = useState(false)
    const [category, setCategory] = useState('')

    // const { random } = useContext(Context)

    return (
        <div className='w-full h-full'>
            {!question && (
                <div className='flex flex-wrap flex-col justify-center w-full h-full items-center border-4 border-solid border-blue-500'>
                    <div className='flex justify-center items-center mb-5 '>
                        <button className='categoryBtn' onClick={() => (setQuestion(true), setCategory("sports"))}>Sports</button>
                        <button className='categoryBtn' onClick={() => (setQuestion(true), setCategory("history"))}>History</button>
                        <button className='categoryBtn' onClick={() => (setQuestion(true), setCategory("film"))}>Film</button>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='categoryBtn' onClick={() => (setQuestion(true), setCategory("music"))}>Music</button>
                        <button className='categoryBtn' onClick={() => (setQuestion(true), setCategory("generalknowledge"))}>General Knowledge</button>
                        <button className='categoryBtn' onClick={() => (setQuestion(true), setCategory("random"))}>Random Quiz</button>
                    </div>
                </div>
            )}
            {
                question && (
                    <div className='flex flex-col items-center w-full h-full justify-center border-4 border-solid p-20 border-yellow-500'>
                        <Questions sportsQuiz={sportsQuiz} randomQuiz={randomQuiz} filmQuiz={filmQuiz} historyQuiz={historyQuiz} musicQuiz={musicQuiz} generalKnowledgeQuiz={generalKnowledgeQuiz} category={category} />
                        <button className='border-4 border-solid p-3 rounded' onClick={() => setQuestion(false)}>
                            <BiArrowBack />
                        </button>
                    </div>
                )
            }

        </div>
    )
}

export default Categories