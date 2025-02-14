import { BreadcrumbImage } from '@/core/components/molecules/BreadcrumbImage'
import Footer from '@/core/components/organisms/Footer'
import Navbar from '@/core/components/organisms/Navbar'
import React from 'react'

function page() {
    return (
        <div>
            <Navbar />
            <div>
                <BreadcrumbImage
                    title="About Us"
                    subtitle="Welcome to A & E Construction Company"
                    backgroundImage="/path-to-your-image.jpg"
                />
                <div className="p-8">
                    <p className="text-gray-700">
                        At A & E Construction, we are a leading construction company based in Cameroon, dedicated to providing top-notch construction services and associated solutions. With years of industry experience, a team of skilled professionals, and a commitment to quality, we aim to deliver exceptional results that not only meet but exceed our clients' expectations.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page