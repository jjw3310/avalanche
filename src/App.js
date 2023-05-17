// import { useState, useRef } from "react";
// import "./App.css";
// import Main from "@components/Main";
// import Nfts from "@components/Nfts";
// import "./App.css";
// import Main from "./pages/main";
// import Customizing from "./pages/customizing";
// import logo from "./logo.svg";

// import {
//   ChakraProvider,
// Box,
// Heading,
// Text,
// Button
// } from "@chakra-ui/react";
// import {
// BrowserRouter,
// Routes,
// Route
// } from "react-router-dom";
// import Main from "./pages/main";
// import Customizing from "./pages/customizing";
// import MainPage from "./pages/MainPage";
// import { useState, useRef } from "react";
// import "./App.css";
// import Main from "@components/Main";
// import Nfts from "@components/Nfts";
// import Main from "./components/pages/main";
// import Customizing from "./components/pages/customizing";
// import Header from "./components/Header";

// import BoxCompo from "@components/BoxCompo";
// import Nfts from "@components/Nfts";
// const [account, setAccount] = useState("");

import logo from "./logo.svg";
import "./App.css";

import {
  ChakraProvider,
  // Box,
  // Heading,
  // Text,
  // Button
} from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useRef } from "react";
import MainPage from "./components/pages/MainPage";
import PurchaseDetail from "@components/pages/purchaseDetail";

function App() {
  const [account, setAccount] = useState("");

  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
          <div className="min-h-screen bg-gray-950 text-white">
            {/* <Header account={account} setAccount={setAccount} /> */}

            <Routes>
              <Route path="/" element={<MainPage account={account} />} />
              <Route path="/purchaseDetail" element={<PurchaseDetail />}>
                {" "}
              </Route>
              {/* <Route path="/:tokenId" element={<Customizing />} /> */}
            </Routes>
          </div>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
