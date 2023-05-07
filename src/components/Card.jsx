import React from 'react'
import Image from 'next/image';
import { Play, } from 'lucide-react';

const Card = () => {
  return (
    <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 group relative transition-colors w-[180px] h[180px]' >
      <Image className='w-full rounded-md' width={120} height={120} src='/Album.jpg' alt='Foto do album' />
      <strong className='font-bold ' >Night Visions</strong>
      <span className='text-sm text-zinc-400 ' >De Spotify</span>

      <button className='p-2 bg-green-400 text-black rounded-full ml-auto mr-8 hover:bg-green-500 items-center justify-center w-12 h-12 pl-3 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-black absolute bottom-20 right-[-10px] ' >
        <Play fill='weight' />
      </button>
    </a>
  )
}

export default Card