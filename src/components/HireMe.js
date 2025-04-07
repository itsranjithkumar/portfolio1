import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'
import { motion } from 'framer-motion'

const HireMe = ({ className = "" }) => {
  return (
    <div className={`fixed md:absolute ${className}`}>
        <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
            <div className='w-48 h-auto flex items-center justify-center relative'>
                <motion.div
                    animate={{
                        rotate: 360
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="relative"
                >
                    <CircularText className={"fill-dark dark:fill-light"}/>
                </motion.div>

                <Link 
                    href="mailto:abcde@gmail.com" 
                    className='flex items-center justify-center
                             absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                             bg-black text-white dark:bg-white dark:text-black
                             shadow-md border border-solid border-dark dark:border-light
                             w-20 h-20 rounded-full font-semibold
                             hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white
                             transition-colors duration-300'
                >
                    Hire Me
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HireMe