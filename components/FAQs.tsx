import { faQuestions } from '@/data/data'
import React from 'react'
import FAQTemplate from './faq-template'

const FAQs = () => {
  return (
    <div>
        {
            faQuestions?.map((faq)=>(
                <FAQTemplate 
                    key={faq.id} 
                    id={faq.id} 
                    question={faq.question}
                    answer={faq.answer}
                />
            ))
        }
    </div>
  )
}

export default FAQs