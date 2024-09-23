import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import KeyTopic from '../../Component/KeyTopic/KeyTopic'
import WhatWeLearn from '../../Component/WhatWeLearn/WhatWeLearn'
import AboutInstructor from '../../Component/AboutInstructor/AboutInstructor'
import Footer from '../../Component/Footer/Footer'
import CourseDetailsHeader from '../../Component/CourseDetailsHeader/CourseDetailsHeader'

function RepresentationCourseDetail() {
  return (
    <div>
        <Navbar />
        <CourseDetailsHeader />
        <WhatWeLearn />
        <KeyTopic />
        <AboutInstructor />
        <Footer />

    </div>
  )
}

export default RepresentationCourseDetail