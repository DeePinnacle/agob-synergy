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
  const [drop, setIsDrop] = useState(false);
  const [flip, setIsFlip] = useState(false);

  const handleOpenChange = (drop: boolean) => {
    setIsDrop(drop);
    if (drop === false) {
      setIsFlip(false);
    } else {
      setIsFlip(true);
    }
  };
  return (
    <nav className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:w-[50rem] lg:h-16">
      <ul className="link-style">
        <li>
          <Link
            href={"/"}
            className="nav-anchor"
            onClick={() => setIsOpen && setIsOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/about"}
            className="nav-anchor"
            onClick={() => setIsOpen && setIsOpen(false)}
          >
            About
          </Link>
        </li>
        <DropdownMenu open={drop} onOpenChange={handleOpenChange}>
          <DropdownMenuTrigger asChild>
            <li>
              <span className="flex flex-row items-center justify-between cursor-pointer">
                <Link href={""}>Services</Link>
                {flip === false ? <ArrowDown /> : <ArrowUp />}
              </span>
            </li>
            {/* <Button className="bg-white w-full border-none outline-none shadow-none text-lg !text-left text-dark_green mx-3 hover:bg-dark_green hover:text-light_green" variant="outline">Open</Button> */}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-[4000] h-[24.375rem] overflow-y-auto lg:overflow-y-hidden lg:w-[660px] lg:h-[480px]">
            <ul className="drop_items lg:grid lg:grid-cols-2 lg:gap-3">
              <DropdownMenuGroup>
                <Link href="/service/real_estate">
                  <DropdownMenuItem className="drop__menu__item">
                    <li>Real Estate</li>
                  </DropdownMenuItem>
                </Link>
                <Link href={"/service/construction"}>
                  <DropdownMenuItem className="drop__menu__item">
                    <li>Construction</li>
                  </DropdownMenuItem>
                </Link>
                <Link href={"/service/interior_exterior"}>
                  <DropdownMenuItem className="drop__menu__item">
                    <li>Interior/Exterior Decoration</li>
                  </DropdownMenuItem>
                </Link>
                <Link href={"/service/electrical_merchandising"}>
                  <DropdownMenuItem className="drop__menu__item">
                    <li>Electrical Marchandising</li>
                  </DropdownMenuItem>
                </Link>
                <Link href={"/service/hospitality"}>
                  <DropdownMenuItem className="drop__menu__item">
                    <li>Hospitality & Food Production</li>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
              <DropdownMenuGroup>
                <Link href={"/service/agriculture"}>
                  <DropdownMenuItem className="drop__menu__item">
                    <li>Agriculture Business</li>
                  </DropdownMenuItem>
                </Link>
                <Link href={"/service/automobile"}>
                  <DropdownMenuItem className="drop__menu__item">
                    <li>Automoble & Spare parts</li>
                  </DropdownMenuItem>
                </Link>
                <Link href={"/service/car_hire"}>
                  <DropdownMenuItem className="drop__menu__item">
                    <li>Car Hire/Logistics</li>
                  </DropdownMenuItem>
                </Link>
                <Link href={"/service/supermarket_retail"}>
                  <DropdownMenuItem className="drop__menu__item">
                    <li>Supermarket/Retail</li>
                  </DropdownMenuItem>
                </Link>
                <Link href={"/service/finance_investment"}>
                  <DropdownMenuItem className="drop__menu__item">
                    <li>Finance/Investment</li>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
            </ul>
          </DropdownMenuContent>
        </DropdownMenu>
        <li>
          <Link
            href={"/faqs"}
            className="nav-anchor"
            onClick={() => setIsOpen && setIsOpen(false)}
          >
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
