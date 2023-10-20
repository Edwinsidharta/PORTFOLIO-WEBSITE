"use client";

import Image from 'next/image'

import React, {useEffect, useState} from "react";
import Link from "next/link";
import {usePathname} from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    const scrollDirection = useScrollDirection();

    return (
        <main
            className={`sticky ${scrollDirection === 'down' ? '-top-[100%]' : 'top-0'} bg-white py-[22px] px-[11%] transition-all duration-300`}>
            <nav className='flex max-[426px]:flex-col max-[426px]:items-center justify-between'>
                <div className='flex w-[50%] items-center gap-[8px] max-[426px]:w-auto'>
                    <Image
                        className='cursor-pointer'
                        src="/online.svg"
                        width={18}
                        height={18}
                        alt="..."
                    />
                    <Link href="/" className='text-black text-2xl font-bold cursor-pointer'>
                        Edwin Sidharta
                    </Link>
                </div>
                <div className='w-[50%] max-[426px]:w-auto'>
                    <ul className='flex place-content-end items-center h-[100%] gap-[38px]'>
                        <li>
                            <Link href="/"
                                  className={`transition ease-in-out duration-300 transform hover:text-gray-400 font-bold ${pathname != "/" ? 'text-black' : 'text-blue-400'} text-lg font-semibold`}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <a onClick={() => {
                                scrollToWorkPage(pathname)
                            }}
                               className='transition ease-in-out duration-300 transform hover:text-gray-400 font-bold text-black text-lg font-semibold cursor-pointer'>
                                Work
                            </a>
                        </li>
                        <li>
                            <Link href="/about"
                                  className={`transition ease-in-out duration-300 transform hover:text-gray-400 font-bold ${pathname != "/about" ? 'text-black' : 'text-blue-400'} text-lg font-semibold`}>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </main>
    )
}

export function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState('');
    useEffect(() => {
        let lastScrollY = window.pageYOffset;
        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? 'down' : 'up';
            if (direction !== scrollDirection) {
                setScrollDirection(direction)
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection);
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection])
    return scrollDirection;
};

export function scrollToWorkPage(pathname: string | null) {
    if (pathname != "/") window.location.href = "/?page=work"
    else {
        window.scrollTo({
            top: 800,
            left: window.scrollX,
            behavior: "smooth"
        })
    }
}
