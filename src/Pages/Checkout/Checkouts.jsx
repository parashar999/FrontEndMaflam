import { useContext, useEffect } from "react";
import Footer from "../../Component/Footer/Footer";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import Navbar from "../../Component/Navbar/Navbar";
import PaymentForm from "../../Component/PaymentForm/PaymentForm";
import {
  CheckoutPaymentContext,
  CheckoutPaymentContextProvider,
} from "../../store/CheckoutPaymentContext";

export default function Checkouts() {
  const { checkoutPaymentContextDetails, loading, error } = useContext(
    CheckoutPaymentContext
  );

  // useEffect(() => {
  //   if (checkoutPaymentContextDetails) {
  //     console.log("Home Screen Details:",checkoutPaymentContextDetails);

  //   }
  // }, [checkoutPaymentContextDetails]);
  return (
    <div>
      <LanguageProvider>
        <CheckoutPaymentContextProvider>
          <Navbar></Navbar>
          <PaymentForm></PaymentForm>

          <Footer></Footer>
        </CheckoutPaymentContextProvider>
      </LanguageProvider>
    </div>
  );
}
