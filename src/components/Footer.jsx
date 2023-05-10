'use client';
import React from 'react'
import Image from 'next/image';
import { Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#181818] border-t border-zinc-800 px-6 py-4 flex items-center justify-between " >

      <div className=' hidden md:flex items-center gap-3 w-[200px] ' >
        <Image src='/Album.jpg' className='rounded-md' alt='album' width={56} height={56} />

        <div className='flex flex-col gap-1  ' >
          <strong className='font-normal hover:underline' >Radioactive</strong>
          <span className='text-xs text-zinc-400 hover:underline' >Imagine Dragons</span>
        </div>

      </div>

      <div className=' hidden md:flex flex-col items-center '>
        <div className=' hidden md:flex items-center  gap-6' >
          <Shuffle size={19} fill='weight' className='cursor-pointer text-zinc-200' />
          <SkipBack size={20} fill='weight' className='cursor-pointer text-zinc-200' />

          <button className='rounded-full bg-white text-black  pl-1 flex items-center justify-center h-10 w-10' >
            <Play fill='weight' />
          </button>

          <SkipForward size={20} fill='weight' className='cursor-pointer text-zinc-200' />
          <Repeat size={19} fill='weight' className='cursor-pointer text-zinc-200' />

        </div>

        <div className='hidden md:flex items-center gap-2 mt-4 w-full' >
          <span className='text-xs text-zinc-400'>1:20</span>
          <div className='h-1 rounded-full  w-[500px] bg-zinc-600' >
            <div className='w-[45%] bg-zinc-200 h-1 rounded-full' ></div>
          </div>
          <span className='text-xs text-zinc-400'>3:06</span>
        </div>

      </div>

      <div className='hidden lg:flex items-center gap-4 ' >
        <Mic2 size={20} className='cursor-pointer' />
        <LayoutList size={20} className='cursor-pointer' />
        <Laptop2 size={20} className='cursor-pointer' />

        <div className='flex items-center mx-2'>
          <Volume size={20} className='cursor-pointer' />
          <span className='text-xs text-zinc-400'></span>
          <div className='h-1 rounded-full w-24 bg-zinc-600' >
            <div className='w-10 bg-zinc-200 h-1 rounded-full' ></div>
          </div>
        </div>

        <Maximize2 size={20} className='cursor-pointer' />



      </div>


      <div className='flex items-center justify-between md:hidden w-full relative' >

        <div className=' flex items-center gap-3 w-[200px] pb-4' >
          <Image src='/Album.jpg' className='rounded-md' alt='album' width={56} height={56} />

          <div className='flex flex-col gap-1  ' >
            <strong className='font-normal hover:underline' >Radioactive</strong>
            <span className='text-xs text-zinc-400 hover:underline' >Imagine Dragons</span>
          </div>

        </div>




        <div className='flex items-center justify-center relative ' >


          <button className=' md:hidden  rounded-full  text-black  flex items-center justify-center h-10 w-10' >
            <Laptop2 size={22} className='cursor-pointer' color='#fff' />
          </button>

          <button className=' md:hidden  rounded-full  text-black  pl-1 flex items-center justify-center h-10 w-10' >
            <Play size={22} fill='weight' color='#fff' />
          </button>



        </div>

        <div className='md:hidden flex items-center gap-2 mt-4 w-full absolute bottom-0' >

          <div className='h-1 rounded-full  w-[500px] bg-zinc-600' >
            <div className='w-[45%] bg-zinc-200 h-1 rounded-full' ></div>
          </div>

        </div>

      </div>



    </footer>
  )
}

export default Footer