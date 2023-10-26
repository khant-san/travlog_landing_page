'use client';
import React from 'react'
import styles from '@/styles'

const BestServices = ({ icon, title, description }) => {
    return (
        <div className='flex flex-row gap-5 items-center '>
            <div className={`${styles.flexCenter} lg:w-[70px] lg:h-[70px] w-[50px] h-[50px] rounded-[24px] justify-center items-center `}>
                <img src={icon}
                    alt="icon"
                    className='w-full h-full object-contain' />

            </div>
            <div className='flex flex-col justify-center gap-0 '>
                <h1 className='mt-[5px] font-bold lg:text-[20px] text-[15px] leading-[20px]'>{title}</h1>
                <p className='flex-1 font-normal lg:text-[18px] text-[12px] text-[#B0B0B0] leading-[32px]'>{description}</p>
            </div>

        </div>
    )
}

export default BestServices