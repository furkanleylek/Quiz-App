import React from 'react'
import { useQuestionsContext } from '../context'
function ProgressBar() {

    const { progress, progressColor } = useQuestionsContext()

    return (

        <div className='border-t-2 w-[calc(100%+80px)] h-[1px] flex items-center justify-between mb-8'>
            <span className={progress >= 1 ? `border-2 border-transparent text-[10px] bg-${progressColor[0]}-500 rounded-full p-1 px-2` : `border-2 border-transparent text-[10px] bg-slate-700 rounded-full p-1 px-2`}>1</span>
            <span className={progress >= 2 ? `border-2 border-transparent text-[10px] bg-${progressColor[1]}-500 rounded-full p-1 px-2` : `border-2 border-transparent text-[10px] bg-slate-700 rounded-full p-1 px-2`}>2</span>
            <span className={progress >= 3 ? `border-2 border-transparent text-[10px] bg-${progressColor[2]}-500 rounded-full p-1 px-2` : `border-2 border-transparent text-[10px] bg-slate-700 rounded-full p-1 px-2`}>3</span>
            <span className={progress >= 4 ? `border-2 border-transparent text-[10px] bg-${progressColor[3]}-500 rounded-full p-1 px-2` : `border-2 border-transparent text-[10px] bg-slate-700 rounded-full p-1 px-2`}>4</span>
            <span className={progress >= 5 ? `border-2 border-transparent text-[10px] bg-${progressColor[4]}-500 rounded-full p-1 px-2` : `border-2 border-transparent text-[10px] bg-slate-700 rounded-full p-1 px-2`}>5</span>
            <span className={progress >= 6 ? `border-2 border-transparent text-[10px] bg-${progressColor[5]}-500 rounded-full p-1 px-2` : `border-2 border-transparent text-[10px] bg-slate-700 rounded-full p-1 px-2`}>6</span>
            <span className={progress >= 7 ? `border-2 border-transparent text-[10px] bg-${progressColor[6]}-500 rounded-full p-1 px-2` : `border-2 border-transparent text-[10px] bg-slate-700 rounded-full p-1 px-2`}>7</span>
            <span className={progress >= 8 ? `border-2 border-transparent text-[10px] bg-${progressColor[7]}-500 rounded-full p-1 px-2` : `border-2 border-transparent text-[10px] bg-slate-700 rounded-full p-1 px-2`}>8</span>
            <span className={progress >= 9 ? `border-2 border-transparent text-[10px] bg-${progressColor[8]}-500 rounded-full p-1 px-2` : `border-2 border-transparent text-[10px] bg-slate-700 rounded-full p-1 px-2`}>9</span>
            <span className={progress >= 10 ? `border-2 border-transparent text-[10px] bg-${progressColor[9]}-500 rounded-full p-1 px-2` : `border-2 border-transparent text-[10px] bg-slate-700 rounded-full p-1 px-2`}>10</span>
        </div>
        // {/* <div className='rounded-3xl w-[calc(100%+80px)] h-1 flex mb-8'>
        //         <span className={progress >= 1 && `hidden bg-red-500 h-full w-[10%]  rounded-l-3xl border-slate-900`}>1</span>
        //         <span className={progress >= 1 && `hidden bg-green-500 h-full w-[10%]  rounded-l-3xl border-slate-900`}>2</span>
        //         <span className={progress >= 1 && `bg-${progressColor[0]}-500 h-full w-[10%] rounded-l-3xl border-slate-900`}></span>
        //         <span className={progress >= 2 && `bg-${progressColor[1]}-500 h-full w-[10%] `}></span>
        //         <span className={progress >= 3 && `bg-${progressColor[2]}-500 h-full w-[10%]`}></span>
        //         <span className={progress >= 4 && `bg-${progressColor[3]}-500 h-full w-[10%]`}></span>
        //         <span className={progress >= 5 && `bg-${progressColor[4]}-500 h-full w-[10%]`}></span>
        //         <span className={progress >= 6 && `bg-${progressColor[5]}-500 h-full w-[10%]`}></span>
        //         <span className={progress >= 7 && `bg-${progressColor[6]}-500 h-full w-[10%]`}></span>
        //         <span className={progress >= 8 && `bg-${progressColor[7]}-500 h-full w-[10%]`}></span>
        //         <span className={progress >= 9 && `bg-${progressColor[8]}-500 h-full w-[10%]`}></span>
        //         <span className={progress >= 10 && `bg-${progressColor[9]}-500 h-full w-[10% rounded-r-3xl`}></span>
        //     </div> */}
    )
}

export default ProgressBar