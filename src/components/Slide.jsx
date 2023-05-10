'use client';

import React from 'react'
import CardMobile from '../components/CardMobile'

import Flickity from 'react-flickity-component'
const flickityOptions = {
  initialIndex: 1,
  freeScroll: true,
  contain: true,

}

const Slide = () => {



  return (

    <div className=' overflow-hidden md:hidden ' >


      <Flickity
        className={'carousel mt-4 '} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
      >

        <div className='mr-4 w-[120px] '>
          <CardMobile />
        </div>

        <div className='mr-4 w-[120px] '>
          <CardMobile />
        </div>
        <div className='mr-4 w-[120px] '>
          <CardMobile />
        </div>


        <div className='mr-4 w-[120px] '>
          <CardMobile />
        </div>

        <div className='mr-4 w-[120px] '>
          <CardMobile />
        </div>
        <div className='mr-4 w-[120px] '>
          <CardMobile />
        </div>

      </Flickity>

    </div>


  )
}

export default Slide