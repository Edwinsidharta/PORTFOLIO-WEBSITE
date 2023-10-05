import Image from 'next/image'

export default function Greeting() {
    return (
        <div>
            <main className={`flex w-[100%] items-center gap-[48px] p-24`}>
                <div className='flex place-content-end w-[50%]'>
                    <Image
                        data-aos="fade"
                        className='cursor-pointer'
                        src="/foto.jpg"
                        width={400}
                        height={600}
                        alt="..."
                    />
                </div>
                <div data-aos="fade" className='flex flex-col w-[25%] gap-[32px]' >
                    <div className='text-orange-500 text-7xl font-extrabold'>{"Hello!"}</div>
                    <div className='text-black text-5xl font-semibold'>{"I'm Edwin, a software developer based in Surabaya!"}</div>
                </div>
            </main>
            <hr className={"h-px border-0 dark:bg-gray-300"}/>
        </div>
    )
}
