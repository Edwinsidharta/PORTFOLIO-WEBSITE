import {useEffect} from "react";

import Image from "next/image";
import Link from "next/link";
import {useSearchParams} from 'next/navigation'

export default function Anebantu() {
    const searchParams = useSearchParams();
    const page = searchParams.get('page');

    useEffect(() => {
        if (page == 'work') {
            window.scrollTo({
                top: 800,
                left: window.scrollX,
                behavior: "smooth"
            })
        }
    }, [page])

    return (
        <div className={"w-[100%] items-center"}>
            <main className={`flex flex-col w-[100%] items-center p-24 gap-12`}>
                <div data-aos="fade" className='flex max-[769px]:flex-col w-[50%] max-[769px]:w-auto'>
                    <div className='flex flex-col w-[50%] gap-6'>
                        <div className='text-black text-5xl font-extrabold'>
                            {"Website AneBantu"}
                        </div>
                        <div className='text-gray-500 text-lg font-normal'>
                            {"Website"}
                        </div>
                    </div>
                    <div data-aos="fade" className='flex flex-col w-[50%] max-[769px]:w-auto gap-6'>
                        <div className='text-black text-2xl font-normal'>
                            {"AneBantu is a website that provides transaction digitization solutions for purchasing products at supermarkets, grocery stores, pharmacies, and others. When I was an employee there, this website was still under development and private, so I can't provide a Github link or website link."}
                        </div>
                        <div className='text-rose-600 font-bold select-none'>
                            {"Still Under Development!"}
                        </div>
                    </div>
                </div>
                <div className='flex max-[769px]:flex-col gap-6'>
                    <Image
                        data-aos="fade-up"
                        className='cursor-pointer'
                        src="/anebantu.png"
                        width={800}
                        height={800}
                        alt="..."
                    />
                </div>
            </main>
            <hr className={"h-px border-0 dark:bg-gray-300"}/>
        </div>
    )
}
