"use client"
import { BreadcrumbImage } from '@/core/components/molecules/BreadcrumbImage'
import Footer from '@/core/components/organisms/Footer'
import Navbar from '@/core/components/organisms/Navbar'
import VisionMissionSection from '@/core/components/organisms/VisionMissionSection'
import React from 'react'
import { motion } from "framer-motion";

function page() {
    return (
        <div>
            <Navbar />
            <BreadcrumbImage
                title="About Us"
                subtitle="Welcome to A & E Construction Company"
            />
            <div className="flex flex-col items-center justify-center bg-white text-center p-8">
                <motion.h2
                    className="text-4xl font-semibold text-[#FF9A25] mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1 }}
                >
                    About Us, What we do
                </motion.h2>
                <div className="max-w-3xl">
                    <p className="text-lg text-gray-700">
                        At A &amp; E Construction, we are a leading construction company based in Cameroon, dedicated to providing top-notch construction services and associated solutions. With years of industry experience, a team of skilled professionals, and a commitment to quality, we aim to deliver exceptional results that not only meet but exceed our clients' expectations.
                    </p>
                </div>
            </div>
            <VisionMissionSection />
            <Footer />
        </div>
    )
}

export default page