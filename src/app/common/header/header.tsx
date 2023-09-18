"use client";

import Image from 'next/image'
import useScrollDirection from "@/app/common/use-scroll-direction/useScrollDirection";

export default function Header() {
    const scrollDirection = useScrollDirection();
    return (
        <main
            className={`sticky ${scrollDirection === 'down' ? '-top-[80px]' : 'top-0'} bg-white py-[22px] px-[5%] h-[80px] transition-all duration-500`}>
            <nav className='flex justify-between'>
                <div className='flex w-[50%] items-center gap-[8px]'>
                    <Image
                        className='cursor-pointer'
                        src="/online.png"
                        width={18}
                        height={18}
                        alt="..."
                    />
                    <div className='text-black text-2xl font-bold cursor-pointer'>Edwin Sidharta</div>
                </div>
                <div className='w-[50%]'>
                    <ul className='flex place-content-end items-center h-[100%] gap-[38px]'>
                        <li>
                            <a href=""
                               className='transition ease-in-out duration-300 transform hover:text-gray-400 font-bold text-black text-lg font-semibold'>Home</a>
                        </li>
                        <li>
                            <a href=""
                               className='transition ease-in-out duration-300 transform hover:text-gray-400 font-bold text-black text-lg font-semibold'>Work</a>
                        </li>
                        <li>
                            <a href=""
                               className='transition ease-in-out duration-300 transform hover:text-gray-400 font-bold text-black text-lg font-semibold'>About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </main>
    )
}
