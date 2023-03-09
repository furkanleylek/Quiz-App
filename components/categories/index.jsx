'use client'
import React from 'react'
import Questions from '@/components/questions'
import { useQuestionsContext } from '../context'
function Categories({ sportsQuiz, randomQuiz, filmQuiz, historyQuiz, musicQuiz, generalKnowledgeQuiz }) {

    const { question, setQuestion, setCategory } = useQuestionsContext()

    // const { random } = useContext(Context)

    return (
        <div className='h-full border-4 m-0 p-0'>
            {!question && (
                <div className='h-screen flex flex-col justify-center items-center gap-4 border-2 border-red-500'>
                    <h3 className='text-3xl md:text-5xl italic mb-4 '>Choose The Category</h3>
                    <button className='w-1/2 px-5 py-3 rounded-lg bg-slate-300 text-black mx-2' onClick={() => (setQuestion(true), setCategory("sports"))}>Sports</button>
                    <button className='w-1/2 px-5 py-3 rounded-lg bg-slate-300 text-black mx-2' onClick={() => (setQuestion(true), setCategory("history"))}>History</button>
                    <button className='w-1/2 px-5 py-3 rounded-lg bg-slate-300 text-black mx-2' onClick={() => (setQuestion(true), setCategory("film"))}>Film</button>
                    <button className='w-1/2 px-5 py-3 rounded-lg bg-slate-300 text-black mx-2' onClick={() => (setQuestion(true), setCategory("music"))}>Music</button>
                    <button className='w-1/2 px-5 py-3 rounded-lg bg-slate-300 text-black mx-2' onClick={() => (setQuestion(true), setCategory("generalknowledge"))}>General Knowledge</button>
                    <button className='w-1/2 px-5 py-3 rounded-lg bg-slate-300 text-black mx-2' onClick={() => (setQuestion(true), setCategory("random"))}>Random Quiz</button>
                </div>
            )}
            {
                question && (
                    <Questions sportsQuiz={sportsQuiz} randomQuiz={randomQuiz} filmQuiz={filmQuiz} historyQuiz={historyQuiz} musicQuiz={musicQuiz} generalKnowledgeQuiz={generalKnowledgeQuiz} />
                )
            }

        </div>
    )
}

export default Categories