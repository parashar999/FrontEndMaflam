import React from 'react'
// import styles from './CourseDetailsHeader.module.css';

import styles from './DevinciResolveCourseDetail.module.css';

import Navbar from '../../Component/Navbar/Navbar'
import CourseDetailsHeader from '../../Component/CourseDetailsHeader/CourseDetailsHeader'
import Footer from '../../Component/Footer/Footer'
import KeyTopic from '../../Component/KeyTopic/KeyTopic'
import WhatWeLearn from '../../Component/WhatWeLearn/WhatWeLearn'
import AboutInstructor from '../../Component/AboutInstructor/AboutInstructor'

function DevinciResolveCourseDetail() {
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

export default DevinciResolveCourseDetail