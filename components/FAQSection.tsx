import React from 'react'
import FAQs from './FAQs'
import { MaxWidthWrapper } from './ui/max-width'
import Image from "next/image"
const FAQSection = () => {
    return (
        <section className="w-full mb-4 mt-16">
            <MaxWidthWrapper>
                <div className="w-full p-2 lg:flex lg:flex-row lg:gap-4 lg:items-center">
                    <div>
                        <h3 className="text-4xl text-dark_green">Frequently Asked Questions</h3>
                        <p className="text-lg my-3 md:text-2xl lg:text-base lg:w-3/5">Got Questions? We&apos;ve got answers, Explore our FAQs to learn more about Agob Synergy&apos;s inovative approach and multi-industry expertise.</p>
                        <div className="relative w-full h-80 overflow-hidden md:h-[35rem] lg:h-96">
                            <Image src={"/FAQs.jpg"} alt="faqs" fill priority objectFit="cover" objectPosition="center" />
                        </div>
                    </div>
                    <div className="lg:w-3/5">
                        <FAQs />
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default FAQSection