import React from 'react'
import { useQuestionsContext } from '../context'
function GameOver() {

    const { setQuestion, setQuestionNumber, correctCount, setCorrectCount } = useQuestionsContext()

    return (
        <div>
            <div className="fixed w-full h-full flex justify-center items-center inset-0
        after:content[''] after:w-full after:opacity-50 after:h-full after:bg-black after:fixed  after:inset-0 z-50
        ">
                <button className='border-4 border-solid p-3 rounded' onClick={
                    () => {
                        setQuestion(false),
                            setQuestionNumber(1),
                            setCorrectCount(0)
                    }
                }>
                    Play Again
                </button>
                <h1>{correctCount} doğru</h1>
                <div className='shadow-modal w-[460px] h-full rounded-xl bg-white opacity-100 relative z-50'>
                </div>
            </div>

        </div>
    )
}

export default GameOver
