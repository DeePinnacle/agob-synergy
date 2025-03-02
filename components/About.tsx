"use client"
import React from 'react'
import { MaxWidthWrapper } from './ui/max-width'
import Link from 'next/link'
import Image from "next/image"
import { usePathname } from 'next/navigation'
const About = () => {
    const pathName = usePathname()
    return (
        <>
            <section>
                <MaxWidthWrapper>
                    <div className="w-full lg:my-5 lg:flex lg:flex-row lg:gap-6">
                        <div className="p-2 lg:order-last lg:w-3/4">
                            <div className="">
                                <p className="text-dark_green text-lg font-semibold md:text-2xl lg:text-lg">
                                    Who we are
                                </p>
                                <h3 className="text-2xl font-semibold text-style md:text-3xl lg:text-2xl">
                                    About <span className="text-light_green">Agob-Synergy</span>
                                </h3>
                                <p className="my-3 text-lg md:text-2xl lg:text-base lg:mb-5">
                                    Innovating Across Industries, Empowering Sustainable Growth.
                                </p>
                            </div>
                            <p className="text-lg md:text-2xl lg:text-base">
                                Agob Synergy is a dynamic multi-vendor enterprise committed to
                                excellence across diverse sectors. With deep roots in real
                                estate, agriculture, construction, electrical merchandising, and
                                logistics, we harness innovative strategies and sustainable
                                practices to drive transformative projects.
                            </p>
                            <p className="text-lg mb-2 md:text-2xl lg:text-base">
                                Our integrated approach ensures that every initiative not only
                                meets modern standards of quality and efficiency but also
                                contributes to building resilient communities and fostering
                                long-term prosperity...{" "}
                            </p>
                            <Link
                                href="/about"
                                className={`${pathName !== "/about" ? "block" : "hidden" } bg-light_green w-3/5 h-14 text-lg text-dark_green shadow-2xl shadow-light_green flex items-center justify-center uppercase md:h-20 md:text-3xl lg:text-base lg:w-2/5 lg:h-14`}
                            >
                                Learn more &rarr;
                            </Link>
                        </div>
                        <div className={`${ pathName !== "/about" ? "block": "hidden" } w-full my-4`}>
                            <div className="relative w-full h-96 md:h-[35rem]">
                                <Image
                                    src="/agro-4.jpg"
                                    alt="farmers"
                                    fill
                                    priority
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                            </div>
                        </div>
                        <div className={`${ pathName === "/about" ? "block": "hidden" } w-full my-4`}>
                            <div className="relative w-full h-96 md:h-[35rem]">
                                <Image
                                    src="/agob-logo.jpg"
                                    alt="farmers"
                                    fill
                                    priority
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    )
}

export default About