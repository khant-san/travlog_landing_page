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
        className={`${styles.innerWidth} lg:flex-row flex-col gap-20 mx-auto flex`}>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className='flex-1 flex justify-center flex-col'>
          <TitleText title={<>Key Features</>} textStyle="text-[#F85E9F] uppercase md:text-[20px] text-[20px]" />
          <TitleText title={<>We offer best services</>} textStyle="  md:text-[50px] text-[20px]" />
          <p className='text-gray-600'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
            from 45 BC.</p>

          <div className='mt-[48px] flex flex-col justify-center gap-[24px]'>

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
          <div className='relative lg:h-[500px] h-[250px]'>
            <div className="lg:w-[300px] w-[200px] lg:h-[500px] h-[300px] absolute -top-14 left-0  rounded-full  p-2">
              <img
                src="/services/activity_1.jpg"
                alt="Image 1"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="lg:w-[250px] w-[160px] lg:h-[350px] h-[250px] absolute lg:top-44 top-16 left-28 lg:left-48 border-[18px] border-white rounded-full ">
              <img
                src="/services/activity_2.jpg"
                alt="Image 2"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className='absolute  lg:w-[230px] w-[160px] px-1 py-2  lg:top-11 lg:left-48 left-24 bg-white rounded-full shadow-md'>
              <div className='relative flex flex-row items-center justify-center mx-auto lg:gap-1'>

                <img src="/services/map.png"
                  alt="discount"
                  className='lg:w-30 lg:h-30 w-10 h-5 object-contain' />
                <p className='font-bold lg:text-[15px] text-[12px]'>Paradise on Earth</p>

              </div>

            </div>

          </div>







        </motion.div>

      </motion.div>

    </section >
  )
}

export default WhatsNew