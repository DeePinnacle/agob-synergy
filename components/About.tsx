"use client"
import React from 'react'
import { MaxWidthWrapper } from './ui/max-width'
import Link from 'next/link'
import Image from "next/image"
import { usePathname } from 'next/navigation'
const About = () => {
    const pathName = usePathname()
    console.log(pathName);
    return (
        <>
            <section>
                <MaxWidthWrapper>
                    <div className="w-full">
                        <div className="p-2">
                            <div className="">
                                <p className="text-dark_green text-lg font-semibold">
                                    Who we are
                                </p>
                                <h3 className="text-2xl font-semibold text-style">
                                    About <span className="text-light_green">Agob-Synergy</span>
                                </h3>
                                <p className="my-3">
                                    Innovating Across Industries, Empowering Sustainable Growth.
                                </p>
                            </div>
                            <p className="text-lg">
                                Agob Synergy is a dynamic multi-vendor enterprise committed to
                                excellence across diverse sectors. With deep roots in real
                                estate, agriculture, construction, electrical merchandising, and
                                logistics, we harness innovative strategies and sustainable
                                practices to drive transformative projects.
                            </p>
                            <p className="text-lg mb-2">
                                Our integrated approach ensures that every initiative not only
                                meets modern standards of quality and efficiency but also
                                contributes to building resilient communities and fostering
                                long-term prosperity...{" "}
                            </p>
                            <Link
                                href="/about"
                                className={`${pathName !== "/about" ? "block" : "hidden" } bg-light_green w-3/5 h-14 text-lg text-dark_green shadow-2xl shadow-light_green flex items-center justify-center uppercase`}
                            >
                                Learn more &rarr;
                            </Link>
                        </div>
                        <div className={`${ pathName !== "/about" ? "block": "hidden" } w-full my-4`}>
                            <div className="relative w-full h-96">
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
                            <div className="relative w-full h-96">
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