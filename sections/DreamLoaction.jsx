'use client'
import { motion } from 'framer-motion'
import styles from '../styles'
import { fadeIn, staggerContainer, textVariant } from '../utils/motion'
import { TitleText } from '@/components';
import { visitData } from '@/constants';
import { Card, CardBody } from '@nextui-org/react'

const DreamLoaction = () => {
    return (

        <section className={`${styles.yPaddings} `} id='specialDeals'>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: 'false', amount: 0.25 }}
                className={`${styles.innerWidth} lg:flex-row flex-col flex gap-16`}>
                <motion.div
                    variants={fadeIn("right", "tween", 0.2, 1)}
                    className={`flex ${styles.flexCenter} relative lg:left-0 -left-5`}
                >

                    <div className="left-0 rounded-s-full lg:w-[750px] lg:h-[400px] w-[350px] h-[200px] bg-[#FACD49]" dir="rtl">
                        <div className='absolute -top-[10px] lg:w-[600px] lg:h-[550px] w-[300px] h-[270px]'>
                            <div className='absolute -top-[40px] lg:w-[100px] w-[50px] lg:h-[100px]  h-[50px] bg-gradient-to-r from-pink-500  via-purple-500 to-indigo-500 rounded-full border backdrop-blur-xl blur-sm' />
                            <img src="/dreamLocation/girl.png"
                                alt="girl"
                                className='w-full h-full object-contain' />

                        </div>


                        <div className='absolute  lg:w-[250px] w-[130px] lg:px-1 lg:py-3 py-1 bg-white rounded-full shadow-md'>
                            <div className='relative flex flex-row items-center justify-center mx-auto gap-2'>
                                <p className='font-bold lg:text-[15px] text-[10px]'>Discounted Price</p>
                                <img src="/dreamLocation/discount.png"
                                    alt="discount"
                                    className='lg:w-30 lg:h-30 w-5 h-5 object-contain' />

                            </div>

                        </div>
                        <div className='absolute lg:-right-5 right-10 top-36 lg:w-[30px] w-[15px] lg:h-[30px] h-[15px] bg-[#FACD49] rounded-full blur-sm' />

                        <div className='absolute lg:left-48 lg:top-20 right-32 top-10 lg:w-[30px] w-[15px] lg:h-[30px] h-[15px] bg-gradient-to-r from-pink-500  via-purple-500 to-indigo-500 rounded-full border  blur-sm' />
                        <div className='absolute lg:right-44 lg:top-52 bottom-4 w-[15px] h-[15px] bg-[#FF5722] rounded-full backdrop-blur-sm blur-sm' />
                        <div className='absolute lg:right-20 left-20 bottom-52 w-[30px] h-[30px] bg-[#FF5722] rounded-full backdrop-blur-sm blur-sm' />
                    </div>




                </motion.div>
                <motion.div
                    variants={fadeIn("left", "tween", 0.2, 1)}
                    className='flex-1 flex justify-center flex-col gap-3 px-4'>
                    <TitleText title={<>Travel Point</>} textStyle="text-[#F85E9F] uppercase md:text-[20px] text-[20px]" />
                    <TitleText title={<>We helping you find your dream location</>} textStyle="  md:text-[50px] text-[20px]" />
                    <p className='text-gray-600'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                    <div className="lg:gap-2 gap-4 grid grid-cols-2 sm:grid-cols-2">
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