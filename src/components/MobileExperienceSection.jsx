"use client"
import { motion } from "framer-motion"

const MobileExperienceItem = ({ position, company, time, address, work, color = "pink" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-12 border-l-2 border-black/50 last:border-l-0 last:pb-0"
    >
      {/* Circle indicator */}
      <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-${color}-500 border-2 border-white`}></div>

      {/* Content */}
      <div>
        <h3 className="text-2xl font-bold">{position}</h3>
        <h4 className={`text-xl font-semibold text-${color}-500 mb-1`}>@{company}</h4>
        <p className="text-lg text-gray-600 mb-3">
          {time} | {address}
        </p>
        <p className="text-lg">{work}</p>
      </div>
    </motion.div>
  )
}

const MobileExperienceSection = () => {
  return (
    <div className="md:hidden w-full px-6 py-16">
      <h2 className="text-5xl font-bold text-center mb-16">Experience</h2>

      <div className="relative">
        <MobileExperienceItem
          position="Software Engineer"
          company="Google"
          time="2022-Present"
          address="Mountain View, CA"
          work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
        />

        <MobileExperienceItem
          position="Intern"
          company="Facebook"
          time="Summer 2021"
          address="Menlo Park, CA."
          work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature."
        />

        <MobileExperienceItem
          position="Software Developer"
          company="Amazon"
          time="2020-2021"
          address="Seattle, WA"
          work="Worked on a team responsible for developing new features for Amazon's e-commerce platform, focusing on improving the user experience and optimizing the checkout process."
        />
      </div>
    </div>
  )
}

export default MobileExperienceSection

