import { Teams } from '@/data/data'
import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { Mail, Phone, Send } from 'lucide-react'
const Team = () => {
    return (
        <div className='w-full max-w-6xl lg:mx-auto'>
            <div className='p-2 lg:flex lg:flex-col lg:items-center lg:justify-center'>
                <h1 className='text-2xl text-dark_green font-semibold md:text-3xl lg:text-center lg:text-2xl'>Our Dedicated <span className='text-light_green'>Team</span></h1>
                <p className='text-dark_green text-lg mb-2 md:text-2xl lg:text-center lg:text-base'>The experts behind Agob Synergy—united by passion, innovation, and commitment.</p>
            </div>
            <div className='p-2 lg:grid lg:grid-cols-3 lg:gap-4'>
                {
                    Teams?.map((team) => (
                        <div key={team.id} className='my-4 shadow-2xl shadow-light_green/40'>
                            <div className='relative w-full h-80 overflow-hidden md:h-[35rem] lg:h-80'>
                                <Image src={`/${team.image}`} alt={team.image} fill priority objectFit='cover' objectPosition='center' />
                                <div className='overlay'></div>
                            </div>
                            <div className='px-3 py-8 flex flex-col items-center justify-center'>
                                <p className='text-lg text-dark_green md:text-2xl lg:text-lg'>{team.title}</p>
                                <p className='text-lg text-dark_green font-semibold mb-4 md:text-2xl lg:text-base'>{team.name}</p>
                                <span className='flex flex-row items-center gap-4 mb-5'>
                                    <div className='w-12 h-12 bg-light_green flex flex-col items-center justify-center rounded-full'>
                                        <Link href={`tel:${team.tel}`}>
                                            <Phone className='text-dark_green' />
                                        </Link>
                                    </div>
                                    <div className='w-12 h-12 bg-light_green flex flex-col items-center justify-center rounded-full'>
                                        <Link href={`mailto:${team.mail}`}>
                                            <Mail className='text-dark_green' />
                                        </Link>
                                    </div>
                                    <div className='w-12 h-12 bg-light_green flex flex-col items-center justify-center rounded-full'>
                                        <Link href={`tel:${team.tel}`}>
                                            <Send className='text-dark_green' />
                                        </Link>
                                    </div>
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Team