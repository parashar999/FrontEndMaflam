// import React, { useContext } from "react";
// import Navbar from "../../Component/Navbar/Navbar";
// import Footer from "../../Component/Footer/Footer";
// import FaqsQues from "../../Component/Faqs_Ques/FaqsQues";
// import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
// import { FaqPageContext ,FaqPageProvider } from "../../store/FaqPageContext";

// const FaqPage  = () => {
//   const {  faqScreenDetails, loading, error } = useContext(FaqPageContext);

//   useEffect(() => {
//     if (faqScreenDetails) {
//       console.log("Faq Screen Details:", faqScreenDetails);
      
//     }
//   }, [faqScreenDetails]);
//   return (
//     <div>
//    <LanguageProvider >
//     <FaqPageProvider >

//     <Navbar></Navbar>
//     <FaqsQues></FaqsQues>
//     <Footer></Footer>

//     </FaqPageProvider>    
//    </LanguageProvider >

//     </div>
//   );
// };

// export default FaqPage ;


import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import FaqsQues from "../../Component/Faqs_Ques/FaqsQues";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import { FaqPageProvider } from "../../store/FaqPageContext";

const FaqPage = () => {
  return (
    <div>
      <LanguageProvider>
        <FaqPageProvider>
          <Navbar />
          <FaqsQues />
          <Footer />
        </FaqPageProvider>
      </LanguageProvider>
    </div>
  );
};

export default FaqPage;
