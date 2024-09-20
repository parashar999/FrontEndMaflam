import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import EbooksCards from "../../Component/EBooksCards/EbooksCards";
import JoinUs from "../../Component/JoinUs/JoinUs";

const Ebooks = () => {
  return (
    <div>
      <Navbar></Navbar>
    <EbooksCards></EbooksCards>
      <JoinUs></JoinUs>
      <Footer></Footer>

    </div>
  );
};

export default Ebooks;
