import React from 'react'
import { MaxWidthWrapper } from './ui/max-width'
import { testimonials } from '@/data/data'
import { FaStar } from 'react-icons/fa'

const Testimonies = () => {
    return (
        <section className="w-full">
            <div className="p-2 lg:flex lg:flex-col lg:items-center lg:justify-center">
                <p className="text-dark_green text-lg md:text-2xl lg:text-center lg:text-base">
                    Voice of<span className="text-light_green"> Trust</span>
                </p>
                <h1 className="text-style text-2xl font-semibold md:text-3xl lg:text-2xl">
                    What Our<span className="text-light_green"> Clients</span> Are Saying
                </h1>
                <p className="my-3 text-lg md:text-2xl lg:text-base lg:text-center lg:w-3/5 lg:mx-auto lg:mt-4">
                    Our clients and partners speak for us. Learn how our commitment to
                    excellence and innovation has made a lasting impact across multiple
                    sectors.
                </p>
            </div>
            <MaxWidthWrapper>
                <div className="w-full lg:grid lg:grid-cols-3 lg:gap-4">
                    {testimonials?.map((value) => (
                        <div
                            key={value.id}
                            className="w-full px-2 my-3 flex flex-col items-center justify-center"
                        >
                            <p className="text-center text-dark_green text-xl my-3 md:text-2xl lg:text-xl">
                                {value.company}
                            </p>
                            <p className="text-center text-lg md:text-2xl md:w-3/4 lg:text-base">{value.testimonial}</p>
                            <span className="flex flex-row items-center gap-2 mt-4 mb-2 text-light_green text-xl">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </span>
                            <p className="text-center text-lg font-bold md:text-2xl lg:text-lg">{value.name}</p>
                            <p className="text-center text-lg font-semibold md:text-2xl lg:text-lg">
                                {value.position}
                            </p>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default Testimonies;