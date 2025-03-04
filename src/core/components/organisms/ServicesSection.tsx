"use client"
import React from "react";
import { services } from "@/core/data/services";
import { motion } from "framer-motion";
import Button from "../atoms/Button";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <Image src={service.image} alt={service.title} className="w-full h-40 object-cover" width={100} height={100} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            text="See More"
            bgColor="bg-[#FF9A25]"
            textColor="text-white" />
        </motion.div>
      </div>
    </section>
  );
}
