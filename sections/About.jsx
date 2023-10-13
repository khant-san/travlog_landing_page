'use client'
import { motion } from 'framer-motion'
import { TypingText } from '@/components'
import styles from '../styles'
import { fadeIn, staggerContainer } from '../utils/motion'

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div
      className='gradient-02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
      <TypingText title="| About Metaversus" textStyle="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'>
        <span className='font-extrabold text-white'>Lorem ipsum</span> dolor sit amet consectetur adipisicing elit. Ad perspiciatis ea sit id ex, exercitationem, voluptatem quasi a assumenda aliquam accusamus obcaecati nostrum?
        <span className='font-extrabold text-white'> Iusto explicabo</span> eius beatae eveniet voluptas expedita?

      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src='/arrow-down.svg'
        alt='arrow down'
        className='w-[18px] h-[18px] object-contain mt-[28px]'></motion.img>
    </motion.div>

  </section>
)

export default About