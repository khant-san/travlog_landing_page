'use client'

import { motion } from 'framer-motion'
import styles from '../styles'

import { staggerContainer } from '../utils/motion'
import { InsightCard, StarSteps, TitleText, TypingText } from '@/components'
import { insights } from '@/constants'

const Insights = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: 'false', amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex  flex-col gap-8 `}>
        <TypingText title="Inshight" textStyle="text-center" />
        <TitleText title={<>Inshight about metaverse.</>} textStyle="text-center" />
        <div className='mt-[50px] flex flex-col gap-[30px]'>
          {insights.map((insight, index) => (
            <InsightCard
              key={`inshight-${index}`}
              {...insight}
              index={index + 1} />
          ))}
        </div>

      </motion.div>
    </section>
  )
}

export default Insights