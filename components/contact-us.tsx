import React from 'react'
import { MaxWidthWrapper } from './ui/max-width'
import Link from 'next/link'
import { Mail, MoveUpRight, Send, Phone } from 'lucide-react'

const ContactUs = () => {
  return (
    <div className="w-full">
    <MaxWidthWrapper>
      <div className="w-full">
        <div className="w-full px-2 py-6">
          <p className="text-light_green text-lg font-semibold md:text-2xl">Connect With Us</p>
          <p className="text-dark_green text-lg md:text-2xl">Have questions or ideas? Contact Agob Synergy and let&apos; explore innovative solutions together.</p>
          <p className="text-dark_green text-6xl font-bold md:text-9xl md:my-3">Get in Touch</p>
        </div>
        <div className="px-2 py-6">
          <ul>
            <li className="my-4 pb-5 text-dark_green border-b border-solid border-light_green">
              <Link href={"mailto:agobsynergy@gmail.com"} className="flex flex-row items-center justify-between">
                <span>
                  <p className="flex flex-row gap-2 text-lg md:text-2xl"><Mail /> Email</p>
                  <p className="text-lg md:text-2xl">agobsynergy@gmail.com</p>
                </span>
                <MoveUpRight />
              </Link>
            </li>
            <li className="my-4 pb-5 text-dark_green border-b border-solid border-light_green">
              <Link href={"tel:+234-234-1234-098"} className="flex flex-row items-center justify-between">
                <span>
                  <p className="flex flex-row gap-2 text-lg md:text-2xl"><Send /> Chat Us</p>
                  <p className="text-lg md:text-2xl">+234-234-1234-098</p>
                </span>
                <MoveUpRight />
              </Link>
            </li>
            <li className="my-4 pb-5 text-dark_green border-b border-solid border-light_green">
              <Link href={"tel:+234-234-1234-098"} className="flex flex-row items-center justify-between">
                <span>
                  <p className="flex flex-row gap-2 text-lg md:text-2xl"><Phone /> Call Us</p>
                  <p className="text-lg md:text-2xl">+234-234-1234-098</p>
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