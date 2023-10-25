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
                <div className='absolute left-5 top-0 w-14'>
                    <img src='/company/arrow.png' alt='arrow'
                        className='w-full h-full object-contain' />
                </div>

                <div className='absolute flex flex-row justify-between gap-32 '>

                    <img src='/company/airbnb.png' alt='airnub'
                        className='w-full h-full object-contain' />
                    <img src='/company/booking.png' alt='booking'
                        className='w-full h-full object-contain' />
                    <img src='/company/expedia.png' alt='expedia'
                        className='w-full h-full object-contain' />
                    <img src='/company/rbitz.png' alt='rbitz'
                        className='w-full h-full object-contain' />
                    <img src='/company/tripadvisor.png' alt='rbitz'
                        className='w-full h-full object-contain' />
                </div>


            </motion.div>
        </section>
    )
}

export default Partnership