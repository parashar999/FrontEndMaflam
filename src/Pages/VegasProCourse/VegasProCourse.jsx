import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import CourseDetailsHeader from '../../Component/CourseDetailsHeader/CourseDetailsHeader'
import WhatWeLearn from '../../Component/WhatWeLearn/WhatWeLearn'
import KeyTopic from '../../Component/KeyTopic/KeyTopic'
import Footer from '../../Component/Footer/Footer'

function VegasProCourse() {
  return (
    <div>
        <Navbar />
        <CourseDetailsHeader />
        <WhatWeLearn />
        <KeyTopic />
        <Footer />

    </div>
  )
}

export default VegasProCourse