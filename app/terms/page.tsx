import { termsOfUseSections } from '@/data/data'
import React from 'react'

const page = () => {
  return (
    <div className='w-full max-w-6xl px-2 my-6'>
      <h1 className='text-dark_green text-2xl font-semibold'>Terms of Use</h1>
      <p className='text-lg'>Terms of Use for Agob Synergy</p>
      <p>Last Updated: [14/02/2025]</p>
      <div className='my-3'>
        {
          termsOfUseSections?.map((value)=>(
            <div key={value.id} className=' my-3'>
              <p className='text-dark_green text-xl font-semibold'>{value.id}. {value.sectionTitle}</p>
              <p className='text-lg'>{value.content}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default page