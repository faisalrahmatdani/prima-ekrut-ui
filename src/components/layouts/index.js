import React, { Fragment, Head } from "react";
import Footer from "../molecules/Footer";
import Navbar from "../organisms/navbar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
