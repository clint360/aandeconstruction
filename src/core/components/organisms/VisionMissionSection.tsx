'use client'
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function VisionMissionSection() {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Title Section */}
        <motion.h2
          className="text-4xl font-semibold text-[#FF9A25] mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          Our Vision, Mission & Values
        </motion.h2>

        {/* Vision */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg mb-10"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold text-[#FF9A25] mb-4">Our Vision</h3>
          <p className="text-lg text-gray-700">
            Our vision is to be the preferred construction partner in Cameroon and beyond, recognized for our innovative approach,
            commitment to quality, and dedication to delivering sustainable solutions. We aspire to build lasting relationships with our clients, 
            creating structures that stand the test of time.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg mb-10"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold text-[#FF9A25] mb-4">Our Mission</h3>
          <p className="text-lg text-gray-700">
            We are driven by a mission to provide high-quality construction services that meet the diverse needs of our clients. 
            Whether it’s residential, commercial, or industrial projects, we aim to deliver each project with precision, on time, and within budget. 
            We are committed to ensuring safety, sustainability, and excellence in every aspect of our work.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="bg-white p-6 shadow-lg rounded-lg text-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold text-[#FF9A25] mb-4">Quality</h4>
            <p className="text-gray-700">
              We prioritize the highest standards of workmanship and construction practices in every project we undertake.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 shadow-lg rounded-lg text-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-xl font-semibold text-[#FF9A25] mb-4">Integrity</h4>
            <p className="text-gray-700">
              We believe in honest, transparent communication with our clients, ensuring they are always informed throughout the project process.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 shadow-lg rounded-lg text-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold text-[#FF9A25] mb-4">Innovation</h4>
            <p className="text-gray-700">
              We embrace the latest construction technologies, materials, and methods to deliver efficient and cutting-edge solutions.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 shadow-lg rounded-lg text-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h4 className="text-xl font-semibold text-[#FF9A25] mb-4">Safety</h4>
            <p className="text-gray-700">
              The safety of our team, clients, and the public is always our top priority. We adhere to strict safety protocols to ensure a secure working environment.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 shadow-lg rounded-lg text-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h4 className="text-xl font-semibold text-[#FF9A25] mb-4">Customer Satisfaction</h4>
            <p className="text-gray-700">
              Our clients’ needs and satisfaction come first. We are dedicated to delivering exceptional results that meet or exceed their expectations.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
      className="relative py-16 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, delay: 0.2 }}
      style={{
        background: "linear-gradient(135deg, #111827, #1F2937)",
      }}
    >
      <div className="container mx-auto text-center px-6">
        <h3 className="text-3xl font-semibold text-[#FF9A25] mb-6">
          Build Your Dream with Us
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-gray-300">
          {[
            { end: 512, label: "Successfully Project Finished" },
            { end: 25, suffix: "+", label: "Years of experience with pride" },
            { end: 1, suffix: "M+", label: "Revenue in 2024 investment" },
            { end: 1520, suffix: "+", label: "Colleagues & counting more daily" },
          ].map(({ end, suffix = "", label }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-lg shadow-md"
            >
              <h4 className="text-3xl font-bold text-[#FF9A25]">
                <CountUp end={end} duration={20} separator="," suffix={suffix} />
              </h4>
              <p className="text-lg">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
      </div>
    </section>
  );
}
