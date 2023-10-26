'use client'

import { motion } from 'framer-motion'
import styles from '../styles'

import { fadeIn, planetVariants, staggerContainer } from '../utils/motion'
import { BestServices, StarSteps, TitleText, TypingText } from '@/components'
import { bestServices } from '@/constants'

const WhatsNew = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: 'false', amount: 0.25 }}
        className={`${styles.innerWidth} lg:flex-row flex-col gap-8 mx-auto flex`}>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className='flex-1 flex justify-center flex-col'>
          <TitleText title={<>Key Features</>} textStyle="text-[#F85E9F] uppercase md:text-[20px] text-[20px]" />
          <TitleText title={<>We offer best services</>} textStyle="  md:text-[50px] text-[20px]" />
          <p className='text-gray-600'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
            from 45 BC.</p>

          <div className='mt-[48px] flex flex-col justify-between gap-[24px]'>

            {bestServices.map((services, index) => (
              <BestServices key={services.title}
                {...services}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants('right')}
          className={`flex-[0.75] ${styles.flexStart}`}
        >

          <div className="w-[300px] h-[500px] absolute -top-14 left-0  rounded-full  p-2">
            <img
              src="/services/activity_1.jpg"
              alt="Image 1"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="w-[250px] h-[350px] absolute top-44 left-48 border-[18px] border-white rounded-full ">
            <img
              src="/services/activity_2.jpg"
              alt="Image 2"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className='absolute  w-[230px] p-1  top-11 left-48 bg-white rounded-full shadow-md'>
            <div className='relative flex flex-row items-center justify-center mx-auto gap-2'>

              <img src="/services/map.png"
                alt="discount"
                className='w-30 h-30 object-contain' />
              <p className='font-bold'>Paradise on Earth</p>

            </div>

          </div>






        </motion.div>

      </motion.div>

    </section >
  )
}

export default WhatsNew