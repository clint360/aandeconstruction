// src/pages/index.tsx
'use client';

import { BreadcrumbImage } from '@/core/components/molecules/BreadcrumbImage';
import ProjectCard from '@/core/components/molecules/ProjectCard';
import Footer from '@/core/components/organisms/Footer';
import Navbar from '@/core/components/organisms/Navbar';
import React from 'react';
import { motion } from 'framer-motion';// Import project data
import { projectData } from '@/core/data/projects';

function Page() {
  return (
    <div>
      <Navbar />
      <BreadcrumbImage title="Our Projects" subtitle="Feel free to reach out to us" />
      
      <motion.h2
        className="text-4xl font-semibold text-[#FF9A25] bg-white text-center p-8"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        Some Of Our Works
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4 p-8 bg-gray-100">
        {/* Map over projectData to dynamically render ProjectCards */}
        {projectData.map((project, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4">
            <ProjectCard
              title={project.title}
              location={project.location}
              images={project.images}
            />
          </div>
        ))}
      </div>
      
      <Footer />
    </div>
  );
}

export default Page;
