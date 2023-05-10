'use client';
import React from 'react'
import Image from 'next/image';
import { Play } from 'lucide-react';

const Banner = () => {
  return (
    <a href='' className='bg-white/5 group hover:bg-white/10 transition-colors rounded-sm overflow-hidden  flex items-center gap-4' >
      <Image width={80} height={80} src='/Album.jpg' alt='Foto do album' />
      <strong>Imagine Dragons</strong>
      <button className='p-2 bg-green-400 text-black rounded-full ml-auto mr-8 hover:bg-green-500 items-center justify-center w-12 h-12 pl-3 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-black  ' >
        <Play fill='weight' />
      </button>
    </a>
  )
}

export default Banner