import About from '@/components/About'
import React from 'react'
import Image from "next/image"
import { MaxWidthWrapper } from '@/components/ui/max-width'
import { coreValues } from '@/data/data'
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
          <div className='w-full lg:flex lg:flex-row lg:gap-6'>
            <div className='w-full px-2'>
              <h3 className='text-2xl text-dark_green font-semibold md:text-3xl lg:text-2xl'>Our <span className='text-light_green'>Story</span></h3>
              <p className='text-dark_green text-lg mb-3 md:text-2xl lg:text-lg'>From Humble Beginnings to Industry Leaders</p>
              <p className='text-lg md:text-2xl lg:text-base'>Agob Synergy was born from a vision to revolutionize how industries work together. Established with a commitment to innovation and sustainable practices, our journey began with a small team of forward-thinkers who believed in the power of collaboration. Over the years, we’ve grown into a multi-faceted enterprise, expanding our expertise into real estate, agriculture, construction, and beyond.

                Our story is one of resilience, continuous learning, and a steadfast commitment to excellence. Every milestone—big or small—has shaped us into the trusted partner we are today. As we continue to evolve, our mission remains unchanged: to drive progress, foster innovation, and build a future where every venture contributes to a better world.</p>
            </div>
            <div className='relative w-full h-96 overflow-hidden my-3 md:h-[35rem] lg:h-96'>
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
      <div className='w-full max-w-6xl my-10 lg:mx-auto'>
        <p className='mx-2 text-2xl text-dark_green font-semibold md:text-3xl lg:text-2xl'>Our Core <span className='text-light_green'>Values</span></p>
        <div className='w-full p-2 lg:grid lg:grid-cols-5 lg:gap-5'>
          {
            coreValues?.map((value) => (
              <div key={value.id} className='my-4'>
                <p className='text-lg text-dark_green font-semibold mb-2 md:text-2xl lg:text-lg'>{value.title}</p>
                <p className='text-lg md:text-2xl lg:text-base'>{value.description}</p>
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