import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
// import previousMonth from "@assets/images/previousMonth.svg";
// import nextMonth from "@assets/images/nextMonth.svg";
// import littleStar from "@assets/images/littleStar.png";
// import { IoPersonCircleOutline } from "react-icons/io5";
// import emptyHeart from "@assets/images/emptyHeart.png";
// import todayDateNFT from "@assets/images/todayDateNFT.png";
// import todayDateNFT from "@assets/images/glitch.png";
// import logoHeart from "@assets/images/logoHeart.png";
// import DescriptionStarLight2 from "@assets/images/DescriptionStarLight2.png";
import axios from "axios";
import TodayNftCard from "@components/atoms/TodayNftCard";
const Calender = ({
  // selected,
  // onSelectDate,
  // totalNft,
  mintedNft,
  // myNft,
  page,
  todayNftImg,
  todayNftMinted,
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [images, setImages] = useState(["ss", "sa"]);
  const [formatDate, setFormatDate] = useState(["aa", "bb"]);

  const [selectedPage, setSelectedPage] = useState(1);
  const [nfts, setNfts] = useState();
  const [nftImg, setNftImg] = useState([]);
  // const [nfts, setNfts] = useState(["", "h"]);

  const [isMinted, setIsMinted] = useState();
  var year = selectedDate.getFullYear();
  var month = ("0" + (1 + selectedDate.getMonth())).slice(-2);
  var day = ("0" + selectedDate.getDate()).slice(-2);
  let todayYYYYMMDD = year + month + day;

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${selectedDate.toISOString()}/`
      );
      const data = await response.json();
      // setImages(data);
    };
    fetchImages();
  }, [selectedDate]);
  const today = new Date();
  let formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "UTC",
  });
  useEffect(() => {
    setFormatDate(formattedDate);
  }, [formatDate]);
  console.log(formattedDate);

  const CalendarContainer = styled.div`
    /* ~~~ container styles ~~~ */
    /* max-width: 600px; */
    /* margin: auto; */
    /* margin-top: 20px; */
    background-color: white;
    //ng: 10px;
    border-radius: 30px;
    height: 100%;
  `;

  const web3 = require("web3");
  const { ethers } = require("ethers");

  // 지갑 주소 입력
  const walletAddress = "0x0c4E3dAc7B9595329911C21331E311E0E0Bf3ad5";

  // 지갑의 NFT 목록 가져오기
  // const getNfts = async () => {
  //   try {
  //     // const nfts = await web3.eth.getNFTs(walletAddress);
  //     // setNfts(nfts);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getNfts();
  // }, []);
  const getNfts = async (p) => {
    try {
      let nftArray = [];

      //한 번 비워주고 시작
      setNfts();
      let tokenIdjson = [20230518, 20230519, 20230520];
      for (let i = 0; i < 35; i++) {
        //   for (let i = 0; i < 10; i++) {
        const tokenId = i + 1 + (p - 1) * 3;
        // console.log(tokenId);

        let response = await axios.get(
          // `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
          // `https://olbm.mypinata.cloud/ipfs/QmU52T5t4bXtoUqQYStgx39DdXy3gLQq7KDuF1F9g3E9Qy/${tokenId}.json`

          // `https://gateway.pinata.cloud/ipfs/QmWYSG9jiQAo4qKchB75tHuX9cefMHDB99Kq9KF4ZyMaue/${tokenIdjson[i]}.json`
          `https://gateway.pinata.cloud/ipfs/QmSHAYfKX9XHpEC3Uc7rK6bVLW7UzQReSd5xhJHA3Lg7oo/${tokenIdjson[i]}`
        );
        console.log("heheheheeh" + response);
        console.log("tooooo" + tokenId);
        nftArray.push({ tokenId, metadata: response.data });
        // console.log(process.env.REACT_APP_JSON_URL);
        console.log(nftArray[0].metadata.properties.image.description);
      }
      setNfts(nftArray);
    } catch (error) {
      console.error(error);
    }
  };

  const getNftImg = () => {
    let nftImgArray = [];
    let dates = document.querySelectorAll(".react-calendar__tile");
    console.log(dates);
    for (let i = 0; i < dates.length; i++) {
      if (i >= nfts.length) break;
      if (i === nfts[i].metadata.edition);
      dates[i].style.backgroundImage = `url(${nfts[i].metadata.image}`;
    }

    // for (let i = 0; i < nfts.length; i++) {
    //   let el = document.querySelector(".react-calendar__tile").style
    //     .backgroundImage;
    //   console.log("===========el============");
    //   console.log();
    //   el = `url(${nfts[i].metadata.image}) !important`;
    //   console.log("elelelel:" + `${nfts[i].metadata.image}`);
    //   nftImgArray.push(i);
    // }
    // setNftImg(nftImgArray);
  };
  useEffect(() => {
    if (!nfts) return;
    getNftImg();
  }, [nfts]);

  useEffect(() => {
    if (todayNftMinted) {
      setIsMinted(todayNftMinted.minted);
      // showDefaultImg = false => show defaultImg
      // showDefaultImg = true  => show  selectedImg
      // setIsSelectedImg(todayNftMinted.showDefaultImg);
      // console.log("setIsMinted : ", isMinted);
      // console.log("DefaultImg : ", isSelectedImg, isMinted);
    }
  }, [todayNftMinted, isMinted]);
  const onClickPageChange = (p) => () => {
    setSelectedPage(p);
    getNfts(p);
  };

  const pageComp = () => {
    let pageArray = [];

    for (let i = 0; i < page; i++) {
      pageArray.push(
        <button
          key={i}
          className={`ml-4 text-2xl font-bold hover:text-white ${
            i + 1 === selectedPage ? "text-white" : "text-gray-400"
          }`}
          onClick={onClickPageChange(i + 1)}
        >
          {i + 1} <span className="text-base">페이지</span>
        </button>
      );
    }
    return pageArray;
  };

  //   이 방식이 리액트에서 공식적으로 권장하는 방식
  //   const pageComp = () => {
  //     let pageArray = [];

  //     for (let i = 0; i < page; i++) {
  //       pageArray.push(
  //         <button
  //           key={i}
  //           className={`ml-4 text-2xl font-bold hover:text-white ${
  //             i + 1 === selectedPage ? "text-white" : "text-gray-400"
  //           }`}
  //           onClick={() => onClickPageChange(i)}
  //         >
  //           {i + 1} <span className="text-base">페이지</span>
  //         </button>
  //       );
  //     }
  //     return pageArray;
  //   };

  //   const onClickPageChange = (p) => {
  //     setSelectedPage(p);
  //   };
  //   useEffect(() => {
  //     // console.log(page);
  //     getNfts(page);
  //   }, [page]);

  useEffect(() => {
    console.log(nfts);
    getNfts(page);
  }, [page]);

  const mintImg = () => {};

  const handleClick = (routePath) => {
    // 클릭 시 이동할 페이지 경로
    // 예시: "/profile"
    // const destination = "/purchaseDetail";
    const destination = `/${routePath}`;
    // 페이지 이동
    window.location.href = destination;
  };

  return (
    <>
      <Box
        // ref={ref}
        w={"100%"}
        h={"600px"}
        // bgGradient={"linear(to-l,#8c1eaa,#272842)"}
        // paddingBottom={"200px"}
      >
        {/* scrollIntoView용 Box(계속 제목을 가려서 breakpoint 만듬) */}
        <Flex
          alignItems={"flex-start"}
          direction={{ base: "column-reverse", md: "row" }}
          justify={"flex-end"}
          px={{ base: "20px", sm: "30px", lg: "50px" }}
          align={"center"}
          h="100%"
          pt={5}
          pb={5}
        >
          <Box borderRadius={"30px"} h="100%" bg="tomato" mr={"20px"} flex="2">
            <div style={{ height: "100%" }}>
              <CalendarContainer
                style={{ height: "100%", backgroundColor: "white" }}
              >
                <Calendar
                  selected={selectedDate}
                  calendarType="US"
                  minDetail="decade"
                  onSelectDate={setSelectedDate}
                  className="react-calendar"
                  style={{ backgroundColor: "white" }}
                  // style={{ "background-color": "black" }}
                />
              </CalendarContainer>
              <div className="max-w-screen-xl mx-auto pt-4">
                <div>{pageComp()}</div>
                <ul className="mt-8 grid grid-cols-1 xl:grid-cols-2 justify-items-center gap-8">
                  {nfts ? (
                    nfts.map((v, i) => {
                      return (
                        <div className="rounded-2xl bg-gray-800 pb-4 relative">
                          {parseInt(mintedNft) < v.tokenId && (
                            <div className="absolute bg-black w-full h-full bg-opacity-50 rounded-2xl flex justify-center items-center text-4xl font-bold pb-[200px]">
                              not Minted
                            </div>
                          )}
                          <img
                            key={i}
                            className="rounded-t-2xl"
                            src={v.metadata.image}
                            alt={v.metadata.name}
                          />
                          <div className="mt-4 text-xl font-bold flex items-center px-4 text-gray-300">
                            Da Den Bu
                            {/* <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center ml-2 text-gray-950">
                              <FaChessRook size={16} />
                            </div> */}
                          </div>
                          <div className="mt-4"># {v.tokenId}</div>
                          <div className="mt-4 text-xl flex justify-end px-4">
                            <Link to={`/${v.tokenId}`}>
                              <button
                                disabled={parseInt(mintedNft) < v.tokenId}
                                className="bg-gray-50 text-gray-950 px-4 py-2 rounded-xl hover:bg-gray-500"
                              >
                                Detail
                              </button>
                            </Link>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div>로딩중입니다...</div>
                  )}
                </ul>
              </div>
              <div className="text-gray-500 mt-4">{formattedDate}</div>
              {/* <MyCalendar /> */}
            </div>
          </Box>
          {/* <Box
            borderRadius={"30px"}
            h="100%"
            bg="white"
            ml={"20px"}
            flex="1"
          ></Box> */}

          {/* 큰 캘린더 */}

          <TodayNftCard
            isMinted={isMinted}
            todayNftImg={todayNftImg}
            selectedYYYYMMDD={todayYYYYMMDD}
          />
          {/* 작은 캘린더 민팅 이후 */}

          {/* 작은 캘린더 민팅 이전 */}
          {/* <Box
            direction={"column"}
            justify={"center"}
            align={"center"}
            borderRadius={"30px"}
            h="100%"
            bg="white"
            ml={"20px"}
            flex="1"
          >
            <Box>
              
              <Flex mt={"20px"} justify={"space-around"} align={"center"}>
                <Image src={previousMonth} />
                <Flex
                  fontFamily="Poppins"
                  fontStyle="normal"
                  fontWeight={700}
                  fontSize={["20px", null, "25.7447px"]}
                  lineHeight={["23px", null, "39px"]}
                  color="#000000"
                >
                  Date's
                </Flex>
                <Image src={nextMonth} />
              </Flex>
              

              <Box
                background="rgba(0, 0, 0, 0)"
                position="relative"
                boxSizing="border-box"
                left="0px"
                top="50px"
                border="1px solid #ADADAD"
                borderRadius="30px"
                w={"300px"}
                h={"350px"}
              ></Box>
              

              <Box
                background="linear-gradient(180deg, rgba(52, 71, 88, 0.9) 0%, rgba(56, 89, 120, 0) 100%)"
                position="relative"
                boxSizing="border-box"
                left="0px"
                top="72px"
                border="1px solid #ADADAD"
                borderTopLeftRadius="0px"
                borderTopRightRadius="0px"
                borderBottomRightRadius="30px"
                borderBottomLeftRadius="30px"
                w={"100%"}
                h={"80px"}
              >
                <Flex
                  direction={"column"}
                  justify={"flex-start"}
                  align={"flex-start"}
                >
                  <Box
                    mt={"10px"}
                    ml={"20px"}
                    fontFamily={"Raleway"}
                    fontStyle={"normal"}
                    fontWeight={"700"}
                    fontSize={"16px"}
                    lineHeight={"23px"}
                    color={"#FFFFFF"}
                    justify={"center"}
                    align={"center"}
                  >
                    Date
                  </Box>

                  <Flex position={"relative"}>
                    <Image
                      src={littleStar}
                      position={"absolute"}
                      left={"-20px"}
                      bottom={"-30px"}
                      width={"100px"}
                      height={"100px"}
                    />
                    <Text
                      ml={"50px"}
                      mb={"2px"}
                      fontFamily={"Raleway"}
                      fontStyle={"normal"}
                      fontWeight={"700"}
                      fontSize={"20px"}
                      lineHeight={"38px"}
                      color={"#FFFFFF"}
                      // position={"relative"}
                    >
                      20230522
                    </Text>

                    <Button
                      mt={"5px"}
                      ml={"120px"}
                      mr={"30px"}
                      w={"100%"}
                      h={"30px"}
                      borderRadius={"20px"}
                      _hover={{ bg: "purple.500" }}
                    >
                      <Popover trigger={"hover"} placement={"bottom-start"}>
                        <PopoverTrigger>
                          <Box
                            fontWeight={"500"}
                            color="black"
                            fontStyle={"normal"}
                            fontSize={{ base: "10px", md: "15px" }}
                            lineHeight={"30px"}
                            _hover={{
                              textDecoration: "none",
                              color: "linkHoverColor",
                            }}
                            href="/"
                            target="_blank"
                          >
                            Mint the date
                          </Box>
                        </PopoverTrigger>
                      </Popover>
                    </Button>
                  </Flex>
                </Flex>
              </Box>
            </Box>
          </Box> */}
        </Flex>
      </Box>
    </>
  );
};

export default Calender;
