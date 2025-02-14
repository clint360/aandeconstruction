import { BreadcrumbImage } from '@/core/components/molecules/BreadcrumbImage'
import Contact from '@/core/components/organisms/Contact'
import Footer from '@/core/components/organisms/Footer'
import Navbar from '@/core/components/organisms/Navbar'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar />
         <BreadcrumbImage title='Contact Us' subtitle='Feel free to reach out to us'/>
        <Contact />
        <Footer />
    </div>
  )
}

export default page