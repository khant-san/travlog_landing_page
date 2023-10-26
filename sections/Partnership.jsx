'use client'

import { motion } from 'framer-motion'
import styles from '../styles'

import { staggerContainer } from '../utils/motion'
import { InsightCard, TitleText, TypingText } from '@/components'
import { insights } from '@/constants'


const Partnership = () => {
    return (
        <section className={`${styles.paddings} relative z-10`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: 'false', amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col gap-8 `}>
                <div className='absolute left-5 top-0 w-14 hidden lg:block'>
                    <img src='/company/arrow.png' alt='arrow'
                        className='w-full h-full object-contain' />
                </div>

                <div className='absolute lg:flex lg:flex-row justify-between lg:gap-32  grid grid-rows-2 grid-flow-col gap-6 '>

                    <img src='/company/airbnb.png' alt='airnub'
                        className='lg:w-full lg:h-full w-20 h-full object-contain' />
                    <img src='/company/booking.png' alt='booking'
                        className='lg:w-full lg:h-full w-20 h-full object-contain' />
                    <img src='/company/expedia.png' alt='expedia'
                        className='lg:w-full lg:h-full w-20 h-full object-contain' />
                    <img src='/company/rbitz.png' alt='rbitz'
                        className='lg:w-full lg:h-full w-20 h-full object-contain' />
                    <img src='/company/tripadvisor.png' alt='rbitz'
                        className='lg:w-full lg:h-full w-20 h-full object-contain' />
                </div>


            </motion.div>
        </section>
    )
}

export default Partnership