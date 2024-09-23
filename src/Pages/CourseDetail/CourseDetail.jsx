import React from 'react'
import CourseDetailsHeader from '../../Component/CourseDetailsHeader/CourseDetailsHeader'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import CourseTopic from '../../Component/CourseTopic/CourseTopic'
import KeyTopic from '../../Component/KeyTopic/KeyTopic'
import KeyTopicCenter from '../../Component/KeyTopicCenter/KeyTopicCenter'

function CourseDetail() {
  return (
    <div>
        <Navbar />
        <CourseDetailsHeader />
        <CourseTopic />
        <KeyTopicCenter />
        {/* <KeyTopic /> */}
        <Footer />
    </div>
  )
}

export default CourseDetail