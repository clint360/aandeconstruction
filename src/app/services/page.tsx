import { BreadcrumbImage } from '@/core/components/molecules/BreadcrumbImage'
import Footer from '@/core/components/organisms/Footer'
import Navbar from '@/core/components/organisms/Navbar'
import ServicesSection from '@/core/components/organisms/ServicesSection'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar />
        <BreadcrumbImage title='Services' subtitle='Our Services'/>
        <ServicesSection />
        <Footer />
    </div>
  )
}

export default page