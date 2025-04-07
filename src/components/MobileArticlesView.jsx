"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import AnimatedText from "@/components/AnimatedText"

const MobileArticle = ({ title, date, img, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mb-8"
    >
      <Link href={link} className="block">
        <div className="relative w-full overflow-hidden rounded-xl border-2 border-solid border-black bg-white p-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
          <div className="flex flex-col">
            <h2 className="mb-2 text-xl font-bold">{title}</h2>
            <span className="text-pink-500 font-semibold">{date}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

const MobileFeaturedArticle = ({ title, summary, time, img, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mb-8"
    >
      <Link href={link} className="block">
        <div className="relative w-full overflow-hidden rounded-xl border-2 border-solid border-black bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
          <div className="w-full">
            <Image src={img || "/placeholder.svg"} alt={title} className="w-full h-auto" priority sizes="100vw" />
          </div>
          <div className="p-4">
            <h2 className="mb-2 text-xl font-bold">{title}</h2>
            <p className="text-sm mb-2">{summary}</p>
            <span className="text-pink-500 font-semibold">{time}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

const MobileArticlesView = ({ featuredArticles, articles }) => {
  console.log('Featured Articles:', featuredArticles);
  console.log('All Articles:', articles);

  if (!featuredArticles || featuredArticles.length === 0) {
    return <div>No featured articles available.</div>;
  }

  if (!articles || articles.length === 0) {
    return <div>No articles available.</div>;
  }

  return (
    <div className="md:hidden w-full px-4 py-8">
      <AnimatedText text="Words Can Change The World!" className="mb-8 !text-4xl" />

      <div className="w-full">
        {featuredArticles.map((article, index) => (
          <MobileFeaturedArticle
            key={index}
            title={article.title}
            summary={article.summary}
            time={article.time}
            link={article.link}
            img={article.img}
          />
        ))}
      </div>

      <h2 className="font-bold text-3xl w-full text-center my-8">All Articles</h2>

      <div className="w-full">
        {articles.map((article, index) => (
          <MobileArticle key={index} title={article.title} date={article.date} link={article.link} img={article.img} />
        ))}
      </div>
    </div>
  );
}

export default MobileArticlesView
