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

const Calender = forwardRef((props, ref) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [images, setImages] = useState(["ss", "sa"]);
  const [formatDate, setFormatDate] = useState(["aa", "bb"]);
  const [nfts, setNfts] = useState(["", "h"]);
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
  const getNfts = async () => {
    try {
      const nfts = await web3.eth.getNFTs(walletAddress);
      setNfts(nfts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNfts();
  }, []);

  return (
    <>
      <Box
        ref={ref}
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
          {/* <Box
            borderRadius={"30px"}
            h="100%"
            bg="white"
            ml={"20px"}
            flex="1"
          ></Box> */}

          {/* 큰 캘린더 */}
          <Box
            borderRadius={"30px"}
            h="100%"
            bg="gray.500"
            mr={"20px"}
            flex="2"
          ></Box>

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
});

export default Calender;
