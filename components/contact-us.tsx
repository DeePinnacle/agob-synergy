import React from 'react'
import { MaxWidthWrapper } from './ui/max-width'
import Link from 'next/link'
import { Mail, MoveUpRight, Send, Phone } from 'lucide-react'
import { FaLocationDot } from "react-icons/fa6"
const ContactUs = () => {
  return (
    <div className="w-full lg:py-28">
    <MaxWidthWrapper>
      <div className="w-full lg:flex lg:flex-row">
        <div className="w-full px-2 py-6">
          <p className="text-light_green text-lg font-semibold md:text-2xl">Connect With Us</p>
          <p className="text-dark_green text-lg md:text-2xl lg:text-base lg:w-2/3">Have questions or ideas? Contact Agob Synergy and let&apos; explore innovative solutions together.</p>
          <p className="text-dark_green text-6xl font-bold md:text-9xl md:my-3">Get in Touch</p>
          <p className="text-dark_green text-lg my-2 flex flex-row gap-2">
            <FaLocationDot className="mt-2 text-4xl" />
            Head Office Address: No 5 Yakubu Gowon way sabongarri phase 2 Idah Kogi State.
          </p>
        </div>
        <div className="px-2 py-6 lg:w-full lg:max-w-md">
          <ul>
            <li className="my-4 pb-5 text-dark_green border-b border-solid border-light_green">
              <Link href={"mailto:agobsynergy@gmail.com"} className="flex flex-row items-center justify-between">
                <span>
                  <p className="flex flex-row gap-2 text-lg md:text-2xl lg:text-base"><Mail /> Email</p>
                  <p className="text-lg md:text-2xl lg:text-base">agobsynergyltd@gmail.com</p>
                </span>
                <MoveUpRight />
              </Link>
            </li>
            <li className="my-4 pb-5 text-dark_green border-b border-solid border-light_green">
              <Link href={"tel:+234 706 4760 842"} className="flex flex-row items-center justify-between">
                <span>
                  <p className="flex flex-row gap-2 text-lg md:text-2xl lg:text-base"><Send /> Chat Us</p>
                  <p className="text-lg md:text-2xl lg:text-base">+234 706 4760 842</p>
                </span>
                <MoveUpRight />
              </Link>
            </li>
            <li className="my-4 pb-5 text-dark_green border-b border-solid border-light_green">
              <Link href={"tel:+234 815 7842 696"} className="flex flex-row items-center justify-between">
                <span>
                  <p className="flex flex-row gap-2 text-lg md:text-2xl lg:text-base"><Phone /> Call Us</p>
                  <p className="text-lg md:text-2xl lg:text-base">+234 815 7842 696</p>
                </span>
                <MoveUpRight />
              </Link>
            </li>            
            <li className="my-4 pb-5 text-dark_green border-b border-solid border-light_green">
              <Link href={"tel:+234 704 4236 282"} className="flex flex-row items-center justify-between">
                <span>
                  <p className="flex flex-row gap-2 text-lg md:text-2xl lg:text-base"><Phone /> Call Us</p>
                  <p className="text-lg md:text-2xl lg:text-base">+234 704 4236 282</p>
                </span>
                <MoveUpRight />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </MaxWidthWrapper>
  </div>
  )
}

export default ContactUs