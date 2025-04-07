"use client"
import Head from "next/head"
import Layout from "@/components/Layout"
import AnimatedText from "@/components/AnimatedText"
import Link from "next/link"
import Image from "next/image"
import { GithubIcon } from "@/components/Icons"
import Project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import { motion } from "framer-motion"
import MobileProjectsView from "@/components/MobileProjectsView"

const FramerImage = motion(Image)

// Separate Project component definition
const Project = ({ title, type, img, link, github, summary }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
        border-[3px] border-solid border-black bg-light p-4 md:p-6
        relative shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] 
        hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
        hover:translate-x-[-3px] hover:translate-y-[-3px]
        transition-all duration-300"
    >
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ opacity: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-pink-500 font-medium text-lg md:text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2 w-full">
          <h2 className="my-2 text-xl md:text-2xl font-bold truncate">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-black">{summary}</p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
          <Link href={link} target="_blank" className="text-lg font-semibold  underline">
            Visit
          </Link>
        </div>
      </div>
    </article>
  )
}

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col lg:flex-row items-center justify-between rounded-3xl 
        border-[3px] border-solid border-black bg-white p-6 lg:p-12
        shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
        hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
        hover:translate-x-[-3px] hover:translate-y-[-3px]
        transition-all duration-300"
    >
      <Link href={link} target="_blank" className="w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg">
        <Image src={img || "/placeholder.svg"} alt={title} className="w-full h-auto" />
      </Link>
      <div
        className="w-full lg:w-1/2 flex flex-col items-start justify-between 
                pt-6 lg:pl-6 lg:pt-0"
      >
        <span className="text-pink-500 font-medium text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl lg:text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-black">{summary}</p>
        <div className="mt-2 flex items-center justify-start gap-4">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link href={link} target="_blank" className="rounded-lg bg-black text-white py-2 px-6 text-lg font-semibold">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  // Data for featured projects
  const featuredProjectsData = [
    {
      title: "Crypto Screener Application",
      img: Project1,
      summary:
        "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
      link: "/",
      type: "Featured Project",
      github: "/",
    },
    {
      title: "NFT Marketplace Dashboard",
      img: Project1,
      summary:
        "A comprehensive NFT marketplace dashboard built with Next.js and Ethereum smart contracts. Track your NFT portfolio, browse collections, and monitor market trends in real-time.",
      link: "/",
      type: "Featured Project",
      github: "/",
    },
  ]

  // Data for regular projects
  const projectsData = [
    {
      title: "Weather Forecast App",
      img: Project1,
      summary: "A responsive weather app that provides real-time forecasts and alerts",
      link: "/",
      type: "Project",
      github: "/",
    },
    {
      title: "Task Management System",
      img: Project1,
      summary: "A productivity tool for organizing and tracking personal and team tasks",
      link: "/",
      type: "Project",
      github: "/",
    },
    {
      title: "E-commerce Product Page",
      img: Project1,
      summary: "A modern product page with cart functionality and image gallery",
      link: "/",
      type: "Project",
      github: "/",
    },
    {
      title: "Social Media Dashboard",
      img: Project1,
      summary: "Analytics dashboard for tracking engagement across social platforms",
      link: "/",
      type: "Project",
      github: "/",
    },
  ]

  return (
    <>
      <Head>
        <title>Ranjithkumar | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        {/* Mobile View - Only visible on mobile */}
        <MobileProjectsView featuredProjects={featuredProjectsData} projects={projectsData} />

        {/* Desktop View - Only visible on desktop */}
        <div className="hidden md:block w-full">
          <Layout className="pt-16">
            <AnimatedText
              text="Imagination Trumps Knowledge!"
              className="mb-8 sm:mb-16 !text-4xl sm:!text-6xl md:!text-7xl lg:!text-8xl"
            />
            <div className="grid grid-cols-12 gap-8 md:gap-24 items-center justify-center">
              {featuredProjectsData.map((project, index) => (
                <div key={index} className="col-span-12 flex justify-center">
                  <FeaturedProject
                    title={project.title}
                    img={project.img}
                    summary={project.summary}
                    link={project.link}
                    type={project.type}
                    github={project.github}
                  />
                </div>
              ))}

              {projectsData.map((project, index) => (
                <div key={index} className="col-span-12 md:col-span-6 flex justify-center">
                  <Project
                    title={project.title}
                    img={project.img}
                    summary={project.summary}
                    link={project.link}
                    type={project.type}
                    github={project.github}
                  />
                </div>
              ))}
            </div>
          </Layout>
        </div>
      </main>
    </>
  )
}

export default Projects

