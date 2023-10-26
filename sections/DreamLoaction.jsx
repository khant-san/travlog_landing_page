'use client'
import { motion } from 'framer-motion'
import styles from '../styles'
import { fadeIn, staggerContainer, textVariant } from '../utils/motion'
import { TitleText } from '@/components';
import { visitData } from '@/constants';
import { Card, CardBody } from '@nextui-org/react'

const DreamLoaction = () => {
    return (

        <section className={`${styles.yPaddings} `}>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: 'false', amount: 0.25 }}
                className={`${styles.innerWidth} lg:flex-row flex-col flex gap-16`}>
                <motion.div
                    variants={fadeIn("right", "tween", 0.2, 1)}
                    className={`flex ${styles.flexCenter} relative left-0`}
                >

                    <div className="left-0 rounded-s-full w-[750px] h-[400px] bg-[#FACD49] " dir="rtl">
                        <div className='absolute -top-[10px] w-[600px] h-[550px]'>
                            <div className='absolute -top-[40px] w-[100px] h-[100px] bg-gradient-to-r from-pink-500  via-purple-500 to-indigo-500 rounded-full border backdrop-blur-xl blur-sm' />
                            <img src="/dreamLocation/girl.png"
                                alt="girl"
                                className='w-full h-full object-contain' />

                        </div>


                        <div className='absolute  w-[230px] p-1 bg-white rounded-full shadow-md'>
                            <div className='relative flex flex-row items-center justify-center mx-auto gap-2'>
                                <p className='font-bold'>Discounted Price</p>
                                <img src="/dreamLocation/discount.png"
                                    alt="discount"
                                    className='w-30 h-30 object-contain' />

                            </div>

                        </div>
                        <div className='absolute -right-5 top-36 w-[30px] h-[30px] bg-[#FACD49] rounded-full blur-sm' />

                        <div className='absolute left-48 top-20 w-[30px] h-[30px] bg-gradient-to-r from-pink-500  via-purple-500 to-indigo-500 rounded-full border  blur-sm' />
                        <div className='absolute right-44 top-52 w-[15px] h-[15px] bg-[#FF5722] rounded-full backdrop-blur-sm blur-sm' />
                        <div className='absolute right-20 bottom-52 w-[30px] h-[30px] bg-[#FF5722] rounded-full backdrop-blur-sm blur-sm' />
                    </div>




                </motion.div>
                <motion.div
                    variants={fadeIn("left", "tween", 0.2, 1)}
                    className='flex-1 flex justify-center flex-col gap-3 '>
                    <TitleText title={<>Travel Point</>} textStyle="text-[#F85E9F] uppercase md:text-[20px] text-[20px]" />
                    <TitleText title={<>We helping you find your dream location</>} textStyle="  md:text-[50px] text-[20px]" />
                    <p className='text-gray-600'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                    <div className="gap-2 grid grid-cols-2 sm:grid-cols-2">
                        {visitData.map((item, index) => (
                            <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                                <CardBody className="overflow-visible gap-6 justify-center items-center">
                                    <p className="text-[#FF5722] font-extrabold">{item.count}</p>
                                    <b className='font-normal'>{item.title}</b>

                                </CardBody>

                            </Card>
                        ))}
                        {/* <div className='absolute bottom-40 right-24 w-[200px] h-[200px]'>
                            <img src="/dreamLocation/icon.png"
                                alt="icon"
                                className='w-full h-full object-contain' />
                        </div> */}
                    </div>

                </motion.div>




            </motion.div>

        </section>
    )
}

export default DreamLoaction