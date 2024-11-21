import React from 'react'
import { LanguageProvider } from '../../Component/LanguageContext/LanguageContext'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import SuccessMessage from '../../Component/SuccessMessage/SuccessMessage'

export default function SuccessMessagePage() {
  return (
    <div>
        <LanguageProvider>
            <Navbar>

            </Navbar>
            <SuccessMessage></SuccessMessage>
            <Footer></Footer>
        </LanguageProvider>
    </div>
  )
}
