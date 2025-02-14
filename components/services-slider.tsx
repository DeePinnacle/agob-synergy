"use client"
import React from 'react'
import Image from "next/image"

// embla imports
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

const ServicesSlider = () => {
      // embla config
      const OPTIONS: EmblaOptionsType = {
        slidesToScroll: 1,
        containScroll: "trimSnaps",
        loop: false,
      };
      const [sliderRef] = useEmblaCarousel(OPTIONS, [
        Autoplay({ playOnInit: true, delay: 3000 }),
      ]);
    return (
        <div className="w-full mt-4 mb-20">
            <p className='text-dark_green text-2xl my-4 px-2'>View More Services</p>
            {/* <div className="bg-red-200 h-6"></div> */}
            <div className="overflow-hidden w-full">
                {/* carousel parent container */}{" "}
                <div className="overflow-hidden w-full" ref={sliderRef}>
                    {/* carousel viewport */}{" "}
                    <div className="flex flex-row gap-3">
                        {/* carousel item container/track */}{" "}
                        <div className="carousel-item">
                            {/* carousel items */}
                            <div className="relative w-full h-80">
                                <Image
                                    src="/agro-2.jpg"
                                    alt="farmers-in-farm"
                                    fill
                                    priority
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                                <div className="overlay">
                                    <p className="text-right my-2 uppercase">Agob-Agriculture</p>
                                </div>
                            </div>
                        </div>{" "}
                        <div className="carousel-item">
                            <div className="relative w-full h-80">
                                <Image
                                    src="/electrician.jpg"
                                    alt="farmers-in-farm"
                                    fill
                                    priority
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                                <div className="overlay">
                                    <p className="text-right my-2 uppercase">Agob-Electrician</p>
                                </div>
                            </div>
                        </div>{" "}
                        <div className="carousel-item">
                            <div className="relative w-full h-80">
                                <Image
                                    src="/car-rental.jpg"
                                    alt="farmers-in-farm"
                                    fill
                                    priority
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                                <div className="overlay">
                                    <p className="text-right my-2 uppercase">Agob-Car-Rent</p>
                                </div>
                            </div>
                        </div>{" "}
                        <div className="carousel-item">
                            <div className="relative w-full h-80">
                                <Image
                                    src="/construction.jpg"
                                    alt="farmers-in-farm"
                                    fill
                                    priority
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                                <div className="overlay">
                                    <p className="text-right my-2 uppercase">Agob-Construction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSlider