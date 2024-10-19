import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import CourseDetailsHeader from '../../Component/CourseDetailsHeader/CourseDetailsHeader'
import WhatWeLearn from '../../Component/WhatWeLearn/WhatWeLearn'
import KeyTopic from '../../Component/KeyTopic/KeyTopic'
import Footer from '../../Component/Footer/Footer'
import { LanguageProvider } from '../../Component/LanguageContext/LanguageContext'
import CourseContent from '../../Component/CourseContent/CourseContent'
import ResetPassword from '../../Component/ResetPassword/ResetPassword'

function VegasProCourse() {
  return (
    <div>
      <LanguageProvider >


        <Navbar />
        <CourseDetailsHeader />
        <WhatWeLearn />
        <KeyTopic />
        <CourseContent />
        <ResetPassword />
        <Footer />
        
        </LanguageProvider>


    </div>
  )
}

export default VegasProCourse