import ContactUs from '@/components/contact-us'
import FAQs from '@/components/FAQs'
import { MaxWidthWrapper } from '@/components/ui/max-width'
import PagesHero from '@/components/ui/pages-hero'
import React from 'react'

const page = () => {
  return (
    <div className='w-full'>
      <PagesHero img="FAQs.jpg" title='Agob Synergy FAQs Page' />
      <div className='w-full max-w-6xl px-2 py-9 lex flex-col items-center justify-center'>
        <p className='text-center text-dark_green text-2xl font-semibold mb-1'>Got A Question ?</p>
        <p className='text-center text-lg'>Your Questions, Answered – Explore Our Comprehensive FAQs for Insights into Our Services and Practices.</p>
      </div>
      <MaxWidthWrapper>
        <div className='w-full'>
          <FAQs />
          <div className='my-8'>
            {/* <div className='p-2 my-2'>
              <p className='capitalize text-2xl text-dark_green text-center'>Got More questions ?</p>
              <p className='text-center text-lg'>Feel free to contact us using our contact informations provided below.</p>
            </div> */}
            <ContactUs />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default page