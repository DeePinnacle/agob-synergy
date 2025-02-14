import About from '@/components/About'
import React from 'react'
import Image from "next/image"
import { MaxWidthWrapper } from '@/components/ui/max-width'
import { coreValues, Teams } from '@/data/data'
import MissionVision from '@/components/MissionVision'
import Testimonies from '@/components/Testimonies'
import Team from '@/components/Team'
import PagesHero from '@/components/ui/pages-hero'
const page = () => {
  return (
    <>
      <PagesHero img="engi.jpg" title="Who we are" />
      <About />
      {/* our story */}
      <div className='w-full'>
        <MaxWidthWrapper>
          <div className='w-full'>
            <div className='w-full px-2'>
              <h3 className='text-2xl text-dark_green font-semibold'>Our <span className='text-light_green'>Story</span></h3>
              <p className='text-dark_green text-lg mb-3'>From Humble Beginnings to Industry Leaders</p>
              <p className='text-lg'>Agob Synergy was born from a vision to revolutionize how industries work together. Established with a commitment to innovation and sustainable practices, our journey began with a small team of forward-thinkers who believed in the power of collaboration. Over the years, we’ve grown into a multi-faceted enterprise, expanding our expertise into real estate, agriculture, construction, and beyond.

                Our story is one of resilience, continuous learning, and a steadfast commitment to excellence. Every milestone—big or small—has shaped us into the trusted partner we are today. As we continue to evolve, our mission remains unchanged: to drive progress, foster innovation, and build a future where every venture contributes to a better world.</p>
            </div>
            <div className='relative w-full h-96 overflow-hidden my-3'>
              <Image src={"/community.jpg"} alt='community' fill priority objectFit='cover' objectPosition='center' />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      {/* mission vision */}
      <MissionVision />
      {/* Testimonies */}
      <Testimonies />
      {/* core values */}
      <div className='w-full my-10'>
        <p className='mx-2 text-2xl text-dark_green font-semibold'>Our Core <span className='text-light_green'>Values</span></p>
        <div className='w-full p-2'>
          {
            coreValues?.map((value) => (
              <div key={value.id} className='my-4'>
                <p className='text-lg text-dark_green font-semibold mb-2'>{value.title}</p>
                <p className='text-lg'>{value.description}</p>
              </div>
            ))
          }
        </div>
      </div>
      {/* our team */}
      <Team />
    </>
  )
}

export default page