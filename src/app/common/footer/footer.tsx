import Image from 'next/image'

export default function Footer() {
    return (
        <main className='sticky bot bg-white py-[50px] px-[4%]'>
            <nav className='flex flex-col gap-[28px]'>
                <div className='flex gap-[16px] items-center'>
                    <Image
                        src="/online.png"
                        width={34}
                        height={34}
                        alt="..."
                    />
                    <div className='text-black text-4xl font-bold'>Contact</div>
                </div>
                <div className='w-[100%] pl-[54px]'>
                    <ul className='flex items-center h-[100%] gap-[28px]'>
                        <li>
                            <a href=""
                               className='transition ease-in-out duration-300 transform hover:text-gray-400 font-bold text-black text-lg font-semibold'>LinkedIn</a>
                        </li>
                        <li>
                            <a href=""
                               className='transition ease-in-out duration-300 transform hover:text-gray-400 font-bold text-black text-lg font-semibold'>Email</a>
                        </li>
                        <li>
                            <a href=""
                               className='transition ease-in-out duration-300 transform hover:text-gray-400 font-bold text-black text-lg font-semibold'>Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </main>
    )
}
