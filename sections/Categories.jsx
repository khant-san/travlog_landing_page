'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles'

import { fadeIn, staggerContainer } from '../utils/motion'
import { TitleText, DescriptionText } from '@/components'
import { services } from '../constants'
import { Avatar, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react'

const Categories = () => {
    return (
        <section
            className={`${styles.paddings} `} id="categories">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-3`}>
                <motion.div
                    variants={fadeIn("left", "tween", 0.2, 1)}
                    className='flex-[0.55] flex justify-center flex-col'>
                    <TitleText title={<>SERVICES</>} textStyle="text-[#F85E9F]  md:text-[30px] text-[25px] " />
                    <TitleText title={<>Our top value categories for you</>} textStyle=" md:text-[40px] text-[30px]" />


                </motion.div>
                <motion.div
                    variants={fadeIn("left", "tween", 0.2, 1)}
                    className={`flex-1 ${styles.flexCenter}`}
                >
                    <div className='overflow-visible flex lg:flex-row flex-col gap-6'>


                        {services.map((item, index) => (
                            <Card className="p-4 lg:w-[250px] lg:min-h-[300px] w-[500px] min-h-[100px]" key={item.title}>
                                <CardHeader className="pb-0 pt-2 px-4 lg:flex-col flex-row gap-3 items-center justify-center mb-5">
                                    <Avatar src={item.icon} />
                                    {/* <TitleText title={item.title} textStyle="text-[20px] flex justify-center mb-5 lg:hidden" /> */}
                                </CardHeader>
                                <CardBody className="overflow-visible py-1">
                                    <TitleText title={item.title} textStyle="text-[20px] flex justify-center mb-5" />
                                    <DescriptionText title={item.description} textStyle="text-[15px] decoration-0 flex text-center text-secondary-white" />

                                </CardBody>


                            </Card>
                        ))}
                    </div>



                </motion.div>
            </motion.div>

        </section>
    )
}

export default Categories