import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { CiMenuFries } from "react-icons/ci"
import NavLink from './NavLink'
import Image from "next/image"

const NavSheet = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <CiMenuFries className='text-3xl text-light_green font-bold cursor-pointer' />
            </SheetTrigger>
            <SheetContent className='z-[1000] overflow-y-auto'>
                <SheetHeader>
                    <SheetTitle className='flex flex-row items-center justify-between'>
                        <div className='w-14 h-14 relative overflow-hidden'>
                            <Image src={"/agob-logo.jpg"} alt="agob-synergy-logo" fill priority objectFit="cover" objectPosition="center" />
                        </div>
                        <span className='text-dark_green'>Agob-Synergy</span>
                    </SheetTitle>
                </SheetHeader>
                <NavLink />
            </SheetContent>
        </Sheet>

    )
}

export default NavSheet