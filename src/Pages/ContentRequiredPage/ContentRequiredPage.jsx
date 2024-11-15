import React, { useContext, useEffect } from "react";
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import { LanguageProvider } from '../../Component/LanguageContext/LanguageContext'
import ContentRequired from "../../Component/ContentRequired/ContentRequired";

function ContentRequiredPage() {

  return (
    <div>
      <LanguageProvider >


        <Navbar />
        <ContentRequired />
        <Footer />    

     </LanguageProvider>


    </div>
  )
}

export default ContentRequiredPage;