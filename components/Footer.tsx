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
          <div className='relative w-14 h-14 overflow-hidden'>
            <Image src="/agob-logo.jpg" alt="agob-logo" fill priority objectFit="cover" objectPosition="center" />
          </div>
          <p className='text-2xl text-light_green font-bold uppercase'>Agob-Synergy</p>
        </div>
        <p className='my-3 text-light_green text-lg leading-normal'>Agob Synergy is a forwar-thinking, multi-vendor enterprise committed to delivering excellence across real estat, agriculture, construction, and more. Our integrated approach drives innovation and sustainable growth across industries.</p>
      </div>
      {/* quick links */}
      <ul>
        <li className='text-2xl text-light_green'>Quick Links:</li>
        <li className='my-3 text-light_green text-lg'>
          <Link href="/">Home</Link>
        </li>
        <li className='my-3 text-light_green text-lg'>
          <Link href="/about">About</Link>
        </li>
        <li className='my-3 text-light_green text-lg'>
          <Link href="#">Services</Link>
        </li>
        <li className='my-3 text-light_green text-lg'>
          <Link href={"#"}>Testimonials</Link>
        </li>
        <li className='my-3 text-light_green text-lg'>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      {/* contact info */}
      <ul>
        <li className='text-light_green text-2xl'>Contact Information:</li>
        <li className='text-light_green text-lg my-3'>
          <Link href={"mailto:agobsynergy@gmail.com"}>Email: agobsynergy@gmail.com</Link>
        </li>
        <li className='text-light_green text-lg my-3'>
          <Link href={"tel:+234 000 0000"}>Phone: +234 000 0000</Link>
        </li>
        <li className='text-light_green text-lg my-3'>
          <Link href={""}>Address: Agob-synergy limited</Link>
        </li>
        {/* social handles */}
        <li className='text-2xl text-light_green mb-2'>Follow Us</li>
        <span className='grid grid-cols-2 gap-3 items-center w-24'>
          <li className='bg-[#1877F2] w-10 h-10 flex flex-col items-center justify-center rounded-md'>
            <Link href={""}>
              <FaFacebook className='text-white w-6 h-6' />
            </Link>
          </li>
          <li className='ig-gradient w-10 h-10 flex flex-col items-center justify-center rounded-md'>
            <Link href={""}>
              <FaInstagram className='text-white w-6 h-6' />
            </Link>
          </li>
          <li className='bg-[#25D366] w-10 h-10 flex flex-col items-center justify-center rounded-md'>
            <Link href={""}>
              <FaWhatsapp className='text-white w-6 h-6' />
            </Link>
          </li>
          <li className='bg-black w-10 h-10 flex flex-col items-center justify-center rounded-md'>
            <Link href={""}>
              <FaXTwitter className='text-white w-6 h-6' />
            </Link>
          </li>
        </span>
      </ul>
      {/* legal */}
      <ul className='my-3'>
        <li className='text-2xl text-light_green'>Legal:</li>
        <li className='my-3 text-light_green text-lg'>
          <Link href={"/privacy_policy"}>Privacy Policy</Link>
        </li>
        <li className='my-3 text-light_green text-lg'>
          <Link href={"/terms"}>Terms of Service</Link>
        </li>
      </ul>
      {/* copyright */}
      <div className='mt-auto'>
        <p className='my-3 text-light_green text-lg'>Copyright: <span className='flex flex-row items-center'><FaRegCopyright />2025 Agob Synergy.All rights reserved.</span></p>
      </div>
    </div>
  )
}

export default Footer;