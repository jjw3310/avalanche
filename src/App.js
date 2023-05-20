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
import NavBar from "@components/templates/NavBar";
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
import GuestBook from "@components/pages/guestBook";
import { useWallet, useWeb3 } from "@hooks/useAvax";
// import SignUp from "@components/pages/SignUp";

function App() {
  const [account, setAccount] = useState("");

  const { address, getAddress } = useWallet();
  const { userContract, dateContract, commentContract, getContracts } =
    useWeb3();

  const [inputAcnt, setInputAcnt] = useState("test");
  const signUp = async () => {
    try {
      if (!userContract) return;
      const response = await userContract.methods
        .signUp("test", "1234")
        .send({ from: address });
      if (response) {
        console.log("가입완료");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = async () => {
    try {
      if (!userContract) return;
      const response = await userContract.methods
        .login("jj", "jjj")
        .call()
        .then((res) => {
          if (res) {
            setAccount(inputAcnt);
            alert("로그인 성공");
          } else {
            alert("로그인 실패");
          }
        });
    } catch (error) {
      console.error(error);
      alert("로그인 실패");
    }
  };
  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
          <div className="min-h-screen bg-gray-950 text-white">
            {/* <Header account={account} setAccount={setAccount} /> */}

            <NavBar
              // currentVisibleIndex={currentVisibleIndex}
              // onClickNavLink={handleClickNavLink}
              signUp={signUp}
              signIn={signIn}
              address={address}
              account={account}
            />
            <Routes>
              <Route path="/" element={<MainPage account={account} />} />
              <Route path="/purchaseDetail" element={<PurchaseDetail />} />
              <Route
                path="/GuestBook/:yyyymmdd/:address"
                element={
                  <GuestBook
                    // signUp={signUp}
                    // signIn={signIn}
                    // address={address}
                    account={account}
                  />
                }
              />
              <Route path="/signup" />
              {/* <Route path="/:tokenId" element={<Customizing />} /> */}
            </Routes>
          </div>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

// 1.main - 캘린더 커스텀 디자인 - 일단 수정가능하도록 만든 베이스 곧 푸시해둘게요!
// 2. header 로그인 - 회원가입 일단 30분 이내로 해주실 수 있는 분 있으시면 해주시고 오늘 6시까지 안되면 일단 넘기고 Header.jsx에 있는 코드로 지갑로그인이라도 되도록 사용할게요,
// 3. app.js라우터 - 페이지별(메인, nft수정, 날짜별 방명록) 연결
// 4. main - 날짜별 nft 민팅 디자인 및 기능
// 5. nft수정 페이지 - account로 등록한 이미지 tokenId(해당날짜)값으로 경로 저장 및 수정페이지에 등록된 이미지 출력
// 6. main - 메인 캘린더에 날짜별 이미지 출력
// 7.  날짜별 방명록 페이지 - 등록,조회(계정마다 등록, 이미지, 계정(닉네임?-닉네임 수정 페이지 필요하니 일단 계정주소), 댓글 조회)
// 8. main - 캘린더 날짜별 클릭 시 등록된 nft 조회 및 오늘이 UTC(세계협정시)날짜 기준으로 당일이면 이미지 경로 조회 및 민팅 카드에 출력
// 9. main -민팅 카드에 해당하는 날짜의 방명록 조회 후 출력
