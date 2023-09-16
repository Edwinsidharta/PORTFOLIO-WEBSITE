import Image from 'next/image'

export default function Header() {
  return (
    <main className='sticky top-0 bg-white py-[18px] px-[5%]'>
      <nav className='flex justify-between'> 
      <div className='w-[50%]'>
        <Image
          className='cursor-pointer'
          src="/name.png"
          width={200}
          height={200}
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
