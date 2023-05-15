import NavBar from "@components/templates/NavBar";

import Main from "@components/templates/Main";
import Introduce from "@components/templates/Introduce";

import Faq from "@components/templates/Faq";
import Footer from "@components/templates/Footer";

import { useState } from "react";


export default function MainPage() {

return (
    <>
    <NavBar
    // currentVisibleIndex={currentVisibleIndex}
    // onClickNavLink={handleClickNavLink}
    />
    <Introduce />
    <Introduce />
    <Main />
    <Faq /> 
    <Footer />
    </>
);
}
