"use client"
import { ArrowDown, ArrowUp } from 'lucide-react'
import React, { useState } from 'react'

interface FaqProps{
    id: number,
    question: string,
    answer: string
}

const FAQTemplate = ({
    id,
    question,
    answer
}: FaqProps) => {
    const [active, setActive] = useState<number | null>(null) // Keep track of the active accordion

    // handle toggle logic to open/close accordion
    const handleToggle = (id: number) => {
        if (id === active) {
            setActive(null) // If the same accordion is clicked, close it
        } else {
            setActive(id) // Otherwise, open the clicked accordion
        }
    }

    return (
        <div className='w-full border-b border-solid border-light_green my-3 px-2 py-6'>
            <span
                className='flex flex-row items-center justify-between gap-6 text-lg text-dark_green font-semibold'
                onClick={() => handleToggle(id)}
            >
                <p>{question}</p>
                {active === id ? <ArrowDown /> : <ArrowUp />} {/* Only show the correct icon */}
            </span>
            <div className={`${active === id ? 'block' : 'hidden'} mt-4`}>
                <p className='text-lg'>{answer}</p>
            </div>
        </div>
    )
}

export default FAQTemplate











// "use client"
// import { ArrowDown, ArrowUp } from 'lucide-react'
// import React, { useState } from 'react'

// interface FaqProps{
//     id: number,
//     question: string,
//     answer: string
// }

// const FAQTemplate = ({
//     id,
//     question,
//     answer
// }:FaqProps) => {
//     const [ active, setActive ] = useState<number | null>(null)
//     // toggle state to hide/show answer
//     const handleToggle = (Btnid: number) => {
//         if(Btnid === active){
//             setActive(null)
//         }else{
//             setActive(Btnid)
//         }
//     }
//   return (
//     <div className='w-full border-b border-solid border-light_green my-3 px-2 py-6'>
//         <span className='flex flex-row items-center justify-between gap-6 text-lg text-dark_green font-semibold' onClick={()=>{
//             handleToggle(id)
//         }}>
//             <p>{ question }</p>
//             {/* { toggle ? <ArrowDown /> : <ArrowUp />} */}
//         </span>
//         <div className={`${active === id ? 'block' : 'hidden'} mt-4`}>
//             <p className='text-lg'>{ answer }</p>
//         </div>
//     </div>
//   )
// }

// export default FAQTemplate
