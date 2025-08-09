import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'


const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5, type:"spring"}}
                className='w-full'
            >
                <h3 className="text-3xl md:text-4xl font-bold text-black">{type}</h3>
                <h4 className="text-xl md:text-2xl font-semibold text-pink-600 dark:text-pink-400">
                    {place}
                </h4>
                <span className="text-base md:text-lg font-medium text-black/60">
                    {time}
                </span>
                <p className="text-lg md:text-xl font-medium w-full text-black">
                    {info}
                </p>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
    return (
        <div className='my-64'>
            <div className="text-center mb-24">
                <motion.h2 
                    className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 relative inline-block text-black dark:text-light"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Education
                    <motion.span 
                        className="absolute -bottom-4 left-0 w-full h-[2px] bg-black/75 dark:bg-light/75"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.7, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg md:text-xl font-light tracking-wide text-black/60 dark:text-light/60"
                >
                    Academic background
                </motion.p>
            </div>

            <div className='w-[75%] mx-auto relative'>
                <motion.div 
                    style={{scaleY: scrollYProgress}}
                    ref={ref} 
                    className='absolute left-9 top-0 w-[4px] h-full bg-black dark:bg-light origin-top'
                />

                <ul className='w-full flex flex-col items-start justify-between ml-4 pl-1'>
                    <Details
                        type="B.S. in Data Science and Applications"
                        time="Jan 2021 - Present"
                        place="Indian Institute of Technology, Madras"
                        info="CGPA: 8.5/10"
                    />
                    <Details
                        type="B.E. in Mechanical Engineering"
                        time="August 2016 - June 2021"
                        place="Anna University, Chennai"
                        info="CGPA: 7.9/10"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education