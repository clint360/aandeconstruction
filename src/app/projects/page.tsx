'use client'
import { BreadcrumbImage } from '@/core/components/molecules/BreadcrumbImage'
import ProjectCard from '@/core/components/molecules/ProjectCard';
import Footer from '@/core/components/organisms/Footer'
import Navbar from '@/core/components/organisms/Navbar'
import React from 'react'
import { motion } from "framer-motion";

function page() {
  const projectData = {
    title: 'Residential Complex in Yaoundé',
    location: 'Yaoundé, Cameroon',
    images: [
      '/images/bg1.jpg',
      '/images/bg2.jpg',
      '/images/bg3.jpg',
    ],
  };

  return (
    <div>
      <Navbar />
      <BreadcrumbImage title='Our Projects' subtitle='Feel free to reach out to us' />
      <motion.h2
          className="text-4xl font-semibold text-[#FF9A25] bg-white text-center p-8"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          Some Of Our Works
        </motion.h2>
      <div className="flex justify-center  gap-4 p-8 bg-gray-100">
        <ProjectCard
          title={projectData.title}
          location={projectData.location}
          images={projectData.images}
        />
        <ProjectCard
          title={projectData.title}
          location={projectData.location}
          images={projectData.images}
        />
        <ProjectCard
          title={projectData.title}
          location={projectData.location}
          images={projectData.images}
        />
      </div>
      <Footer />
    </div>
  )
}

export default page