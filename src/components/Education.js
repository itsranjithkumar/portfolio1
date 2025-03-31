import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'


const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["center end", "center center"] });

    return <li  ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <figure className='absolute left-0.5 stroke-black'>
            <svg className='rotate-90' width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" className='stroke-pink-500 stroke-1 fill-none'/>
                <motion.circle cx="75" cy="50" r="20" className='stroke-1 fill-white'
                style={{
                    pathLength: scrollYProgress
                }}
                />
                <circle cx="75" cy="50" r="10" className='animate-pulse stroke-1 fill-pink-500'/>
            </svg>
        </figure>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>{type}</h3>
            <span className='capitalize font-medium text-black/75'>{time} | {place}</span>
            <p className='font-medium w-full'>{info}</p>
        </motion.div>
    </li>
    
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
    <h2 className='font-bold text-8xl mb-32 w-full text-center ' >Education</h2>

    <div className='w-[75%] mx-auto relative'>

        <motion.div 
        style={{scaleY: scrollYProgress}}
        ref={ref} className='absolute left-9.5 top-0 w-[4px] h-full bg-black origin-top'>

        </motion.div>
      <ul className='w-full flex flex-col items-start justify-between ml-4 pl-1'>
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