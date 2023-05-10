'use client';
import React from 'react'
import Image from 'next/image';

const CardMobile = () => {
  return (
    <a href='#' className=' w-full h-full  ' >
      <Image className='w-full rounded-md' width={120} height={120} src='/Album.jpg' alt='Foto do album' />
      <div className='flex justify-start flex-col mt-2' >
        <strong className='font-medium text-[12px] ' >Night Visions</strong>
        <span className='font-medium text-[12px]  text-zinc-400 ' >Imagine Dragons</span>
      </div>


    </a>
  )
}

export default CardMobile