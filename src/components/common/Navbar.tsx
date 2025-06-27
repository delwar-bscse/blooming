'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import BrandLogo from '@/assets/common/bloomimgLogo.png'
import UserImage from '@/assets/common/user.png'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Menu } from 'lucide-react'
import { navbarItems } from '@/constants/navbarDatas'
import { myFetch } from '@/utils/myFetch'

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);

  const isActive = (url: string) => {
    if (url === "/") return pathname === "/";
    return pathname === url || pathname.startsWith(`${url}/`);
  };

  useEffect(() => {
    try {
      const getUser = async () => {
        const response = await myFetch("/users/my-profile", {
          method: "GET"
        });
        // console.log("User Data:", response);
        setUser(response?.data);
      };
      getUser();
    } catch (error) {
      console.log(error);
    }

  }, [pathname]);


  return (
    <div className='shadow-md bg-[#DEE5EC] sticky top-0 z-50'>
      <div className='maxWidth flex justify-between items-center py-3 px-2'>
        {/* Brand Logo */}
        <Link href="/" className='flex justify-start items-center'>
          <Image src={BrandLogo} alt="Brand Logo" width={100} height={20} />
        </Link>

        {/* Desktop Navigation */}
        <ul className='hidden grow lg:flex justify-center items-center gap-1 font-semibold text-gray-700'>
          {navbarItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer px-3 hover:scale-105 py-1 rounded-sm transition-all duration-300 ${isActive(item.url)
                  ? 'bg-[#FFECAC] text-primary font-bold'
                  : 'hover:bg-[#FFECAC]'
                }`}
            >
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>

        {/* Sign In / Mobile Menu Trigger */}
        <div className='flex justify-end items-center gap-4 relative'>
          {!user ? (
            <Link href="/login" className='hidden md:inline-block bg-primary text-white py-2 px-4 rounded'>Sign In</Link>
          ) : (
            <div className='flex items-center gap-2 cursor-pointer'>
              <div className='max-md:hidden w-12 h-12 rounded-full overflow-hidden border-2 border-primary'>
                <Image src={UserImage} alt="User Profile" width={200} height={200} className='object-fit' />
              </div>
              <Link href="/profile" className='hidden xl:inline-block font-bold text-gray-700'>Shamim Nader</Link>
            </div>
          )}

          {/* Mobile Menu */}
          <div className='lg:hidden'>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Menu className="w-6 h-6 text-gray-600" />
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <SheetHeader>
                  <SheetTitle className="text-left text-lg">
                    <Image src={BrandLogo} alt="Brand Logo" width={160} height={40} />
                  </SheetTitle>
                </SheetHeader>

                <ul className='flex flex-col mt-6 gap-2 font-medium text-gray-700'>
                  {user && (
                    <li onClick={() => setOpen(false)} className='cursor-pointer hover:bg-gray-100 px-3 py-2 rounded'>
                      <Link href="/profile" className='flex gap-2 items-center'>
                        <span className='w-12 h-12 block rounded-full overflow-hidden border-2 border-primary'>
                          <Image src={UserImage} alt="User Profile" width={100} height={100} />
                        </span>
                        <span className='flex flex-col text-gray-600 text-sm'>
                          <span>Rohan Chopra</span>
                          <span>@jennywilson</span>
                        </span>
                      </Link>
                    </li>
                  )}

                  {navbarItems.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => setOpen(false)}
                      className={`cursor-pointer px-3 py-2 rounded transition-colors duration-200 ${isActive(item.url)
                          ? 'bg-gray-200 text-primary font-semibold'
                          : 'hover:bg-gray-100'
                        }`}
                    >
                      <Link href={item.url}>{item.title}</Link>
                    </li>
                  ))}

                  <li className='px-3 py-4'>
                    {!user && (
                      <Link href="/login" className='block bg-primary text-white px-4 py-2 rounded mt-2 text-center'>Sign In</Link>
                    )}
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
