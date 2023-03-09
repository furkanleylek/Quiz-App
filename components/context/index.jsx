'use client'
import React, { createContext, useState, useContext } from 'react'

const Context = createContext()


function Provider({ children }) {

    const [questionNumber, setQuestionNumber] = useState(1)

    /* to categorys */
    const [question, setQuestion] = useState(false)
    const [category, setCategory] = useState('')
    const [correctCount, setCorrectCount] = useState(0)

    const data = {
        questionNumber,
        setQuestionNumber,
        question,
        setQuestion,
        category,
        setCategory,
        correctCount,
        setCorrectCount
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default Provider

export const useQuestionsContext = () => useContext(Context)

