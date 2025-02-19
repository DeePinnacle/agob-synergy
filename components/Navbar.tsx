import React from 'react'
import Image from "next/image"
import NavSheet from './NavSheet'
import Link from "next/link"
import NavLink from './NavLink'
const Navbar = () => {
    return (
        <nav className='w-full sticky top-0 z-[999]'>
            <div className='w-full px-3 py-4 bg-white shadow-lg shadow-black/15 flex flex-row items-center justify-between lg:py-2'>
                <Link href={"/"}>
                    <div className='w-14 h-14 relative overflow-hidden md:w-20 md:h-20 lg:h-16'>
                        <Image src={"/agob-logo.jpg"} alt="agob-synergy-logo" fill priority objectFit="cover" objectPosition="center" />
                    </div>
                </Link>
                {/* mobile view */}
                <div className="lg:hidden">
                    <NavSheet />
                </div>
                {/* large screen */}
                <div className="hidden lg:block">
                    <NavLink />
                </div>
            </div>
        </nav>
    )
}

export default Navbar