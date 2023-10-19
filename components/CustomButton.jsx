'use client';
import React from 'react'
import { Button } from '@nextui-org/react'
const CustomButton = ({ name, containerStyle, handleClick, btnType, textStyle }) => {
    return (
        <Button
            color='primary'
            disabled={false}
            type={btnType || "button"}
            className={`rounded-full border-0 ${containerStyle}`}
            onClick={handleClick} >
            <span className={`flex-1 ${textStyle}`}>
                {name}
            </span>

        </Button >
    )
}

export default CustomButton