import Image from 'next/image'

export default function Footer() {
  return (
    <main className='sticky bot bg-white py-[80px] px-[5%]'>
      <nav className='flex justify-between'>
      <div className='w-[50%]'>
        <Image
          className='cursor-pointer'
          src="/name.png"
          width={20}
          height={20}
          alt="..."
        />
      </div>
      <div className='w-[50%]'>
          <ul className='flex place-content-end items-center h-[100%] gap-[28px]'>
            <li>
              <a href="" className='transition ease-in-out duration-300 transform hover:text-gray-400 font-bold text-black text-lg font-medium'>Home</a>
            </li>
            <li>
              <a href="" className='transition ease-in-out duration-300 transform hover:text-gray-400 font-bold text-black text-lg font-medium'>Work</a>
            </li>
            <li>
              <a href="" className='transition ease-in-out duration-300 transform hover:text-gray-400 font-bold text-black text-lg font-medium'>About</a>
            </li>
        </ul>
      </div>
      </nav>
    </main>
  )
}
