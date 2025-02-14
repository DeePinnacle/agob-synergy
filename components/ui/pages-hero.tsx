import React from 'react';
import Image from "next/image";
const PagesHero = ({ img, title }:{img: string, title: string}) => {
    return (
        <div className='w-full'>
            <div className='relative h-52 bg-dark_green overflow-hidden'>
                <Image src={`/${img}`} alt="engineer" fill priority objectFit='cover' objectPosition='center' />
                <div className='absolute inset-0 bg-gradient-to-tr from-dark_green/40 to-light_green/70 flex flex-col px-2'>
                    <p className='text-lg mt-auto text-near_white font-extrabold uppercase'>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default PagesHero;