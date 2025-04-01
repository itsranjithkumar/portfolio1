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
                <h3 className="text-3xl md:text-4xl font-bold">{type}</h3>
                <h4 className="text-xl md:text-2xl font-semibold text-black/75 dark:text-white/75">
                    {place}
                </h4>
                <span className="text-base md:text-lg font-medium text-black/60 dark:text-white/60">
                    {time}
                </span>
                <p className="text-lg md:text-xl font-medium w-full">
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
                    className="text-7xl md:text-8xl font-bold mb-8 relative inline-block"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Education
                    <motion.span 
                        className="absolute -bottom-4 left-0 w-full h-1 bg-black dark:bg-white"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.7, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg md:text-xl font-light tracking-wide"
                >
                    Academic background
                </motion.p>
            </div>

            <div className='w-[75%] mx-auto relative'>
                <motion.div 
                    style={{scaleY: scrollYProgress}}
                    ref={ref} 
                    className='absolute left-9 top-0 w-[4px] h-full bg-black dark:bg-white origin-top'
                />

                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details
                        type="Bachelor Of Science In Computer Science"
                        time="2016-2020"
                        place="Massachusetts Institute Of Technology (MIT)"
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                        Intelligence."
                    />
                    <Details
                        type="Master Of Computer Science"
                        time="2022-Present"
                        place="Stanford University"
                        info="Completed a master's project on deep learning, developing a new neural network architecture for natural 
                        language understanding."
                    />
                    <Details
                        type="Master Of Computer Science"
                        time="2022-Present"
                        place="Stanford University"
                        info="Completed a master's project on deep learning, developing a new neural network architecture for natural 
                        language understanding."
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education