import NavBar from "@components/templates/NavBar";

import Introduce from "@components/templates/Introduce";
import Calender from "@components/templates/Calender";
import Description from "@components/templates/Description";

import Faq from "@components/templates/Faq";
import Footer from "@components/templates/Footer";

import { useState, useEffect } from "react";
import { useWallet, useWeb3 } from "@hooks/useAvax";
import { Box } from "@chakra-ui/react";
import backIMG from "../../assets/images/DistanceStars.png";
import axios from "axios";

export default function MainPage({ account, signUp, signIn }) {
  const [page, setPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { userContract, dateContract, commentContract, getContracts } =
    useWeb3();
  const { address, getAddress } = useWallet();
  // const [account, setAccount] = useState();
  const [inputAcnt, setInputAcnt] = useState("test");
  const [nftInfo, setNftInfo] = useState();
  const [todayNftInfo, setTodayNftInfo] = useState();

  var date = new Date();
  var year = date.getFullYear();
  var month = ("0" + (1 + date.getMonth())).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  let todayYYYYMMDD = year + month + day;
  // console.log(todayYYYYMMDD);

  useEffect(() => {
    getContracts();
    getAddress();
  }, []);

  const mintDate = async (season, _yyyymmdd) => {
    try {
      if (!dateContract) return;
      await dateContract.methods
        .mintCommon(season, _yyyymmdd, address)
        .send({ from: address })
        .then(console.log);
    } catch (error) {
      console.error(error);
    }
  };

  const getTodayNft = async (_yyyymmdd) => {
    try {
      const todayNftInfo = await dateContract.methods
        .getDayNftInfo(_yyyymmdd)
        .call();
      setNftInfo(todayNftInfo);
      // console.log("TODAY NFT INFO:", todayNftInfo);
      if (!todayNftInfo) return;
      if (!todayNftInfo.showDefaultImg) {
        console.log("변경한 url이 존재함");
        setTodayNftInfo(todayNftInfo);
      } else {
        console.log("기본 이미지 출력 ");
        let jsonUrl = await dateContract.methods.tokenURI(_yyyymmdd).call();
        const res = await axios.get(jsonUrl, {
          headers: {
            Accept: "text/plain",
          },
        });
        const tnimg = res.data.properties.image.description;
        setTodayNftInfo(tnimg);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!dateContract) return;
    getTodayNft(todayYYYYMMDD);
    // console.log("NFT DATA", nftInfo);
  }, [dateContract]);

  // useEffect(() => {
  //   if (todayNftImg) console.log("TODAY NFT IMG :", todayNftImg);
  // }, [todayNftImg]);

  return (
    // <>

    <Box bg={`url(${backIMG})`} bgSize={"100%"}>
      {/* <NavBar
        // currentVisibleIndex={currentVisibleIndex}
        // onClickNavLink={handleClickNavLink}
        signUp={signUp}
        signIn={signIn}
        address={address}
        account={account}
      /> */}
      {/* <NavBar
        signUp={signUp}
        signIn={signIn}
        address={address}
        account={account}
      /> */}
      <Introduce mintDate={mintDate} />
      <Calender
        selected={selectedDate}
        onSelectDate={setSelectedDate}
        page={page}
        todayNftInfo={todayNftInfo}
        todayNftMinted={nftInfo}
      />
      <Description />
      <Faq />
      <Footer />
    </Box>
    // </>
  );
}
