import Footer from "../../Component/Footer/Footer";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import Navbar from "../../Component/Navbar/Navbar";
import PaymentForm from "../../Component/PaymentForm/PaymentForm";


export default function Checkouts() {
  return (
    <div>
        <LanguageProvider>
       <Navbar></Navbar>
      <PaymentForm></PaymentForm>
  
      <Footer></Footer>
      </LanguageProvider>
    </div>
  )
}
