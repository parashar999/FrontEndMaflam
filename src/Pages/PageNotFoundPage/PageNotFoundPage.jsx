import React, { useContext, useEffect } from "react";
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import { LanguageProvider } from '../../Component/LanguageContext/LanguageContext'
import PageNotFound from "../../Component/PageNotFound/PageNotFound";

function PageNotFoundPage() {

  return (
    <div>
      <LanguageProvider >


        <Navbar />
        <PageNotFound />
        <Footer />    

     </LanguageProvider>


    </div>
  )
}

export default PageNotFoundPage;