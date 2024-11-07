import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import { LanguageProvider } from '../../Component/LanguageContext/LanguageContext'
import ShowCase from '../../Component/ShowCase/ShowCase'
import MoreBookletTwo from '../../Component/MoreBookletTwo/MoreBookletTwo'
function EbookTwo() {
  return (
    <div>
      <LanguageProvider >
        <Navbar />
        <ShowCase />
        <MoreBookletTwo />
        <Footer />        
     </LanguageProvider>


    </div>
  )
}

export default EbookTwo;