import React from 'react'
import { LanguageProvider } from '../../Component/LanguageContext/LanguageContext'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import FailureMessage from '../../Component/FailureMessage/FailureMessage'

export default function FalioursMassagePage() {
  return (
    <div>
        <LanguageProvider>
            <Navbar></Navbar>
            <FailureMessage></FailureMessage>
            <Footer></Footer>
        </LanguageProvider>
    </div>
  )
}
