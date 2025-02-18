import { privacyPolicySections } from '@/data/data'
import React from 'react'

const page = () => {
  return (
    <div className='w-full max-w-6xl px-2 my-6'>
      <h1 className='text-dark_green text-2xl font-semibold md:text-3xl'>Privacy Policy</h1>
      <p className='text-lg md:text-2xl'>Privacy Policy for Agob Synergy</p>
      <div className='my-3'>
        {
          privacyPolicySections?.map((value)=>(
            <div key={value.id} className=' my-3'>
              <p className='text-dark_green text-xl font-semibold md:text-2xl'>{value.id}. {value.sectionTitle}</p>
              <p className='text-lg md:text-2xl md:leading-normal'>{value.content}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default page