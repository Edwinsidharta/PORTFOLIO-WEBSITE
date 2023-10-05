import Image from 'next/image'

export default function Footer() {
    return (
        <main className='sticky bot bg-white py-[50px] px-[4%] w-[100%]'>
            <nav className='flex flex-col gap-[28px]'>
                <div className='flex gap-[16px] items-center'>
                    <Image
                        src="/online.svg"
                        width={30}
                        height={30}
                        alt="..."
                    />
                    <div className='text-black text-4xl font-bold'>{"Contact"}</div>
                </div>
                <div className='w-[100%] pl-[54px]'>
                    <ul className='flex max-[426px]:flex-col min-[425px]:items-center h-[100%] gap-[28px]'>
                        <li>
                            <a href="https://www.linkedin.com/in/edwin-sidharta-a79482129/"
                               className='transition ease-in-out duration-300 transform hover:text-gray-400 font-bold text-black text-lg font-semibold'>{"LinkedIn"}</a>
                        </li>
                        <li>
                            <a href="mailto:edwin0sidharta@gmail.com?subject=Hey%20there!"
                               className='transition ease-in-out duration-300 transform hover:text-gray-400 font-bold text-black text-lg font-semibold'>{"Email"}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </main>
    )
}
