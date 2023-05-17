import NavBar from "@components/templates/NavBar";

import Introduce from "@components/templates/Introduce";
import Calender from "@components/templates/Calender";
import Description from "@components/templates/Description";

import Faq from "@components/templates/Faq";
import Footer from "@components/templates/Footer";

import { useState } from "react";
// import { useGasless } from "@hooks/useGasless";

export default function MainPage() {
  //   useGasless();
  return (
    <>
      <NavBar
      // currentVisibleIndex={currentVisibleIndex}
      // onClickNavLink={handleClickNavLink}
      />
      <Introduce />
      <Calender />
      <Description />
      <Faq />
      <Footer />
    </>
  );
}
