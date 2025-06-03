"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import BrandLogo from '@/assets/common/bloomimgLogo.png'
import UserImage from '@/assets/common/user.png'
// import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Menu } from 'lucide-react'
import { navbarItems } from '@/constants/navbarDatas'

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const userRole: boolean = true;

  return (
    <div className='shadow-md bg-[#DEE5EC] sticky top-0 z-50'>
      <div className='maxWidth flex justify-between items-center maxWidth py-3 px-2'>
        {/* Brand Logo */}
        <Link href="/" className='flex justify-start items-center'>
          <Image src={BrandLogo} alt="Vercel Logo" width={100} height={20} />
        </Link>

        {/* Desktop Navigation */}
        <ul className='hidden grow lg:flex justify-center items-center gap-1 font-semibold text-gray-700'>
          {navbarItems.map((item) => (
            <li key={item.id} className='cursor-pointer px-3 py-1 rounded-sm hover:bg-[#FFECAC]'>
              <Link href={`${item.url}`}>{item.title}</Link>
            </li>
          ))}
        </ul>

        {/* Sign In / Mobile Menu Trigger */}
        <div className='flex justify-end items-center gap-4 relative'>
          {!userRole ? (
            <Link href="/signin" className='hidden md:inline-block bg-primary text-white py-2 px-4'>Sign In</Link>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className='flex items-center gap-2 cursor-pointer'>
                  <div className='max-md:hidden w-12 h-12 block rounded-full overflow-hidden border-2 border-primary cursor-pointer'>
                    <Image src={UserImage} alt="User Profile" width={200} height={200} className='object-fit' />
                  </div>
                  <span className='hidden xl:inline-block'>Shamim Nader</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60 relative top-4 right-24">
                <Link href={`/${userRole}/portfolio`}>
                  <DropdownMenuItem className='cursor-pointer'>
                    <span className='flex gap-2 items-center'>
                      <span className='w-12 h-12 block rounded-full overflow-hidden border-2 border-primary'>
                        <Image src={UserImage} alt="User Profile" width={100} height={100} />
                      </span>
                      <span className='flex flex-col text-gray-600 text-sm'>
                        <span>Rohan Chopra</span>
                        <span>@jennywilson</span>
                      </span>
                    </span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                {/* <Link href="/terms-and-conditions" className='cursor-pointer'>
                  <DropdownMenuItem className='cursor-pointer text-xl text-gray-600'>Terms & Conditions</DropdownMenuItem>
                </Link>
                <Link href="/privacy-policy" className='cursor-pointer'>
                  <DropdownMenuItem className='cursor-pointer text-xl text-gray-600'>Privacy Policy</DropdownMenuItem>
                </Link>
                <Link href="/faqs">
                  <DropdownMenuItem className='cursor-pointer text-xl text-gray-600'>FAQ</DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator /> */}
                <DropdownMenuItem className='cursor-pointer text-xl text-gray-600 font-semibold'>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* ------------ Mobile Menu ------------- */}
          <div className='lg:hidden'>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                {/* <Button variant="ghost" size="icon"> */}
                  <Menu className="w-6 h-6 text-gray-600" />
                {/* </Button> */}
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <SheetHeader>
                  <SheetTitle className="text-left text-lg">
                    <Image src={BrandLogo} alt="Vercel Logo" width={160} height={40} />
                  </SheetTitle>
                </SheetHeader>
                <ul className='flex flex-col mt-6 gap-2 font-medium text-gray-700'>
                  {userRole && <li onClick={() => setOpen(false)} className='cursor-pointer hover:bg-gray-100 px-3 py-2 rounded'>
                    <Link href={`/${userRole}/portfolio`} className='flex gap-2 items-center'>
                      <span className='w-12 h-12 block rounded-full overflow-hidden border-2 border-primary'>
                        <Image src={UserImage} alt="User Profile" width={100} height={100} />
                      </span>
                      <span className='flex flex-col text-gray-600 text-sm'>
                        <span>Rohan Chopra</span>
                        <span>@jennywilson</span>
                      </span>
                    </Link>
                  </li>}
                  {navbarItems.map((item) => (
                    <li key={item.id} onClick={() => setOpen(false)} className='cursor-pointer hover:bg-gray-100 px-3 py-2 rounded'>
                      <Link href={`${item.url}`}>{item.title}</Link>
                    </li>
                  ))}
                  {/* <li onClick={() => setOpen(false)} className='cursor-pointer hover:bg-gray-100 px-3 py-2 rounded'>
                    <Link href="/">Home</Link>
                  </li>
                  <li onClick={() => setOpen(false)} className='cursor-pointer hover:bg-gray-100 px-3 py-2 rounded'>
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li onClick={() => setOpen(false)} className='cursor-pointer hover:bg-gray-100 px-3 py-2 rounded'>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  {userRole && <li onClick={() => setOpen(false)} className='cursor-pointer hover:bg-gray-100 px-3 py-2 rounded'>
                    <Link href="/terms-and-conditions">Terms & Conditions</Link>
                  </li>}
                  {userRole && <li onClick={() => setOpen(false)} className='cursor-pointer hover:bg-gray-100 px-3 py-2 rounded'>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>}
                  {userRole && <li onClick={() => setOpen(false)} className='cursor-pointer hover:bg-gray-100 px-3 py-2 rounded'>
                    <Link href="/faqs">FAQ</Link>
                  </li>} */}
                  <li className='px-3 py-4'>
                    {!userRole ? <Link href="/signin" className='block bg-primary text-white px-4 py-2 rounded mt-2 text-center'>Sign In</Link> : <button className='block w-full bg-primary text-white px-4 py-2 rounded mt-2 text-center'>Sign Out</button>}
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
