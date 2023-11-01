'use client'

import { motion } from 'framer-motion'
import styles from '../styles'

import { fadeIn, staggerContainer } from '../utils/motion'
import { TitleText, DescriptionText } from '@/components'
import { explore } from '../constants'
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules'



const Explore = () => {

  return (
    <section
      className={`${styles.paddings} flex flex-col gap-4`} id="discover" >

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
        initial="show"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-row`}>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <div className='overflow-visible flex flex-row gap-2'>
            <Swiper


              slidesPerView={3}
              spaceBetween={20}
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 1,
                  spaceBetween: 30
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 3,
                  spaceBetween: 25
                }
              }}
              freeMode={true}
              pagination={{
                clickable: true
              }}
              modules={[FreeMode, Pagination]}
              className='lg:max-w-[950px] max-w-[480px] xs:max-w-[310px]'

            >

              {explore.map((item, index) => (
                <SwiperSlide key={item.id} className='lg:w-[300px] w-[150px] pb-3'>
                  <div className='flex flex-row gap-4 group relative shadow-lg w-100' key={item.id}>
                    <Card
                      className="border-none w-[300px]" id={item.id}
                    >
                      <CardHeader className="p-0 m-0  lg:h-[300px] h-[250px]">
                        <div className='items-start  w-auto' >
                          <Image
                            alt="Woman listing to music"
                            className="object-fill border-none "
                            radius='none'
                            src={item.image}



                            isZoomed

                          />
                        </div>

                      </CardHeader>
                      <CardBody className=''>
                        <div className='flex flex-col lg:gap-4 gap-2'>
                          <div className='flex flex-row justify-between lg:h-8 h-20 gap-3'>
                            <b className='lg:w-60 w-30'>{item.name}</b>
                            <p className="text-[#F85E9F] font-bold">{item.price}</p>
                          </div>
                          <p className='text-small text-gray-600'>{item.location}</p>
                          <p className='text-[#FF5722] font-extrabold'>{item.rating}</p>
                        </div>

                      </CardBody>



                    </Card>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>



        </motion.div>
      </motion.div>

    </section >
  )
}
export default Explore