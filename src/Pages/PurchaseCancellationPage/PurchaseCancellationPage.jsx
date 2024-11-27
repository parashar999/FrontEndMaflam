import React, { useContext, useEffect } from "react";
import {PurchaseCancellation } from "../../Component";
import { 
  LanguageProvider,
  HomePageContext,
  HomePageProvider,
  PurchaseCancellationContext,
  PurchaseCancellationProvider,
} from "../../store";


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
            <PurchaseCancellation></PurchaseCancellation>
          </PurchaseCancellationProvider>
        </HomePageProvider>
      </LanguageProvider>
    </div>
  );
};

export default PurchaseCancellationPage;
