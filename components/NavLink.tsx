"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUp } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
interface openProps {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const NavLink = ({ setIsOpen }: openProps) => {
    const [ drop, setIsDrop ] = useState(false)
    const [ flip, setIsFlip ] = useState(false)
    const handleOpenChange = (drop: boolean) =>{
        setIsDrop(drop)
        if(drop === false){
            setIsFlip(false)
        }else{
            setIsFlip(true)
        } 
    }
  return (
    <nav className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:w-[50rem] lg:h-16">
      <ul className="link-style">
        <li>
          <Link href={"/"} className="nav-anchor" onClick={() => setIsOpen && setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link href={"/about"} className="nav-anchor" onClick={() => setIsOpen && setIsOpen(false)}>
            About
          </Link>
        </li>
        <span className="relative">
          <DropdownMenu open={drop} onOpenChange={handleOpenChange}>
            <DropdownMenuTrigger asChild>
              <li>
                <span className="flex flex-row items-center justify-between">
                    <Link href={""} >Services</Link>
                    { flip === false ? <ArrowDown /> : <ArrowUp /> } 
                </span>
              </li>  
              {/* <Button className="bg-white w-full border-none outline-none shadow-none text-lg !text-left text-dark_green mx-3 hover:bg-dark_green hover:text-light_green" variant="outline">Open</Button> */}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-[4000] relative">
              <ul>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <li>
                      <Link href={"/service/real_estate"}>Real Estate</Link>
                    </li>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <li>
                      <Link href={"/service/construction"}>Construction</Link>
                    </li>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <li>
                      <Link href={"/service/interior_exterior"}>
                        Interior/Exterior Decoration
                      </Link>
                    </li>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <li>
                      <Link href={"/service/electrical_merchandising"}>
                        Electrical Marchandising
                      </Link>
                    </li>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <li>
                      <Link href={"/service/hospitality"}>
                        Hospitality & Food Production
                      </Link>
                    </li>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <li>
                      <Link href={"/service/agriculture"}>
                        Agriculture Business
                      </Link>
                    </li>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <li>
                      <Link href={"/service/automobile"}>
                        Automoble & Spare parts
                      </Link>
                    </li>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <li>
                      <Link href={"/service/car_hire"}>Car Hire/Logistics</Link>
                    </li>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <li>
                      <Link href={"/service/supermarket_retail"}>
                        Supermarket/Retail
                      </Link>
                    </li>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <li>
                      <Link href={"/service/finance_investment"}>
                        Finance/Investment
                      </Link>
                    </li>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </ul>
            </DropdownMenuContent>
          </DropdownMenu>
        </span>
        <li>
          <Link href={"/faqs"} className="nav-anchor" onClick={() => setIsOpen && setIsOpen(false)}>
            FAQs
          </Link>
        </li>
        {/* <li>
                    <Link href={"/privacy_policy"}>Terms</Link>
                </li>
                <li>
                    <Link href={"/terms"}>Terms</Link>
                </li> */}
      </ul>
      <Link
        href={"/contact"}
        className="w-full my-9 py-4 bg-dark_green text-light_green uppercase flex flex-row items-center justify-center lg:w-36"
        onClick={() => setIsOpen && setIsOpen(false)}
      >
        contact us
      </Link>
    </nav>
  );
};

export default NavLink;
