import React from 'react'
import Categories from '@/components/categories'


export default async function HomeContainer({ sportsQuiz, randomQuiz, filmQuiz, historyQuiz, musicQuiz, generalKnowledgeQuiz }) {
    return (
        <div className='h-full'>
            <Categories sportsQuiz={sportsQuiz} randomQuiz={randomQuiz} filmQuiz={filmQuiz} historyQuiz={historyQuiz} musicQuiz={musicQuiz} generalKnowledgeQuiz={generalKnowledgeQuiz} />
        </div>
    )
}






