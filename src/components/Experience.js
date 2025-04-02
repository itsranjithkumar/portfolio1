import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'


const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between'>
        <LiIcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className="text-3xl md:text-4xl font-bold">{position}</h3>
            <h4 className="text-xl md:text-2xl font-semibold text-black/75">
                {company}
            </h4>
            <span className="text-base md:text-lg font-medium text-black/60">
                {time} | {address}
            </span>
            <p className="text-lg md:text-xl font-medium w-full">
                {work}
            </p>
        </motion.div>
    </li>
    
}

const Experience = () => {
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
                    Experience
                    <motion.span 
                        className="absolute -bottom-4 left-0 w-full h-1 bg-black"
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
                    My professional journey
                </motion.p>
            </div>

            <div className='w-[75%] mx-auto relative'>
                <motion.div 
                    style={{scaleY: scrollYProgress}}
                    ref={ref} 
                    className='absolute left-9 top-0 w-[4px] h-full bg-black origin-top'
                />

                <ul className='w-full flex flex-col items-start justify-between ml-4 pl-1'>
                    <Details
                      position="Software Engineer"
                      company="Google"
                      companyLink="https://google.com"
                      time="2022-Present"
                      address="Mountain View, CA"
                      work="Worked on a team responsible for developing new features for Google's 
                    search engine, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization."
                    />
                    <Details
                      position="Software Engineer"
                      company="Google"
                      companyLink="https://google.com"
                      time="2022-Present"
                      address="Mountain View, CA"
                      work="Worked on a team responsible for developing new features for Google's 
                    search engine, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization."
                    />
                    <Details
                      position="Software Engineer"
                      company="Google"
                      companyLink="https://google.com"
                      time="2022-Present"
                      address="Mountain View, CA"
                      work="Worked on a team responsible for developing new features for Google's 
                    search engine, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization."
                    />
                    <Details
                      position="Software Engineer"
                      company="Google"
                      companyLink="https://google.com"
                      time="2022-Present"
                      address="Mountain View, CA"
                      work="Worked on a team responsible for developing new features for Google's 
                    search engine, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization."
                    />

                </ul>
            </div>

        </div>
    )
}

export default Experience