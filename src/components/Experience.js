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
            <h4 className="text-xl md:text-2xl font-semibold text-pink-600">
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
                    className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 relative inline-block dark:text-light"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Experience
                    <motion.span 
                        className="absolute -bottom-4 left-0 w-full h-1 bg-black dark:bg-light"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.7, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg md:text-xl font-light tracking-wide dark:text-light/70"
                >
                    My professional journey
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
                      position="Senior Software Engineer"
                      company="Articence Inc"
                      companyLink="https://articence.com"
                      time="Sept 2024 - Present"
                      address="California (Remote)"
                      work="Handling end to end integrations and stabilizing the development life cycle for the team. Working on CI/CD, optimizing the code, bug fixing and deployment to Production."
                    />
                    <Details
                      position="Full Stack Developer"
                      company="IIT Madras"
                      companyLink="https://www.iitm.ac.in"
                      time="Jan 2024 - April 2024"
                      address="Chennai"
                      work="Entrusted with the development of a website for students and mentors on scale. Developed and deployed the application from scratch."
                    />
                    <Details
                      position="Assistant Backend Engineer"
                      company="Ascendeum Pvt Ltd"
                      companyLink="#"
                      time="May 2023 - Jan 2024"
                      address="Delhi"
                      work="Took responsibility to fix various bugs and optimizing the api performance for scale improving the overall efficiency by 15%"
                    />
                    <Details
                      position="Python Developer"
                      company="NSPlus Technologies Pvt Ltd"
                      companyLink="#"
                      time="Oct 2021 - April 2023"
                      address="Bangalore"
                      work="Tasked with full-stack development of a resume matching algorithm for a specified JD in one project and integration of a backend API in another."
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience