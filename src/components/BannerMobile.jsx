'use client';
import React from 'react'
import Image from 'next/image';

const BannerMobile = () => {
  return (
    <div>
      <a href='' className='bg-white/5 group hover:bg-white/10 transition-colors rounded-sm overflow-hidden h-10 px-1 flex items-center gap-2' >
        <Image width={40} height={40} src='/Album.jpg' alt='Foto do album' />
        <strong className='text-[10px] font-normal' >Image Dragons</strong>
      </a>
    </div>
  )
}

export default BannerMobile