import Contact from '@/core/components/organisms/Contact'
import Footer from '@/core/components/organisms/Footer'
import Navbar from '@/core/components/organisms/Navbar'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar />
        <Contact />
        <Footer />
    </div>
  )
}

export default page