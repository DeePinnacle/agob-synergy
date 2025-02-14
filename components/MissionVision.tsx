import React from 'react'
import { MaxWidthWrapper } from './ui/max-width'
import Image from "next/image"
const MissionVision = () => {
    return (
        <div className='w-full'>
            <MaxWidthWrapper>
                <div>
                    <div className='w-full px-2'>
                        <p className='text-2xl text-dark_green font-semibold'>Our <span className='text-light_green'>mission</span></p>
                        <p className='text-dark_green text-lg mb-3'>Empowering Progress Through Sustainable Innovation"</p>
                        <p className='text-lg'>At Agob Synergy, our mission is to deliver integrated solutions that drive growth and foster positive change across industries. We are committed to leveraging cutting-edge technology, creative problem-solving, and sustainable practices to empower our partners and communities. Every project we undertake is guided by our core values of integrity, excellence, and collaboration—ensuring that we not only meet today’s needs but also build a resilient foundation for tomorrow</p>
                        <p className='text-2xl text-dark_green font-semibold'>Our <span className='text-light_green'>Vision</span></p>
                        <p className='text-dark_green text-lg mb-3'>Shaping a Resilient Future for All</p>
                        <p className='text-lg'>Our vision is to be the catalyst for transformative, multi-sector progress. We aspire to create a world where innovation and sustainability are the cornerstones of development. By uniting diverse expertise in real estate, agriculture, construction, and beyond, Agob Synergy envisions a future where our comprehensive strategies lead to thriving communities, enriched lives, and a balanced ecosystem. We are dedicated to turning challenges into opportunities and ideas into lasting impact.</p>
                    </div>
                    <div className='relative w-full h-96 my-3 overflow-hidden'>
                        <Image src={"/mission.jpg"} alt='community' fill priority objectFit='cover' objectPosition='center' />
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default MissionVision