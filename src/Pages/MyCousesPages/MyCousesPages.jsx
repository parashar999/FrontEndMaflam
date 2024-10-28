import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
// import Mycourses from '../../Component/MyCourses/Mycourses'
import MyCourseCard from '../../Component/MyCourseCard/MyCourseCard'
import { LanguageProvider } from '../../Component/LanguageContext/LanguageContext'
// import MyCoursesFinishCourse from '../../Component/MyCourseCard/MyCoursesFinishCourse'

export default function MyCousesPages() {
  return (
    <div>
        <LanguageProvider>
        <Navbar></Navbar>

        {/* <MyCoursesFinishCourse></MyCoursesFinishCourse> */}
    <MyCourseCard></MyCourseCard>
        <Footer></Footer>
        </LanguageProvider>
    </div>
  )
}
