import React from 'react'
import { useQuestionsContext } from '../context'
function ProgressBar() {

    const { progress, progressColor } = useQuestionsContext()

    return (
        <div className='border-2 border-slate-700 rounded-3xl w-[calc(100%+80px)] h-4 flex mb-8'>
            <h1>{progress}</h1>
            <h1>{progressColor}</h1>
            {progress >= 1 && (
                <h1>bg-{progressColor[0]}-500 </h1>
            )}
            <span className={progress >= 1 && `bg-${progressColor[0]}-500 h-full w-[10%] border-r-2 rounded-l-3xl border-slate-900`}></span>
            <span className={progress >= 2 && `bg-${progressColor[1]}-500 h-full w-[10%] border-r-2 border-slate-900`}></span>
            <span className={progress >= 3 && `bg-${progressColor[2]}-500 h-full w-[10%] border-r-2 border-slate-900`}></span>
            <span className={progress >= 4 && `bg-${progressColor[3]}-500 h-full w-[10%] border-r-2 border-slate-900`}></span>
            <span className={progress >= 5 && `bg-${progressColor[4]}-500 h-full w-[10%] border-r-2 border-slate-900`}></span>
            <span className={progress >= 6 && `bg-${progressColor[5]}-500 h-full w-[10%] border-r-2 border-slate-900`}></span>
            <span className={progress >= 7 && `bg-${progressColor[6]}-500 h-full w-[10%] border-r-2 border-slate-900`}></span>
            <span className={progress >= 8 && `bg-${progressColor[7]}-500 h-full w-[10%] border-r-2 border-slate-900`}></span>
            <span className={progress >= 9 && `bg-${progressColor[8]}-500 h-full w-[10%] border-r-2  border-slate-900`}></span>
            <span className={progress >= 10 && `bg-${progressColor[9]}-500 h-full w-[10%] rounded-r-3xl`}></span>
        </div>
    )
}

export default ProgressBar