import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import { LanguageProvider } from '../../Component/LanguageContext/LanguageContext'
import MyProfileCertificate from '../../Component/MyProfileCertificate/MyProfileCertificate'

function MyCertificate() {
  return (
    <div>
      <LanguageProvider >
        <Navbar />
        <MyProfileCertificate />
        <Footer />        
     </LanguageProvider>


    </div>
  )
}

export default MyCertificate;