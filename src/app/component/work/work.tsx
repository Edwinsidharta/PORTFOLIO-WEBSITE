import Image from "next/image";
import Link from "next/link";

export default function Work() {
    return (
        <div className={"w-[100%] items-center"}>
            <main className={`flex flex-col w-[100%] items-center p-24 gap-12`}>
                <div className='flex w-[50%]'>
                    <div className='flex flex-col w-[50%] gap-6'>
                        <div className='text-black text-5xl font-extrabold'>
                            Tamagotchi AR
                        </div>
                        <div className='text-gray-500 text-lg font-normal'>
                            Virtual Pet Game AR
                        </div>
                    </div>
                    <div className='flex flex-col w-[50%] gap-6'>
                        <div className='text-black text-2xl font-normal'>
                            Virtual Pet Game Using Augmented Reality, Marker Method Used To Feed The Pet And Markerless
                            Method For Deploying The Pet,
                            This Game Include 3 Different Pet And Egg Also Have Feature Shop And Mini Games!
                        </div>
                        <Link href="/" className='flex gap-2 items-center w-fit'>
                            <div className='text-black font-bold'>
                                View Project
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
                <div className='flex gap-6'>
                    <Image
                        className="cursor-pointer delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0"
                        data-taos-offset="300"
                        src="/main_menu.jpg"
                        width={250}
                        height={500}
                        alt="..."
                    />
                    <Image
                        className='cursor-pointer'
                        src="/deploy.jpg"
                        width={250}
                        height={500}
                        alt="..."
                    />
                    <Image
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
