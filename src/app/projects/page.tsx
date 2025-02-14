import { BreadcrumbImage } from '@/core/components/molecules/BreadcrumbImage'
import Footer from '@/core/components/organisms/Footer'
import Navbar from '@/core/components/organisms/Navbar'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar />
        <BreadcrumbImage title='Our Projects' subtitle='Feel free to reach out to us'/>
        <div className='h-96 bg-white text-center text-grey-700' >
            Coming soon
        </div>
        <Footer />
    </div>
  )
}

export default page