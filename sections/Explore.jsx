'use client'

import { motion } from 'framer-motion'
import styles from '../styles'

import { fadeIn, staggerContainer } from '../utils/motion'
import { TitleText, DescriptionText } from '@/components'
import { explore } from '../constants'
import { Avatar, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react'



const Explore = () => {

  return (
    <section
      className={`${styles.paddings} flex flex-col gap-4`} id="explore" >

      <div className={`${styles.innerWidth} mx-auto flex flex-row`}>
        <div className='flex flex-col justify-center'>
          <TitleText title={<>Top Destination</>} textStyle="text-[#F85E9F]  md:text-[30px] text-[25px] uppercase " />
          <TitleText title={<>Explore Top Destination</>} textStyle=" md:text-[40px] text-[30px]" />

        </div>
        <div className='flex flex-row justify-center'>

        </div>

      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-row`}>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <div className='overflow-visible flex flex-row gap-6'>


            {explore.map((item, index) => (
              <Card radius="lg"
                className="border-none" >
                <Image
                  alt="Woman listing to music"
                  className="object-cover"
                  height={200}
                  src={item.image}
                  width={200}
                />
                <CardFooter className="text-small justify-between">
                  <b>{item.name}</b>
                  <p className="text-default-500">{item.rating}</p>
                </CardFooter>


              </Card>
            ))}
          </div>



        </motion.div>
      </motion.div>

    </section>
  )
}
export default Explore