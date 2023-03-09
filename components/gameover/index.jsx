import React from 'react'
import { useQuestionsContext } from '../context'
function GameOver() {

    const { setQuestion, setQuestionNumber, correctCount, setCorrectCount, setProgressColor, setProgress } = useQuestionsContext()

    return (
        <div>
            <div className="fixed w-full h-full flex justify-center items-center inset-0 
        after:content[''] after:w-full after:opacity-50 after:h-full after:bg-slate-900 after:fixed  after:inset-0 z-50
        ">
                <div className='shadow-modal w-[90%] max-w-[550px] h-1/3 rounded bg-white opacity-100 relative z-50 flex flex-col justify-center items-center gap-4'>
                    <h3 className='text-4xl text-slate-900 font-bold'>Congrats !</h3>
                    <p className='text-xl text-slate-900 font-normal text-center'>You answered <span className='text-2xl font-bold text-orange-500'>{correctCount}0%</span> of questions correctly .</p>
                    <button className='bg-orange-500 py-2 px-12 text-white mt-8 rounded-xl' onClick={
                        () => {
                            setQuestion(false),
                                setQuestionNumber(1),
                                setCorrectCount(0),
                                setProgressColor([]),
                                setProgress(0)
                        }
                    }>
                        Play Again
                    </button>
                </div>
            </div>

        </div>
    )
}

export default GameOver
