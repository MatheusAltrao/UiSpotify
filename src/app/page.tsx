

import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import BannerMobile from '../components/BannerMobile'
import Card from '../components/Card'
import ChevronButtons from '../components/ChevronButtons'
import Slide from '../components/Slide'


export default function Home() {
  return (

    <div className="h-screen flex flex-col overflow-hidden md:overflow-y-auto" >

      <div className="flex flex-1 gap-2   " >

        <Sidebar />

        <main className="  md:flex-1 p-3 w-full   " >
          <ChevronButtons />

          <h1 className='font-bold text-xl md:text-2xl mt-4 ' >Good Afternoon</h1>

          <div className=' hidden md:grid grid-cols-3 gap-4 mt-4' >
            <Banner />
            <Banner />
            <Banner />
            <Banner />
            <Banner />
            <Banner />
          </div>

          <div className='grid md:hidden grid-cols-2 gap-4 mt-4' >
            <BannerMobile />
            <BannerMobile />
            <BannerMobile />
            <BannerMobile />
          </div>

          <div className='flex items-center justify-between  mt-10 ' >
            <h2 className='font-bold text-lg md:text-2xl hover:underline ' >Made for Matheus</h2>
            <p className='text-zinc-300 text-xs md:text-xl font-semibold' >Show All</p>
          </div>


          <div className=' hidden md:flex items-center justify-start flex-wrap    gap-4 mt-4' >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>


          <div>
            <Slide />

            <div className='flex items-center justify-between  mt-10 md:hidden ' >
              <h2 className='font-bold text-lg md:text-2xl hover:underline ' >Brazil is listening!</h2>
            </div>


            <Slide />
          </div>









        </main>
      </div >

      <Footer />
    </div >
  )
}
