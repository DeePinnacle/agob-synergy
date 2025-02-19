"use client"
import React, { Dispatch, SetStateAction, useState } from 'react'
import Link from "next/link"
import { ArrowDown, ArrowUp } from 'lucide-react'

interface openProps{
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const NavLink = ({ setIsOpen }:openProps) => {
    const [ toggle, setToggle ] = useState(false)
    const handleToggle =()=>{
        setToggle(!toggle)
        // alert("welcome")
    }
    return (
        <nav className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:w-[50rem] lg:h-16">
            <ul className='link-style'>
                <li>
                    <Link href={"/"} onClick={()=> setIsOpen && setIsOpen(false)}>Home</Link>
                </li>
                <li>
                    <Link href={"/about"} onClick={()=> setIsOpen && setIsOpen(false)}>About</Link>
                </li>
                <span className='relative'>
                    <li onClick={handleToggle}>
                        <Link href={"/"} className='w-full !flex !flex-row !items-center !justify-between'>Services { toggle ? <ArrowUp /> : <ArrowDown />}</Link>
                    </li>
                    <div className={`${ toggle ? "block" : "hidden" } w-full relative mx-2 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bg-white lg:w-[44rem]`}>
                            <ul className="lg:grid lg:grid-cols-2 lg:gap-3 ">
                                <div className='w-full'>
                                    <li>
                                        <Link href={"/service/real_estate"}>Real Estate</Link>
                                    </li>
                                    <li>
                                        <Link href={"/service/construction"}>Construction</Link>
                                    </li>
                                    <li>
                                        <Link href={"/service/interior_exterior"}>Interior/Exterior Decoration</Link>
                                    </li>
                                    <li>
                                        <Link href={"/service/electrical_merchandising"}>Electrical Marchandising</Link>
                                    </li>
                                    <li>
                                        <Link href={"/service/hospitality"}>Hospitality & Food Production</Link>
                                    </li>
                                </div>
                                <div className='w-full'>
                                    <li>
                                        <Link href={"/service/agriculture"}>Agriculture Business</Link>
                                    </li>
                                    <li>
                                        <Link href={"/service/automobile"}>Automoble & Spare parts</Link>
                                    </li>
                                    <li>
                                        <Link href={"/service/car_hire"}>Car Hire/Logistics</Link>
                                    </li>
                                    <li>
                                        <Link href={"/service/supermarket_retail"}>Supermarket/Retail</Link>
                                    </li>
                                    <li>
                                        <Link href={"/service/finance_investment"}>Finance/Investment</Link>
                                    </li>
                                </div>
                            </ul>
                        </div>
                </span>
                <li>
                    <Link href={"/faqs"} onClick={()=> setIsOpen && setIsOpen(false)}>FAQs</Link>
                </li>
                {/* <li>
                    <Link href={"/privacy_policy"}>Terms</Link>
                </li>
                <li>
                    <Link href={"/terms"}>Terms</Link>
                </li> */}
            </ul>
            <Link href={"/contact"} className='w-full my-9 py-4 bg-dark_green text-light_green uppercase flex flex-row items-center justify-center lg:w-36' onClick={()=> setIsOpen && setIsOpen(false)}>contact us</Link>
        </nav>
    )
}

export default NavLink