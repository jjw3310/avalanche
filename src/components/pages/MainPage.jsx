import NavBar from "@components/templates/NavBar";

import Introduce from "@components/templates/Introduce";
import Calender from "@components/templates/Calender";
import Description from "@components/templates/Description";

import Faq from "@components/templates/Faq";
import Footer from "@components/templates/Footer";

import { useState } from "react";
import { useWallet, useWeb3 } from "@hooks/useAvax";
import { useEffect } from "react";
import { Button } from "@chakra-ui/react";
// import { useGasless } from "@hooks/useGasless";

export default function MainPage() {
  const { contract, userContract, getContracts } = useWeb3();
  const { account, getAddress } = useWallet();
  //   useGasless();
  useEffect(() => {
    getContracts();
    getAddress();
  }, []);

  const getCont = async () => {
    try {
      if (!contract) return;
      console.log("account:", account);
      const response = await contract.methods
        .increment()
        .send({ from: account });
    } catch (error) {
      console.error(error);
    }
  };

  const signUp = async () => {
    try {
      if (!userContract) return;
      console.log("account:", account);
      const response = await userContract.methods
        .signUp("tester", "1234")
        .send({ from: account });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button
        onClick={() => {
          getCont();
        }}
        color={"blue"}
      >
        Contract Test BTN
      </Button>
      <Button
        onClick={() => {
          signUp();
        }}
        color={"blue"}
      >
        SignUP TEST
      </Button>
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
