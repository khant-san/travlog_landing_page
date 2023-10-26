'use client'
import { motion } from 'framer-motion'
import styles from '../styles'
import { fadeIn, staggerContainer, textVariant } from '../utils/motion'
import { CustomButton, TitleText } from '@/components';


const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`} id="home">

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
        className={`flex-1 ${styles.flexCenter} relative lg:pt-0 pt-40 `}
      >
        <div className='absolute top-0 lg:w-full lg:h-[240px]  w-[400px] h-[240px] '>
          <img src="/layer.png"
            alt="layer"
            className='w-full h-full object-contain' />
        </div>

        <div className='absolute lg:top-12 lg:left-40 top-2 left-1 lg:w-[200px] lg:h-[240px] p-[6px] w-[100px] h-[140px] rounded-5'>
          <img src="Rectangle 1.png"
            alt='image1'
            className='w-full h-full object-contain' />

        </div>

        <div className='absolute -bottom-[59px] lg:left-40 left-28 lg:w-[200px] lg:h-[240px] w-[100px] h-[140px] p-[6px] rounded-5'>
          <img src="Rectangle 2.png"
            alt='image2'
            className='w-full h-full object-contain' />

        </div>
        <div className='absolute lg:top-[10rem] top-[5rem] lg:left-[22rem] right-0 lg:w-[300px] lg:h-[340px] w-[150px] h-[120px] p-[6px] rounded-5'>
          <img src="Rectangle 3.png"
            alt='image3'
            className='w-full h-full object-contain' />

        </div>
        <div className='absolute lg:left-20 left-10 lg:top-[16rem] top-[7rem] rounded-full lg:w-[100px] lg:h-[100px] w-20 h-20'>
          <img src="tele.svg"
            alt='tele'
            className='w-50 h-50 object-contain' />
        </div>
        <div className='absolute lg:right-20 right-10 lg:bottom-[1rem] top-4 rounded-full lg:w-[100px] lg:h-[100px] w-20 h-20'>
          <img src="tele.svg"
            alt='explore'
            className='w-50 h-50 object-contain' />
        </div>
        <div className='absolute lg:right-[20rem] lg:-bottom-[6rem] bottom-[6rem] rounded-full lg:w-[100px] lg:h-[100px] w-20 h-20'>
          <img src="user.svg"
            alt='user'
            className='w-50 h-50 object-contain' />
        </div>
      </motion.div>



    </motion.div>

  </section>
);


export default Hero