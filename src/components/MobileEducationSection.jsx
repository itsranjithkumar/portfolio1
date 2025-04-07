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
    <div className="md:hidden w-full px-6 py-16">
      <h2 className="text-5xl font-bold text-center mb-16">Education</h2>

      <div className="relative">
        <MobileEducationItem
          type="Bachelor Of Science In Computer Science"
          time="2016-2020"
          place="Massachusetts Institute Of Technology (MIT)"
          info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
        />

        <MobileEducationItem
          type="Master Of Computer Science"
          time="2020-2022"
          place="Stanford University"
          info="Completed a master's project on deep learning, developing a new neural network architecture for natural language understanding."
        />

        <MobileEducationItem
          type="Online Coursework"
          time="2022-Present"
          place="Coursera And edX"
          info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering."
        />
      </div>
    </div>
  )
}

export default MobileEducationSection

