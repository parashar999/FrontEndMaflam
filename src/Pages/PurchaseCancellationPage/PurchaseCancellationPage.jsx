import React, { useContext, useEffect } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import {
  HomePageContext,
  HomePageProvider,
} from "../../store/HomePageContext.jsx";
import {
  PurchaseCancellationContext,
  PurchaseCancellationProvider,
} from "../../store/PurchaseCancellationContext.jsx";
import PurchaseCancellation from "../../Component/PurchaseCancellation/PurchaseCancellation.jsx";

const PurchaseCancellationPage = () => {
  const {
    homeScreenDetails,
    loading: homeLoading,
    error: homeError,
  } = useContext(HomePageContext);

  // useEffect(() => {
  //   if (homeScreenDetails) {
  //     console.log("Home Screen Details:", homeScreenDetails);
  //   }
  // }, [homeScreenDetails]);

  const {
    purchaseCancellationDetails,
    loading: aboutLoading,
    error: aboutError,
  } = useContext(PurchaseCancellationContext);

  // useEffect(() => {
  //   if (purchaseCancellationDetails) {
  //     console.log("Purchase Screen Details:", purchaseCancellationDetails);
  //   }
  // }, [purchaseCancellationDetails]);

  return (
    <div>
      <LanguageProvider>
        <HomePageProvider>
          <PurchaseCancellationProvider>
            <Navbar></Navbar>
            <PurchaseCancellation></PurchaseCancellation>
            <Footer></Footer>
          </PurchaseCancellationProvider>
        </HomePageProvider>
      </LanguageProvider>
    </div>
  );
};

export default PurchaseCancellationPage;
