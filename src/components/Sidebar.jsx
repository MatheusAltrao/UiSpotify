import React from 'react'
import Image from 'next/image';
import { Home as HomeIcon, Search, Library, } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className=" w-24 lg:w-72 bg-[#000] p-6" >

      <div className='flex items-center gap-2' >
        <div className='w-3 h-3 bg-red-500 rounded-full cursor-pointer' ></div>
        <div className='w-3 h-3 bg-yellow-400 rounded-full cursor-pointer' ></div>
        <div className='w-3 h-3 bg-green-500 rounded-full cursor-pointer' ></div>
      </div>

      <nav className='space-y-5 mt-10 flex items-center justify-center flex-col lg:items-start'>
        <a href="" className='flex items-center gap-4 text-sm font-semibold text-zinc-200' >
          <HomeIcon />  <span className='hidden lg:block' >Home</span>
        </a>
        <a href="" className='flex items-center gap-4 text-sm font-semibold text-zinc-200' >
          <Search />
          <span className='hidden lg:block' >Search</span>

        </a>
        <a href="" className='flex items-center gap-4 text-sm font-semibold text-zinc-200' >
          <Library />
          <span className='hidden lg:block' >Your library</span>
        </a>
      </nav>

      <div className='w-full my-5 bg-zinc-800 h-[1px]' ></div>

      <nav className='flex flex-col gap-3' >
        <a href='' className="text-sm text-zinc-400 hover:text-zinc-100 hidden lg:block  ">Hot Hit Brasil </a>
        <a href='' className="text-sm text-zinc-400 hover:text-zinc-100 hidden lg:block  ">Funk</a>
        <a href='' className="text-sm text-zinc-400 hover:text-zinc-100 hidden lg:block  ">Top Hits</a>
        <a href='' className="text-sm text-zinc-400 hover:text-zinc-100 hidden lg:block  ">Daily Mix 1</a>
        <a href='' className="text-sm text-zinc-400 hover:text-zinc-100 hidden lg:block  ">Daily Mix 2</a>
        <a href='' className="text-sm text-zinc-400 hover:text-zinc-100 hidden lg:block  ">Daily Mix 3</a>
        <a href='' className="text-sm text-zinc-400 hover:text-zinc-100 hidden lg:block  ">Daily Mix 4</a>
        <a href='' className="text-sm text-zinc-400 hover:text-zinc-100 hidden lg:block  ">My Playlist</a>
        <a href='' className="text-sm text-zinc-400 hover:text-zinc-100 hidden lg:block  ">Top 50 - Brasil</a>
        <a href='' className="text-sm text-zinc-400 hover:text-zinc-100 hidden lg:block  ">Top 50 - World</a>

      </nav>
    </aside>
  )
}

export default Sidebar