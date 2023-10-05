import {useEffect} from "react";

import Image from "next/image";
import Link from "next/link";
import {useSearchParams} from 'next/navigation'

export default function Work() {
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
                            {"Tamagotchi AR"}
                        </div>
                        <div className='text-gray-500 text-lg font-normal'>
                            {"Virtual Pet Game AR"}
                        </div>
                    </div>
                    <div data-aos="fade" className='flex flex-col w-[50%] max-[769px]:w-auto gap-6'>
                        <div className='text-black text-2xl font-normal'>
                            {"Virtual Pet Game Using Augmented Reality, Marker Method Used To Feed The Pet And Markerless Method For Deploying The Pet, This Game Include 3 Different Pet And Egg Also Have Feature Shop And Mini Games!"}
                        </div>
                        <Link href="https://github.com/Edwinsidharta/TAMAGOTCHI-AR"
                              className='flex gap-2 items-center w-fit'>
                            <div className='text-black font-bold '>
                                {"View Project"}
                            </div>
                            <Image
                                className='cursor-pointer'
                                src="/arrow_right.png"
                                width={40}
                                height={40}
                                alt="..."
                            />
                        </Link>
                    </div>
                </div>
                <div className='flex max-[769px]:flex-col gap-6'>
                    <Image
                        data-aos="fade-up"
                        className='cursor-pointer'
                        src="/main_menu.jpg"
                        width={250}
                        height={500}
                        alt="..."
                    />
                    <Image
                        data-aos="fade-up"
                        className='cursor-pointer'
                        src="/deploy.jpg"
                        width={250}
                        height={500}
                        alt="..."
                    />
                    <Image
                        data-aos="fade-up"
                        className='cursor-pointer'
                        src="/shop.jpg"
                        width={250}
                        height={500}
                        alt="..."
                    />
                </div>
            </main>
            <hr className={"h-px border-0 dark:bg-gray-300"}/>
        </div>
    )
}
