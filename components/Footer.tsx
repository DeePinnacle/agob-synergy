import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaRegCopyright
} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
const Footer = () => {
  return (
    <div className='w-full bg-dark_green px-2 py-4 flex flex-col'>
      <div className='about'>
        <div className='flex flex-row items-center gap-4'>
          <div className='relative w-14 h-14 overflow-hidden md:w-24 md:h-24'>
            <Image src="/agob-logo.jpg" alt="agob-logo" fill priority objectFit="cover" objectPosition="center" />
          </div>
          <p className='text-2xl text-light_green font-bold uppercase md:text-3xl'>Agob-Synergy</p>
        </div>
        <p className='my-3 text-light_green text-lg leading-normal md:text-2xl'>Agob Synergy is a forwar-thinking, multi-vendor enterprise committed to delivering excellence across real estat, agriculture, construction, and more. Our integrated approach drives innovation and sustainable growth across industries.</p>
      </div>
      {/* quick links */}
      <ul>
        <li className='text-2xl text-light_green md:text-3xl'>Quick Links:</li>
        <li className='my-3 text-light_green text-lg md:text-2xl'>
          <Link href="/">Home</Link>
        </li>
        <li className='my-3 text-light_green text-lg md:text-2xl'>
          <Link href="/about">About</Link>
        </li>
        <li className='my-3 text-light_green text-lg md:text-2xl'>
          <Link href="#">Services</Link>
        </li>
        <li className='my-3 text-light_green text-lg md:text-2xl'>
          <Link href={"#"}>Testimonials</Link>
        </li>
        <li className='my-3 text-light_green text-lg md:text-2xl'>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      {/* contact info */}
      <ul>
        <li className='text-light_green text-2xl md:text-3xl'>Contact Information:</li>
        <li className='text-light_green text-lg my-3 md:text-2xl'>
          <Link href={"mailto:agobsynergy@gmail.com"}>Email: agobsynergy@gmail.com</Link>
        </li>
        <li className='text-light_green text-lg my-3 md:text-2xl'>
          <Link href={"tel:+234 000 0000"}>Phone: +234 000 0000</Link>
        </li>
        <li className='text-light_green text-lg my-3 md:text-2xl'>
          <Link href={""}>Address: Agob-synergy limited</Link>
        </li>
        {/* social handles */}
        <li className='text-2xl text-light_green mb-2 md:text-3xl'>Follow Us</li>
        <span className='grid grid-cols-2 gap-3 items-center w-24 md:w-40'>
          <li className='bg-[#1877F2] w-10 h-10 flex flex-col items-center justify-center rounded-md md:w-16 md:h-16'>
            <Link href={""}>
              <FaFacebook className='text-white w-6 h-6 md:w-10 md:h-10' />
            </Link>
          </li>
          <li className='ig-gradient w-10 h-10 flex flex-col items-center justify-center rounded-md md:w-16 md:h-16'>
            <Link href={""}>
              <FaInstagram className='text-white w-6 h-6 md:w-10 md:h-10' />
            </Link>
          </li>
          <li className='bg-[#25D366] w-10 h-10 flex flex-col items-center justify-center rounded-md md:w-16 md:h-16'>
            <Link href={""}>
              <FaWhatsapp className='text-white w-6 h-6 md:w-10 md:h-10' />
            </Link>
          </li>
          <li className='bg-black w-10 h-10 flex flex-col items-center justify-center rounded-md md:w-16 md:h-16'>
            <Link href={""}>
              <FaXTwitter className='text-white w-6 h-6 md:w-10 md:h-10' />
            </Link>
          </li>
        </span>
      </ul>
      {/* legal */}
      <ul className='my-3'>
        <li className='text-2xl text-light_green md:text-3xl'>Legal:</li>
        <li className='my-3 text-light_green text-lg md:text-2xl'>
          <Link href={"/privacy_policy"}>Privacy Policy</Link>
        </li>
        <li className='my-3 text-light_green text-lg md:text-2xl'>
          <Link href={"/terms"}>Terms of Service</Link>
        </li>
      </ul>
      {/* copyright */}
      <div className='mt-auto md:flex md:flex-row md:items-center md:gap-2'>
        <p className='my-3 text-light_green text-lg md:flex md:flex-row md:items-center md:gap-2 md:text-2xl'>Copyright: <span className='flex flex-row items-center'><FaRegCopyright />2025 Agob Synergy.All rights reserved.</span></p>
      </div>
    </div>
  )
}

export default Footer;