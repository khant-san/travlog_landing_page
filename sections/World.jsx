'use client'

import { motion } from 'framer-motion'
import styles from '../styles'

import { fadeIn, staggerContainer } from '../utils/motion'
import { StarSteps, TitleText, TypingText } from '@/components'


const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: 'false', amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex  flex-col gap-8 `}>
        <TypingText title="| People on the World" textStyle="text-center" />
        <TitleText title={<>Track around the world and invite them to play together.</>} textStyle="text-center" />
        <motion.div variants={fadeIn("up", "tween", 0.3, 1)}
          className='relative w-full h-[550px] mt-[68px] flex'>
          <img src="/map.png"
            alt="map"
            className='w-full h-full object-cover' />
          <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
            <img src="people-01.png"
              alt='pepole'
              className='w-full h-full object-contain' />
          </div>
          <div className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
            <img src="people-02.png"
              alt='pepole'
              className='w-full h-full object-contain' />
          </div>
          <div className='absolute top-1/2 left-[46%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
            <img src="people-03.png"
              alt='pepole'
              className='w-full h-full object-contain' />
          </div>
          <div className='absolute bottom-20 left-[15%] w-[250px] h-[200px] sm:w-[150px] sm:h-[125px] p-[6px] rounded-[24px] bg-[#5d6680]'>

            <div className={`flex justify-center items-center w-full h-full`}>
              <img src='/card-2.png'
                alt='headset'
                className='absolute object-contain rounded-[24px] w-[93%]' />
              <p className='absolute font-normal text-[16px] md:text-[13px] sm:text-[8px] text-white bottom-4 z-10'>The Upside Down</p>
            </div>
          </div>
          <div className='absolute top-5 right-[30%] w-[250px] h-[200px] sm:w-[150px] sm:h-[125px] p-[6px] rounded-[24px] bg-[#5d6680]'>


            <div className={`flex justify-center items-center w-full h-full`}>
              <img src='/card-1.png'
                alt='headset'
                className='absolute object-contain rounded-[24px] w-[93%]' />
              <p className='absolute font-normal text-[16px] md:text-[13px] sm:text-[8px] text-white bottom-4 z-10'>Hawkins Lab</p>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </section>
  )
}

export default World