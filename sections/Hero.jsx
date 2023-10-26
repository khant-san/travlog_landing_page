'use client'
import { motion } from 'framer-motion'
import styles from '../styles'
import { fadeIn, staggerContainer, textVariant } from '../utils/motion'
import { CustomButton, TitleText } from '@/components';


const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} lg:flex-row flex-col gap-8 mx-auto flex`}>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className='flex-[0.5] flex justify-center flex-col'>
        <CustomButton name="Explore the world!" containerStyle="bg-white w-60" handleClick="" btnType="" textStyle="text-[#F85E9F]" rightIcon="/work.svg" />
        <TitleText title={<>Travel <sapn className='text-[#F85E9F] ' >top destination</sapn> of the world</>} textStyle=" md:text-[64px] text-[20px]" />
        <p>We always make our customer happy by providing
          as many choices as possible </p>
        <div className='mt-[48px] flex flex-wrap justify-start gap-[20px]'>
          <CustomButton name="Get Started" containerStyle="bg-[#5D50C6]" handleClick="" btnType="" textStyle="text-white " rightIcon="" />
          <CustomButton name="Watch Demo" containerStyle="bg-white hover:bg-[#5D50C6]" handleClick="" btnType="" textStyle="hover:text-white" rightIcon="/play-circle.svg" />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className={`flex-1 ${styles.flexCenter} relative`}
      >
        <div className='absolute top-0 w-full h-[240px]'>
          <img src="/layer.png"
            alt="layer"
            className='w-full h-full object-contain' />
        </div>

        <div className='absolute top-12 left-40 w-[200px] h-[240px] p-[6px] rounded-5'>
          <img src="Rectangle 1.png"
            alt='image1'
            className='w-full h-full object-contain' />

        </div>

        <div className='absolute -bottom-[59px] left-40 w-[200px] h-[240px] p-[6px] rounded-5'>
          <img src="Rectangle 2.png"
            alt='image2'
            className='w-full h-full object-contain' />

        </div>
        <div className='absolute top-[10rem] left-[22rem] w-[300px] h-[340px] p-[6px] rounded-5'>
          <img src="Rectangle 3.png"
            alt='image3'
            className='w-full h-full object-contain' />

        </div>
        <div className='absolute left-20 top-[16rem] rounded-full w-[100px] h-[100px]'>
          <img src="tele.svg"
            alt='tele'
            className='w-50 h-50 object-contain' />
        </div>
        <div className='absolute right-20 bottom-[1rem] rounded-full w-[100px] h-[100px]'>
          <img src="tele.svg"
            alt='explore'
            className='w-50 h-50 object-contain' />
        </div>
        <div className='absolute right-[20rem] -bottom-[6rem] rounded-full w-[100px] h-[100px]'>
          <img src="user.svg"
            alt='user'
            className='w-50 h-50 object-contain' />
        </div>
      </motion.div>



    </motion.div>

  </section>
);


export default Hero