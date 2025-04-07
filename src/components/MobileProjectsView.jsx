"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import AnimatedText from "@/components/AnimatedText"
import { GithubIcon } from "@/components/Icons"

const MobileProject = ({ title, type, img, link, github, summary }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mb-8 flex flex-col items-center justify-center rounded-2xl 
      border-[3px] border-solid border-black bg-white p-4
      shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
    >
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <Image src={img || "/placeholder.svg"} alt={title} className="w-full h-auto" priority sizes="100vw" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-pink-500 font-medium text-lg">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2 w-full">
          <h2 className="my-2 text-xl font-bold">{title}</h2>
        </Link>
        {summary && <p className="my-2 font-medium text-black">{summary}</p>}
        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
          <Link href={link} target="_blank" className="text-lg font-semibold underline">
            Visit
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

const MobileFeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mb-12 flex flex-col items-center justify-center rounded-2xl 
      border-[3px] border-solid border-black bg-white p-4
      shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
    >
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <Image src={img || "/placeholder.svg"} alt={title} className="w-full h-auto" priority sizes="100vw" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-pink-500 font-medium text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2 w-full">
          <h2 className="my-2 text-2xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-black">{summary}</p>
        <div className="mt-4 flex items-center justify-start gap-4">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link href={link} target="_blank" className="rounded-lg bg-black text-white py-2 px-6 text-lg font-semibold">
            Visit Project
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

const MobileProjectsView = ({ featuredProjects, projects }) => {
  return (
    <div className="md:hidden w-full px-4 py-8">
      <AnimatedText text="Imagination Trumps Knowledge!" className="mb-8 !text-4xl" />

      <div className="w-full">
        {featuredProjects.map((project, index) => (
          <MobileFeaturedProject
            key={index}
            title={project.title}
            type={project.type}
            summary={project.summary}
            link={project.link}
            github={project.github}
            img={project.img}
          />
        ))}

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <MobileProject
              key={index}
              title={project.title}
              type={project.type}
              summary={project.summary}
              link={project.link}
              github={project.github}
              img={project.img}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileProjectsView

