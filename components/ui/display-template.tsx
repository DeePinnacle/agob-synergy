import React from 'react'
import PagesHero from './pages-hero'
import { MaxWidthWrapper } from './max-width'
import Image from "next/image"
import { serviceProps } from '@/types'
import { Check } from 'lucide-react'
// import ServicesSlider from '../services-slider'
const DisplayTemplate = ({ data, heroImg }: serviceProps) => {
    return (
        <div className='w-full'>
            {
                data?.map((item, idx) => (
                    <div key={idx}>
                        {/* hero image */}
                        <PagesHero img={heroImg} title={item.heroTitle} />
                        <div className='w-full max-w-6xl px-2 py-9 lex flex-col items-center justify-center'>
                            <p className='text-center text-dark_green text-2xl font-semibold mb-1 md:text-3xl lg:text-2xl'>Agob Synergy <span className='text-light_green'>{item.service}</span></p>
                            <p className='text-center text-lg md:text-2xl md:w-3/5 md:mx-auto lg:text-base'>{item.subheader}</p>
                        </div>
                        <MaxWidthWrapper>
                            <div className='w-full lg:flex lg:flex-row lg:gap-6'>
                                <div className='relative w-full h-96 overflow-hidden md:h-[25rem]'>
                                    <Image src={`/${item.serviceImg}`} alt={item.serviceImg} fill priority objectFit='cover' objectPosition='center' />
                                    <div className='overlay'></div>
                                </div>
                                {/* overview */}
                                <div className='p-2 lg:w-full'>
                                    <p className='text-dark_green text-2xl font-bold md:text-3xl lg:text-2xl'>Agob synergy <span className='text-light_green'>{item.service} Overview</span></p>
                                    <p className='text-lg text-dark_green my-2 md:text-2xl lg:text-base'>{item.overviewSubContent}</p>
                                    <p className='text-lg md:text-2xl lg:text-base lg:leading-relaxed'>{item.overview}</p>
                                </div>
                            </div>
                            {/* key elements */}
                            <div className='w-full my-3'>
                                <div className='w-full p-2'>
                                    <p className='text-xl text-dark_green md:text-3xl lg:text-2xl'>{item.approach[0].title}</p>
                                </div>
                                <div className='w-full'>
                                    {
                                        item.approach.map((val, idx) => (
                                            <div  key={idx} className='w-full px-2'>
                                                <p className='text-dark_green text-xl font-semibold my-2 md:text-3xl lg:text-xl'>{val.elementTitle}</p>
                                                <p className='text-lg md:text-2xl lg:text-base'>{val.elementContent}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* why choose us */}
                            <div className='w-full my-3'>
                                <div className='p-2 mb-3 lg:flex lg:flex-row lg:items-center lg:justify-center'>
                                    <p className='text-dark_green text-xl md:text-3xl'>Why Choose <span className='text-light_green'>Us</span></p>
                                </div>
                                <div className='w-full lg:flex lg:flex-row lg:gap-5 lg:items-center'>
                                    <div className='relative p-2 w-full h-80 overflow-hidden md:h-[25rem]'>
                                        <Image src="/agob-logo.jpg" alt='agob-log0' fill priority objectFit='cover' objectPosition='center' />
                                    </div>
                                    <div className='w-full my-2'>
                                        {
                                            item.whyChooseUs?.map((why, idx)=>(
                                                <div key={idx} className='w-full my-3 p-2 lg:my-0'>
                                                    <p className='text-dark_green text-xl flex flex-row items-center gap-3 md:text-3xl lg:text-lg'><Check className='text-light_green' /> {why.elementTitle}</p>
                                                    <p className='text-lg my-3 md:text-2xl lg:text-base'>{why.elementContent}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* portfolio */}
                            <div className='w-full py-4 mb-20'>
                                <div className='p-2'>
                                    <p className='text-dark_green text-xl mb-3 md:text-3xl'>Our Recent <span className='text-light_green'>Work</span></p>
                                </div>
                                <div className='px-2 lg:grid lg:grid-cols-3 lg:gap-5'>
                                    {
                                        item.recentWorks.map((imgSrc, idx)=>(
                                        <div key={idx} className='relative w-full h-80 overflow-hidden my-2 md:h-[35rem] md:mb-3 lg:h-96'>
                                            <Image src={`/${imgSrc}`} alt='estate-building' fill priority objectFit='cover' objectPosition='center' />
                                            <div className="overlay"></div>
                                        </div>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* other services slider goes here */}
                            {/* <ServicesSlider /> */}
                        </MaxWidthWrapper>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayTemplate