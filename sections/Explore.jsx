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
              <div className='max-w-[300px]'>
                <Card
                  className="border-none" key={item.id}
                >
                  <CardHeader className="p-0 m-0 ">
                    <div className='items-start'>
                      <Image
                        alt="Woman listing to music"
                        className="object-contain border-none"
                        radius='none'
                        src={item.image}

                        isZoomed

                      />
                    </div>

                  </CardHeader>
                  <CardBody className=''>
                    <div className='flex flex-col gap-4'>
                      <div className='flex flex-row justify-between h-8 gap-3'>
                        <b className='w-60'>{item.name}</b>
                        <p className="text-[#F85E9F] font-bold">{item.price}</p>
                      </div>
                      <p className='text-small text-gray-600'>{item.location}</p>
                      <p className='text-[#FF5722] font-extrabold'>{item.rating}</p>
                    </div>

                  </CardBody>



                </Card>
              </div>

            ))}
          </div>



        </motion.div>
      </motion.div>

    </section>
  )
}
export default Explore