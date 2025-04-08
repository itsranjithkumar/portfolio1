"use client"
import { motion } from "framer-motion"

const MobileExperienceItem = ({ position, company, time, address, work }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-12 border-l-2 border-black/50 last:border-l-0 last:pb-0"
    >
      {/* Circle indicator */}
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-pink-600 border-2 border-white"></div>

      {/* Content */}
      <div>
        <h3 className="text-2xl font-bold">{position}</h3>
        <h4 className="text-xl font-semibold text-pink-600 mb-1">
            {company}
        </h4>
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
          position="Senior Software Engineer"
          company="Articence Inc"
          time="Sept 2024 - Present"
          address="California (Remote)"
          work="Handling end to end integrations and stabilizing the development life cycle for the team. Working on CI/CD, optimizing the code, bug fixing and deployment to Production."
        />

        <MobileExperienceItem
          position="Full Stack Developer"
          company="IIT Madras"
          time="Jan 2024 - April 2024"
          address="Chennai"
          work="Entrusted with the development of a website for students and mentors on scale. Developed and deployed the application from scratch."
        />

        <MobileExperienceItem
          position="Assistant Backend Engineer"
          company="Ascendeum Pvt Ltd"
          time="May 2023 - Jan 2024"
          address="Delhi"
          work="Took responsibility to fix various bugs and optimizing the api performance for scale improving the overall efficiency by 15%"
        />

        <MobileExperienceItem
          position="Python Developer"
          company="NSPlus Technologies Pvt Ltd"
          time="Oct 2021 - April 2023"
          address="Bangalore"
          work="Tasked with full-stack development of a resume matching algorithm for a specified JD in one project and integration of a backend API in another."
        />
      </div>
    </div>
  )
}

export default MobileExperienceSection

