import React from "react";
import PricingPage from "../../Component/PricingPage/PricingPage";
import Fundamental from "../../Component/FundamentalPackage/Fundamental";
import Footer from "../../Component/Footer/Footer";
import GridCard from "../../Component/GridCards/GridCard";

function Pricing() {
  return (
    <>
      <div>
        <PricingPage></PricingPage>
        <Fundamental></Fundamental>
        <GridCard></GridCard>
      </div>
    </>
  );
}

export default Pricing;
