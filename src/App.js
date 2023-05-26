import "./App.css";
import NavBar from "@components/templates/NavBar";
import {
  ChakraProvider,
  useDisclosure,
  // Box,
  // Heading,
  // Text,
  // Button
} from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import MainPage from "./components/pages/MainPage";
import PurchaseDetail from "@components/pages/purchaseDetail";
import GuestBook from "@components/pages/guestBook";
import { useWallet, useWeb3 } from "@hooks/useAvax";
import SignUp from "@components/pages/SignUp";
import SignIn from "@components/pages/SignIn";
import { useLocation, useNavigate } from "react-router-dom";
function App() {
  const [inputId, setInputId] = useState();
  const [inputPass, setInputPass] = useState();
  const { userContract, getContracts } = useWeb3();
  const { address, getAddress } = useWallet();
  // const location = useLocation();
  // const location2 = useLocation();
  const { isOpen, onToggle } = useDisclosure();
  const [isHovered, setIsHovered] = useState(false);
  const [account, setAccount] = useState();
  // const account = location.state?.account;
  // const history = useHistory();
  // const navigate = useNavigate();
  const handleClick = () => {
    // 클릭 시 이동할 페이지 경로
    // 예시: "/profile"
    console.log("helloacount:" + account);
    const destination1 = {
      pathname: "/purchaseDetail",
      state: { account: account },
    };
    const destination2 = {
      pathname: "/guestBook",
      state: { account: account },
    };
    // const destination1 = "/purchaseDetail";
    // const destination2 = "/guestBook";
    // 페이지 이동

    if (account) {
      // window.location.href = destination1;
      // navigate(destination1);
    } else {
      // window.location.href = destination2;
      // navigate(destination2);
    }
  };

  const callSignIn = async function (_id, _pass) {
    const res = await userContract.methods
      .login(_id, _pass)
      .call()
      .catch((err) => {
        alert("로그인 실패");
      });
    if (res) {
      alert("로그인 성공");
      setAccount(_id);
      // navigate({
      //   pathname: "/",
      //   state: { account: _id },
      // });
    }
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    getContracts();
    getAddress();
  }, []);

  const callSignUp = async function (_id, _pass) {
    const res = await userContract.methods
      .signUp(_id, _pass)
      .send({ from: address });
    if (res) alert("가입 성공");
  };
  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
          <div className="min-h-screen bg-gray-950 text-white">
            <NavBar
              callSignUp={callSignUp}
              handleClick={handleClick}
              scrollPosition={scrollPosition}
              setInputId={setInputId}
              inputId={inputId}
              setInputPass={setInputPass}
              inputPass={inputPass}
              callSignIn={callSignIn}
              setAccount={setAccount}
              account={account}
            />

            <Routes>
              <Route
                path="/"
                element={
                  <MainPage
                    account={account}
                    // signUp={signUp}
                    // signIn={signIn}
                    address={address}
                  />
                }
              />
              <Route
                path="/purchaseDetail"
                element={
                  <PurchaseDetail
                    account={account}
                    // signUp={signUp}
                    // signIn={signIn}
                    address={address}
                  />
                }
              />
              <Route
                path="/GuestBook/:yyyymmdd/:address"
                element={
                  <GuestBook
                    // signUp={signUp}
                    // signIn={signIn}
                    // address={address}
                    account={account}
                    // signUp={signUp}
                    // signIn={signIn}
                    address={address}
                  />
                }
              />
              <Route
                path="/signup"
                element={
                  <SignUp
                    setInputId={setInputId}
                    inputId={inputId}
                    setInputPass={setInputPass}
                    inputPass={inputPass}
                    callSignUp={callSignUp}
                  />
                }
              />
              <Route
                path="/signin"
                element={
                  <SignIn
                    callSignIn={callSignIn}
                    setInputId={setInputId}
                    inputId={inputId}
                    setInputPass={setInputPass}
                    inputPass={inputPass}
                    account={account}
                  />
                }
              />
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
