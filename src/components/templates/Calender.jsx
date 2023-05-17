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
} from "@chakra-ui/react";
import { forwardRef } from "react";
import { Calendar, CalendarDay, CalendarMonth } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { useState, useEffect } from "react";

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
    padding: 10px;
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
              <CalendarContainer>
                <Calendar
                  selected={selectedDate}
                  calendarType="US"
                  minDetail="decade"
                  onSelectDate={setSelectedDate}
                  className="react-calendar"
                  style={{ backgroundColor: "black" }}
                  // style={{ "background-color": "black" }}
                />
              </CalendarContainer>
              <div>
                {nfts &&
                  nfts.map((image, index) => (
                    <img key={index} src={image.url} alt={image.title} />
                  ))}
              </div>
              <div className="text-gray-500 mt-4">{formattedDate}</div>
              {/* <MyCalendar /> */}
            </div>
          </Box>
          <Box
            borderRadius={"30px"}
            h="100%"
            bg="white"
            ml={"20px"}
            flex="1"
          ></Box>
        </Flex>
      </Box>
    </>
  );
});

export default Calender;
