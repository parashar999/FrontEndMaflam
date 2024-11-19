import Footer from "../../Component/Footer/Footer";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import Navbar from "../../Component/Navbar/Navbar";
import ResetPassword from "../../Component/ResetPassword/ResetPassword";


export default function ResetPasswordPage() {
  return (
    <div>
      <LanguageProvider>
        <Navbar></Navbar>
<ResetPassword></ResetPassword>
<Footer></Footer>
  
    </LanguageProvider>
    </div>
  )
}
