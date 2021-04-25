import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Banner from "./banner";

const index = ({children}) => {
  return (
    <>
      <Navbar />
      <Banner/>
      {children}
      <Footer />
    </>
  );
};

export default index;
