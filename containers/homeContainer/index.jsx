import React from 'react'
import Categories from '@/components/categories'
import Provider from '@/components/context'


export default async function HomeContainer({ sportsQuiz, randomQuiz, filmQuiz, historyQuiz, musicQuiz, generalKnowledgeQuiz }) {
    return (
        // <Provider>
        <div className='w-full h-full'>
            <Categories sportsQuiz={sportsQuiz} randomQuiz={randomQuiz} filmQuiz={filmQuiz} historyQuiz={historyQuiz} musicQuiz={musicQuiz} generalKnowledgeQuiz={generalKnowledgeQuiz} />
        </div>
        // </Provider>
    )
}






