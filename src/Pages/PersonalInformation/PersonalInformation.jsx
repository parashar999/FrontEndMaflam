import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import { LanguageProvider } from '../../Component/LanguageContext/LanguageContext'
import MyProfilePersonalInfo from '../../Component/MyProfilePersonalInfo/MyProfilePersonalInfo'

function PersonalInformation() {
  return (
    <div>
      <LanguageProvider >
        <Navbar />
        <MyProfilePersonalInfo />
        <Footer />        
     </LanguageProvider>


    </div>
  )
}

export default PersonalInformation;