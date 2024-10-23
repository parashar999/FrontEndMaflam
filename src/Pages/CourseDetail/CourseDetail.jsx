import React from 'react'
import CourseDetailsHeader from '../../Component/CourseDetailsHeader/CourseDetailsHeader'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import CourseTopic from '../../Component/CourseTopic/CourseTopic'
import KeyTopic from '../../Component/KeyTopic/KeyTopic'
import KeyTopicCenter from '../../Component/KeyTopicCenter/KeyTopicCenter'
import { LanguageProvider } from '../../Component/LanguageContext/LanguageContext'
import { HomePageProvider } from '../../store/HomePageContext'

function CourseDetail() {
  return (
    <div>
      <LanguageProvider>
        <HomePageProvider>
        <Navbar />
        <CourseDetailsHeader />
        <CourseTopic />
        <KeyTopicCenter />
        {/* <KeyTopic /> */}
        <Footer />
        </HomePageProvider>
        </LanguageProvider>
    </div>
  )
}

export default CourseDetail