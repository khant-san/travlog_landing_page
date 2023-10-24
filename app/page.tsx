
'use client'
import { About, Categories, Explore, Feedback, GetStarted, Hero, Insights, Partnership, WhatsNew, World } from '../sections'


export default function Home() {
  return (
    <div className='bg-primary-black overflow-hidden'>

      <Hero />
      <div className='relative'>
        <Partnership />
        <Categories />
        {/* <div className='gradient-04 z-0' /> */}
        <Explore />
      </div>


      <div className='relative'>
        {/* <GetStarted /> */}
        {/* <div className='gradient-04 z-0' /> */}
        {/* <WhatsNew /> */}
      </div>
      {/* <World /> */}
      <div className='relative'>
        {/* <Insights /> */}
        {/* <div className='gradient-04 z-0' /> */}
        {/* <Feedback /> */}
      </div>


    </div>
  )
}
