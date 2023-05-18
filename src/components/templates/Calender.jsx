import {
  Box,
  // SimpleGrid,
  Flex,
  // chakra,
  Text,
  Image,
  Stack,
  Heading,
  VStack,
  UnorderedList,
  Button,
  Popover,
  PopoverTrigger,
  Divider,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import { Calendar, CalendarDay, CalendarMonth } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import previousMonth from "@assets/images/previousMonth.svg";
import nextMonth from "@assets/images/nextMonth.svg";
import littleStar from "@assets/images/littleStar.png";
import { IoPersonCircleOutline } from "react-icons/io5";
import emptyHeart from "@assets/images/emptyHeart.png";
import todayDateNFT from "@assets/images/todayDateNFT.png";
import logoHeart from "@assets/images/logoHeart.png";
import DescriptionStarLight2 from "@assets/images/DescriptionStarLight2.png";
import { Link } from "react-router-dom";
import axios from "axios";
const Calender = ({
  selected,
  onSelectDate,
  totalNft,
  mintedNft,
  myNft,
  page,
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [images, setImages] = useState(["ss", "sa"]);
  const [formatDate, setFormatDate] = useState(["aa", "bb"]);

  const [selectedPage, setSelectedPage] = useState(1);
  const [nfts, setNfts] = useState();
  const [nftImg, setNftImg] = useState([]);
  // const [nfts, setNfts] = useState(["", "h"]);

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
    // padding: 10px;
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
          `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
          // `https://olbm.mypinata.cloud/ipfs/QmU52T5t4bXtoUqQYStgx39DdXy3gLQq7KDuF1F9g3E9Qy/${tokenId}.json`

          // `https://gateway.pinata.cloud/ipfs/QmWYSG9jiQAo4qKchB75tHuX9cefMHDB99Kq9KF4ZyMaue/${tokenIdjson[i]}.json`
          // `https://gateway.pinata.cloud/ipfs/QmSHAYfKX9XHpEC3Uc7rK6bVLW7UzQReSd5xhJHA3Lg7oo/${tokenIdjson[i]}`
        );
        console.log("heheheheeh" + response);
        console.log("tooooo" + tokenId);
        nftArray.push({ tokenId, metadata: response.data });
        console.log(process.env.REACT_APP_JSON_URL);
        // console.log(nftArray[0].metadata.properties.image.description);
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
  return (
    <>
      <Box
        // ref={ref}
        w={"100%"}
        h={"600px"}
        bgGradient={"linear(to-l,#8c1eaa,#272842)"}
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
          {/* <Box
            borderRadius={"30px"}
            h="100%"
            bg="gray.500"
            mr={"20px"}
            flex="2"
          ></Box> */}

          {/* 작은 캘린더 민팅 이후 */}
          <Box borderRadius={"30px"} h="100%" bg="white" ml={"20px"}>
            <Box w="350px" position={"relative"}>
              <Image
                position={"absolute"}
                h={"200px"}
                w={"100%"}
                borderRadius={"30px"}
                src={todayDateNFT}
                object-fit="cover"
                boxSizing="border-box"
                borderTopLeftRadius="30px"
                borderTopRightRadius="30px"
                borderBottomRightRadius="0px"
                borderBottomLeftRadius="0px"
                filter="brightness(50%)"
              />
              {/* #upper box */}
              <Flex
                direction={"column"}
                justify={"flex-start"}
                align={"space-around"}
                w={"100%"}
                h="200px"
                position={"relative"}
                overflow={"hidden"}
              >
                {/* #1 */}
                <Flex
                  ml={"20px"}
                  mt={"15px"}
                  direction={"row"}
                  justify={"flex-start"}
                  align={"center"}
                  w={"100%"}
                >
                  <IoPersonCircleOutline size={30} />
                  <Text ml={"10px"}>buyyourdate</Text>
                  <Button
                    // position={"relative"}
                    ml={"120px"}
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    padding="5px 12px"
                    width="60px"
                    gap={"5px"}
                    height="30px"
                    background="#FFFFFF"
                    borderRadius="50px"
                    flex="none"
                    order={1}
                    flexGrow={0}
                  >
                    <Image
                      ml={"5px"}
                      src={emptyHeart}
                      // position={"absolute"}
                    />
                    <Text
                      mr={"5px"}
                      color={"black"}
                      // position={"absolute"}
                    >
                      42
                    </Text>
                  </Button>
                </Flex>
                <Flex
                  ml={"25px"}
                  mt={"5px"}
                  fontFamily="Raleway"
                  fontStyle="normal"
                  fontWeight={700}
                  fontSize={["20px", null, "20px"]}
                  // lineHeight={["23px", null, "47px"]}
                  color="#FFFFFF"
                >
                  My birthday
                </Flex>
                <Flex
                  ml={"25px"}
                  mt={"45px"}
                  fontFamily="Raleway"
                  fontStyle="normal"
                  fontWeight={400}
                  fontSize={["20px", null, "20px"]}
                  // lineHeight={["23px", null, "28px"]}
                  color="#FFFFFF"
                >
                  Date
                </Flex>

                {/* #3 */}
                <Flex
                  position={"relative"}
                  direction={"row"}
                  ml={"20px"}
                  justify={"flex-start"}
                  align={"center"}
                  w={"100%"}
                >
                  <Text
                    ml={"35px"}
                    fontFamily={"Roboto"}
                    fontStyle={"normal"}
                    fontWeight={"400"}
                    fontSize={"20px"}
                    lineHeight={"33px"}
                    color={"#FFFFFF"}
                  >
                    <Image
                      src={DescriptionStarLight2}
                      position={"absolute"}
                      width={"100px"}
                      height={"100px"}
                      left={"-35px"}
                      bottom={"-34px"}
                    />
                    20230521
                  </Text>
                </Flex>
              </Flex>
            </Box>

            {/* #below box */}
            <Box
              background="white"
              boxSizing="border-box"
              borderTopLeftRadius="0px"
              borderTopRightRadius="0px"
              borderBottomRightRadius="30px"
              borderBottomLeftRadius="30px"
              w={"100%"}
              h={"360px"}
            >
              <Flex direction={"column"} justify={"center"} align={"center"}>
                <Box mt={"10px"} mb={"10px"}>
                  <Text
                    fontFamily={"Raleway"}
                    fontStyle={"normal"}
                    fontWeight={"700"}
                    fontSize={"18px"}
                    lineHeight={"21px"}
                    color={"#000000"}
                  >
                    Today’s top 4 comments
                  </Text>
                </Box>

                {/* 방명록 댓글 #Set1 시작 부분 */}
                <Flex
                  mt={"10px"}
                  direction={"row"}
                  ml={"20px"}
                  justify={"flex-start"}
                  align={"flex-start"}
                  w={"100%"}
                >
                  <IoPersonCircleOutline size={30} color="black" />
                  <Flex
                    ml={"10px"}
                    mt={"2px"}
                    fontSize={"16px"}
                    lineHeight={["23px", null, "23px"]}
                    color={"black"}
                    fontWeight={"bold"}
                    justify={"center"}
                    align={"center"}
                  >
                    73elliot
                  </Flex>
                </Flex>
                <Flex justify={"space-around"} align={"center"} w={"100%"}>
                  <Text
                    ml={"35px"}
                    fontFamily="Raleway"
                    fontStyle="normal"
                    fontWeight={700}
                    fontSize={["12px", null, "12px"]}
                    lineHeight={["23px", null, "23px"]}
                    color="#747474"
                  >
                    Today is our anniversary :)
                  </Text>
                  <Box
                    ml={"90px"}
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    padding="5px 12px"
                    // gap="10px"
                    width="66px"
                    height="30px"
                    borderRadius="50px"
                    flex="none"
                    order={1}
                    flexGrow={0}
                  >
                    <Image src={logoHeart} />
                    <Text color={"black"} ml={"5px"}>
                      42
                    </Text>
                  </Box>
                </Flex>
                <Divider
                  mt="5px"
                  orientation="horizontal"
                  width="320px"
                  borderColor="#ADADAD"
                  borderWidth="1px"
                  borderStyle="solid"
                />
                {/* 방명록 댓글 #Set1 끝 부분 */}
                {/* 방명록 댓글 #Set2 시작 부분 */}
                <Flex
                  mt={"10px"}
                  direction={"row"}
                  ml={"20px"}
                  justify={"flex-start"}
                  align={"flex-start"}
                  w={"100%"}
                >
                  <IoPersonCircleOutline size={30} color={"black"} />
                  <Flex
                    ml={"10px"}
                    mt={"2px"}
                    fontSize={"16px"}
                    lineHeight={["23px", null, "23px"]}
                    color={"black"}
                    fontWeight={"bold"}
                  >
                    elena124
                  </Flex>
                </Flex>
                <Flex justify={"space-around"} align={"center"} w={"100%"}>
                  <Text
                    ml={"35px"}
                    fontFamily="Raleway"
                    fontStyle="normal"
                    fontWeight={700}
                    fontSize={["12px", null, "12px"]}
                    lineHeight={["23px", null, "23px"]}
                    color="#747474"
                  >
                    I passed the exam today!!! LOL
                  </Text>
                  <Box
                    ml={"60px"}
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    padding="5px 12px"
                    // gap="10px"
                    width="66px"
                    height="30px"
                    borderRadius="50px"
                    flex="none"
                    order={1}
                    flexGrow={0}
                  >
                    <Image src={logoHeart} />
                    <Text color={"black"} ml={"5px"}>
                      37
                    </Text>
                  </Box>
                </Flex>
                <Divider
                  mt="5px"
                  orientation="horizontal"
                  width="320px"
                  borderColor="#ADADAD"
                  borderWidth="1px"
                  borderStyle="solid"
                />
                {/* 방명록 댓글 #Set2 끝 부분 */}
                {/* 방명록 댓글 #Set3 시작 부분 */}
                <Flex
                  mt={"10px"}
                  direction={"row"}
                  ml={"20px"}
                  justify={"flex-start"}
                  align={"flex-start"}
                  w={"100%"}
                >
                  <IoPersonCircleOutline size={30} color={"black"} />
                  <Text
                    ml={"10px"}
                    mt={"2px"}
                    fontSize={"16px"}
                    lineHeight={["23px", null, "23px"]}
                    color={"black"}
                    fontWeight={"bold"}
                  >
                    345amanda
                  </Text>
                </Flex>
                <Flex justify={"space-around"} align={"center"} w={"100%"}>
                  <Text
                    ml={"35px"}
                    fontFamily="Raleway"
                    fontStyle="normal"
                    fontWeight={700}
                    fontSize={["12px", null, "12px"]}
                    lineHeight={["23px", null, "23px"]}
                    color="#747474"
                  >
                    Happy birthday!! YOU ARE THE BEST XD
                  </Text>
                  <Box
                    ml={"-10px"}
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    padding="5px 12px"
                    // gap="10px"
                    width="66px"
                    height="30px"
                    borderRadius="50px"
                    flex="none"
                    order={1}
                    flexGrow={0}
                  >
                    <Image src={logoHeart} />
                    <Text color={"black"} ml={"5px"}>
                      28
                    </Text>
                  </Box>
                </Flex>
                <Divider
                  mt="5px"
                  orientation="horizontal"
                  width="320px"
                  borderColor="#ADADAD"
                  borderWidth="1px"
                  borderStyle="solid"
                />
                {/* 방명록 댓글 #Set3 끝 부분 */}
                {/* 방명록 댓글 #Set4 시작 부분 */}
                <Flex
                  mt={"10px"}
                  direction={"row"}
                  ml={"20px"}
                  justify={"flex-start"}
                  align={"flex-start"}
                  w={"100%"}
                >
                  <IoPersonCircleOutline size={30} color={"black"} />
                  <Text
                    ml={"10px"}
                    mt={"2px"}
                    fontSize={"16px"}
                    lineHeight={["23px", null, "23px"]}
                    color={"black"}
                    fontWeight={"bold"}
                  >
                    theresa00
                  </Text>
                </Flex>
                <Flex justify={"space-around"} align={"center"} w={"100%"}>
                  <Text
                    ml={"35px"}
                    fontFamily="Raleway"
                    fontStyle="normal"
                    fontWeight={700}
                    fontSize={["14px", null, "12px"]}
                    lineHeight={["23px", null, "23px"]}
                    color="#747474"
                  >
                    HBD!! Today is my birthday as well haha
                  </Text>
                  <Box
                    ml={"10px"}
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    padding="5px 12px"
                    // gap="10px"
                    width="66px"
                    height="30px"
                    borderRadius="50px"
                    flex="none"
                    order={1}
                    flexGrow={0}
                  >
                    <Image src={logoHeart} />
                    <Text color={"black"} ml={"5px"}>
                      15
                    </Text>
                  </Box>
                </Flex>
                <Divider
                  mt="5px"
                  orientation="horizontal"
                  width="320px"
                  borderColor="#ADADAD"
                  borderWidth="1px"
                  borderStyle="solid"
                />
                {/* 방명록 댓글 #Set4 끝 부분 */}
              </Flex>
            </Box>
          </Box>

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
                      w={"120px"}
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
                            justifyContent={"flex-end"}
                            alignItems={"flex-end"}
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
          </Box>
          */}
        </Flex>
      </Box>
    </>
  );
};

export default Calender;
