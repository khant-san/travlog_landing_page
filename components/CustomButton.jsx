'use client';
import React from 'react'
import { Button } from '@nextui-org/react'
import Image from 'next/image';
const CustomButton = ({ name, containerStyle, handleClick, btnType, textStyle, rightIcon }) => {

    return (
        <Button

            disabled={false}
            type={btnType || "button"}
            className={`rounded-full border-0 ${containerStyle}`}
            onClick={handleClick} >
            <span className={`flex-1 ${textStyle}`}>
                {name}
            </span>
            {rightIcon && (
                <div className='relative w-6 h-6'>
                    <Image src={rightIcon}
                        alt="right"
                        fill
                        className='object-contain' />
                </div>
            )}
        </Button >
    )
}

export default CustomButton