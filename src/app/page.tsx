
import Image from 'next/image';

import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Card from '../components/Card'
import ChevronButtons from '../components/ChevronButtons'

export default function Home() {
  return (

    <div className="h-screen flex flex-col" >

      <div className="flex flex-1 gap-4  " >

        <Sidebar />

        <main className="flex-1 p-6" >
          <ChevronButtons />

          <h1 className='font-bold text-3xl mt-10' >Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4' >
            <Banner />
            <Banner />
            <Banner />
            <Banner />
            <Banner />
            <Banner />
          </div>

          <div className='flex items-center justify-between  mt-10 ' >
            <h2 className='font-bold text-2xl hover:underline ' >Made for Matheus Altrão</h2>
            <p className='text-zinc-300 text-xl font-semibold' >Show All</p>
          </div>


          <div className='flex items-center justify-start flex-wrap    gap-4 mt-4' >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

          </div>

        </main>
      </div >

      <Footer />
    </div >
  )
}
