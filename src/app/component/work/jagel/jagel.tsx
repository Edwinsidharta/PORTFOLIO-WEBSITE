import {useEffect} from "react";

import Image from "next/image";
import Link from "next/link";
import {useSearchParams} from 'next/navigation'

export default function Jagel() {
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
                            {"Jagel - Buat Aplikasi Android"}
                        </div>
                        <div className='text-gray-500 text-lg font-normal'>
                            {"Website"}
                        </div>
                    </div>
                    <div data-aos="fade" className='flex flex-col w-[50%] max-[769px]:w-auto gap-6'>
                        <div className='text-black text-2xl font-normal'>
                            {"Platform for creating Android applications such as online transportation, online laundry, online massage, food delivery, reservation services, online stores, or other creative ideas. For now Jagel also have a CPaaS Product that handle call and conversation that integrated with Whatsapp, Facebook and Instagram"}
                        </div>
                        <Link href="https://jagel.co/"
                              className='flex gap-2 items-center w-fit'>
                            <div className='text-black font-bold '>
                                {"View Project"}
                            </div>
                            <Image
                                className='cursor-pointer'
                                src="/arrow_right.png"
                                width={20}
                                height={20}
                                alt="..."
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-wrap gap-6 justify-center md:justify-center">
                    <Image
                        data-aos="fade-up"
                        className='cursor-pointer'
                        src="/jagel.png"
                        width={1000}
                        height={1000}
                        alt="..."
                    />
                    <Image
                        data-aos="fade-up"
                        className='cursor-pointer'
                        src="/jagel2.png"
                        width={1000}
                        height={1000}
                        alt="..."
                    />
                    <Image
                        data-aos="fade-up"
                        className='cursor-pointer'
                        src="/jagel3.png"
                        width={1000}
                        height={1000}
                        alt="..."
                    />
                </div>
            </main>
            <hr className={"h-px border-0 dark:bg-gray-300"}/>
        </div>
    )
}
