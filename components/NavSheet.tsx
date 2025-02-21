"use client"
import React,{ useState, useEffect } from 'react'
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
import { usePathname } from "next/navigation"

const NavSheet = () => {

    const pathname = usePathname()
    const [ isOpen, setIsOpen ] = useState(false)

    useEffect(()=>{
        setIsOpen(false)
    }, [pathname])

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
                <CiMenuFries className='text-3xl text-light_green font-bold cursor-pointer md:w-10 md:h-10' />
            </SheetTrigger>
            <SheetContent className='z-[1000] !overflow-y-auto'>
                <SheetHeader>
                    <SheetTitle className='flex flex-row items-center justify-between'>
                        <div className='w-14 h-14 relative overflow-hidden md:w-20 md:h-29'>
                            <Image src={"/agob-logo.jpg"} alt="agob-synergy-logo" fill priority objectFit="cover" objectPosition="center" />
                        </div>
                        <span className='text-dark_green md:text-2xl'>Agob-Synergy</span>
                    </SheetTitle>
                </SheetHeader>
                <NavLink setIsOpen={ setIsOpen } />
            </SheetContent>
        </Sheet>

    )
}

export default NavSheet