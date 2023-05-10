'use client';
import React from 'react'
import { ChevronLeft, ChevronRight, } from 'lucide-react';

const ChevronButtons = () => {
  return (
    <div className='flex items-center gap-4' >

      <button className=' rounded-full bg-black/40 p-2 hover:bg-black'>
        <ChevronLeft />
      </button>
      <button className=' rounded-full bg-black/40 p-2 hover:bg-black'>
        <ChevronRight />
      </button>
    </div>
  )
}

export default ChevronButtons