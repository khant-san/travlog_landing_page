'use client'
import { motion } from 'framer-motion'
import styles from '../styles'
import { navVariants } from '../utils/motion'
import { navLinks } from '@/constants'
import { useState } from 'react'
import { CustomButton } from '.'


const Navbar = () => {
  const [active, setActive] = useState();
  return (

    < motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className='absolute w-[50%] inset-0 gradient-06' />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-3`} >
        <h2 className='font-extrabold text-[24px] leading-[30px] text-black'>Travlog</h2>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-gray-950" : "text-gray-500"
                }
                hover:text-gray-950 text-[15px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='flex justify-between gap-2'>
          <CustomButton name="Login" containerStyle="bg-white hover:bg-[#5D50C6]" handleClick="" btnType="" textStyle="hover:text-white" rightIcon="" />
          <CustomButton name="SignUp" containerStyle="bg-[#5D50C6]" handleClick="" btnType="" textStyle="text-white" rightIcon="" />

        </div>
      </div>
    </motion.nav >

  );
}

export default Navbar