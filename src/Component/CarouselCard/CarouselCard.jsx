import React, { useContext, useState, useEffect } from "react";
import styles from "./CarouselCard.module.css";
import { PricingPageContext } from "../../store/PricingPageContext";
import { assests } from "../../assets/assests";
import Carou from "./CarouselCardForPricing"; // Assuming Carou component is available in this path

const CarouselCard = ({ itemWidth, itemHeight }) => {
  const { pricingPageContextDetails, loading, error } = useContext(PricingPageContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  // Fetching success stories data from context
  const successTitle = pricingPageContextDetails?.getPricingCourse1DetailsSec2?.title || [];

  const successStories = pricingPageContextDetails?.repeatedSuccessStories || [];

  return (
    <div className={styles.carouselcontainer}>
      <h2>{successTitle}</h2>
      
      {/* Using Carou for carousel functionality */}
      <Carou
        itemWidth={itemWidth}
        itemHeight={itemHeight}
        scalingRatio={1}
        margin={10}
        items={successStories.map((story) => ({
          id: story.id,
          content: (
            <div className={styles.card}>
              <h2>{story.title}</h2>
              <span className={styles.contentimg}>
                <img src={assests.caraImg} alt="Carousel" />
                <p>{story.description}</p>
              </span>
            </div>
          ),
        }))}
      />
    </div>
  );
};

export default CarouselCard;
