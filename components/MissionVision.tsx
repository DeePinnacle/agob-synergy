import React from 'react'
import { MaxWidthWrapper } from './ui/max-width'
import Image from "next/image"
const MissionVision = () => {
    return (
        <div className='w-full my-4'>
            <MaxWidthWrapper>
                <div className="lg:flex lg:flex-row lg:gap-5">
                    <div className='w-full px-2'>
                        <p className='text-2xl text-dark_green font-semibold md:text-3xl lg:text-2xl'>Our <span className='text-light_green'>mission</span></p>
                        <p className='text-dark_green text-lg mb-3 md:text-2xl lg:text-lg'>Empowering Progress Through Sustainable Innovation</p>
                        <p className='text-lg md:text-2xl lg:text-base'>At Agob Synergy, our mission is to deliver integrated solutions that drive growth and foster positive change across industries. We are committed to leveraging cutting-edge technology, creative problem-solving, and sustainable practices to empower our partners and communities. Every project we undertake is guided by our core values of integrity, excellence, and collaboration—ensuring that we not only meet today’s needs but also build a resilient foundation for tomorrow</p>
                        <p className='text-2xl text-dark_green font-semibold md:text-3xl lg:text-2xl'>Our <span className='text-light_green'>Vision</span></p>
                        <p className='text-dark_green text-lg mb-3 md:text-2xl lg:text-lg'>Shaping a Resilient Future for All</p>
                        <p className='text-lg md:text-2xl lg:text-base'>Our vision is to be the catalyst for transformative, multi-sector progress. We aspire to create a world where innovation and sustainability are the cornerstones of development. By uniting diverse expertise in real estate, agriculture, construction, and beyond, Agob Synergy envisions a future where our comprehensive strategies lead to thriving communities, enriched lives, and a balanced ecosystem. We are dedicated to turning challenges into opportunities and ideas into lasting impact.</p>
                    </div>
                    <div className='relative w-full h-96 my-3 overflow-hidden md:h-[35rem] lg:order-first'>
                        <Image src={"/mission.jpg"} alt='community' fill priority objectFit='cover' objectPosition='center' />
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default MissionVision