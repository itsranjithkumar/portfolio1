"use client"
import { motion } from "framer-motion"

const MobileEducationItem = ({ type, time, place, info }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-12 border-l-2 border-black/50 last:border-l-0 last:pb-0"
    >
      {/* Circle indicator */}
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-pink-500 border-2 border-white"></div>

      {/* Content */}
      <div>
        <h3 className="text-2xl font-bold">{type}</h3>
        <p className="text-lg text-gray-600 mb-1">
          {time} | {place}
        </p>
        <p className="text-lg">{info}</p>
      </div>
    </motion.div>
  )
}

const MobileEducationSection = () => {
  return (
    <div className="md:hidden w-full px-6 py-16 dark:bg-dark">
      <h2 className="text-6xl font-bold text-center mb-16 dark:text-light">Education</h2>

      <div className="relative">
        <MobileEducationItem
          type="B.S. in Data Science and Applications"
          time="Jan 2021 - Present"
          place="Indian Institute of Technology, Madras"
          info="CGPA: 8.5/10"
        />

        <MobileEducationItem
          type="B.E. in Mechanical Engineering"
          time="August 2016 - June 2021"
          place="Anna University, Chennai"
          info="CGPA: 7.9/10"
        />
      </div>
    </div>
  )
}

export default MobileEducationSection

