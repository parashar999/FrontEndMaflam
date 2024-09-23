import React from "react";
import Navbar from "../../Component/Navbar/Navbar.jsx";
import PricingHero from "../../Component/PricingHero/PricingHero.jsx";
import PricingContentCards from "../../Component/PricingContentCards/PricingContentCards.jsx";
import Footer from "../../Component/Footer/Footer.jsx";

const PricingDetails = () => {
  return (
    <div>
      <Navbar></Navbar>
      <PricingHero></PricingHero>
      <PricingContentCards></PricingContentCards>
      <Footer></Footer>
    </div>
  );
};

export default PricingDetails;
