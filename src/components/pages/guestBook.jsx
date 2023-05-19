import {
  Box,
  Flex,
  Divider,
  Text,
  Image,
  Input,
  Stack,
  Heading,
  VStack,
  label,
  Textarea,
  Button,
  Popover,
  PopoverTrigger,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import NavBar from "@components/templates/NavBar";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-regular-svg-icons";
import React, { useState, useEffect } from "react";
import previousMonth from "@assets/images/previousMonth.svg";
import nextMonth from "@assets/images/nextMonth.svg";
import littleStar from "@assets/images/littleStar.png";
import editPictureIcon from "@assets/images/editPictureIcon.png";
import { Link } from "react-router-dom";
import { Calendar, CalendarDay, CalendarMonth } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import emptyHeart from "@assets/images/emptyHeart.png";
import todayDateNFT from "@assets/images/todayDateNFT.png";
import logoHeart from "@assets/images/logoHeart.png";
import DescriptionStarLight2 from "@assets/images/DescriptionStarLight2.png";
import celebrateIcon from "@assets/images/celebrateIcon.png";
import guestBookEnterArrow from "@assets/images/guestBookEnterArrow.png";
import glitch from "@assets/images/glitch.png";
import backIMG from "@assets/images/DistanceStars.png";

const GuestBook = forwardRef((props, ref, account) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [comment, setComment] = useState("");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleInfo = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleBlur = () => {
    setIsClicked(false);
  };

  return (
    <>
      <Box bg={`url(${backIMG})`} bgSize={"100%"}>
        {/* <NavBar /> */}
        <Box
          // ref={ref}
          w={"100%"}
          h={"1000px"}
        >
          {/* scrollIntoView용 Box(계속 제목을 가려서 breakpoint 만듬) */}
          <Flex
            direction={{ base: "column-reverse", md: "row" }}
            justify={"flex-start"}
            align={"space-around"}
            px={{ base: "20px", sm: "30px", lg: "100px" }}
            h="680px"
            w="480px"
            pt={100}
            pb={5}
            flex="1"
          >
            {/* 왼쪽 전체 영역 */}
            <Box>
              <Text
                fontFamily="sans-serif"
                fontStyle="normal"
                fontWeight="700"
                fontSize="40px"
                lineHeight="47px"
                color="#FFFFFF"
              >
                Edit your day
              </Text>

              {/* 왼쪽 가장 큰 카드 */}

              <Box
                direction="column"
                justify="flex-start"
                align="space-around"
                w="400px"
                h="530px"
                bg={`url(${glitch})`}
                backgroundBlendMode={"multiply"}
                backgroundColor={"rgba(0, 0, 0, 0.5)"}
                bgSize="cover"
                borderTopLeftRadius="30px"
                borderTopRightRadius="0px"
                borderBottomLeftRadius="30px"
                borderBottomRightRadius="0px"
                pos={"relative"}
              >
                <Box mt={"30px"}>
                  <Flex
                    pos={"absolute"}
                    ml={"20px"}
                    mt={"20px"}
                    direction={"row"}
                    justify={"flex-start"}
                    align={"center"}
                    w={"300px"}
                  >
                    <IoPersonCircleOutline size={30} />
                    <Text ml={"10px"}>buyyourdate</Text>
                  </Flex>
                </Box>

                <Box
                  position="relative"
                  boxSizing="border-box"
                  left="0px"
                  top="450px"
                  borderTopLeftRadius="0px"
                  borderTopRightRadius="0px"
                  borderBottomLeftRadius="30px"
                  borderBottomRightRadius="0px"
                  w={"100%"}
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
                    </Flex>
                  </Flex>
                </Box>
              </Box>
            </Box>

            {/* 오른쪽 가장 큰 카드 */}
            <Box
              background="white"
              boxSizing="border-box"
              borderTopLeftRadius="0px"
              borderTopRightRadius="30px"
              borderBottomLeftRadius="00px"
              borderBottomRightRadius="30px"
              w={"680px"}
              h={"530px"}
              mt={"77px"}
            >
              <Flex
                direction={"column"}
                justify={"flex-start"}
                align={"flex-start"}
              >
                {/* #section1 방명록 제목 시작 부분 */}
                <Box ml={"20px"} mt={"30px"} mb={"10px"}>
                  <Flex
                    direction={"row"}
                    justify={"flex-start"}
                    align={"center"}
                    pb={"10px"}
                    borderBottomColor="#ADADAD"
                    borderTopColor="transparent"
                    borderLeftColor="transparent"
                    borderRightColor="transparent"
                    borderBottomWidth="2px"
                  >
                    <Image src={celebrateIcon} />
                    <Text
                      ml={"15px"}
                      fontFamily={"Raleway"}
                      fontStyle={"normal"}
                      fontWeight={"700"}
                      fontSize={"18px"}
                      lineHeight={"21px"}
                      color={"#000000"}
                    >
                      Today’s top 4 comments
                    </Text>
                    <Button
                      // position={"relative"}
                      ml={"250px"}
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="center"
                      padding="5px 12px"
                      width="140px"
                      height="40px"
                      gap={"5px"}
                      background="#FFFFFF"
                      borderRadius="50px"
                      flex="none"
                      order={1}
                      flexGrow={0}
                    >
                      <Text mr={"5px"} color={"black"}>
                        Today
                      </Text>
                      <Image src={logoHeart} />
                      <Text mr={"5px"} color={"black"}>
                        170
                      </Text>
                    </Button>
                  </Flex>
                </Box>

                {/* #section2 방명록 댓글 부분 */}
                <Box h={"390px"}>
                  <Flex
                    mt={"10px"}
                    direction={"row"}
                    ml={"20px"}
                    justify={"flex-start"}
                    align={"flex-start"}
                    w={"650px"}
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
                  <Flex
                    direction={"column"}
                    justify={"space-between"}
                    align={"center"}
                    w={"100%"}
                  >
                    <Flex
                      direction={"row"}
                      justify={"space-between"}
                      align={"center"}
                      w={"100%"}
                    >
                      <Text
                        ml={"50px"}
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
                        mr={"30px"}
                      >
                        <Image src={logoHeart} />
                        <Text color={"black"} ml={"5px"}>
                          42
                        </Text>
                      </Box>
                    </Flex>
                  </Flex>
                </Box>

                {/* #section3 방명록 댓글 쓰는 기능 */}
                <Box w={"650px"}>
                  <Flex>
                    <Flex
                      width={"100%"}
                      direction="row"
                      justify="flex-start"
                      align="center"
                      borderTopColor="black"
                      borderBottomColor="transparent"
                      borderLeftColor="transparent"
                      borderRightColor="transparent"
                      borderTopWidth="1px"
                    >
                      <Flex>
                        <Divider
                          ml="20px"
                          mt="13px"
                          border={"2px"}
                          orientation="vertical"
                          borderColor="#ADADAD"
                          borderWidth="1px"
                          borderStyle="solid"
                          height="15px" // 세로 길이 조정
                        />

                        <div
                          style={{
                            marginLeft: "15px",
                            marginTop: "10px",
                            fontFamily: "Raleway",
                            fontStyle: "normal",
                            fontSize: "18px",
                            lineHeight: "21px",
                            color: "rgba(0, 0, 0, 0.5)",
                            cursor: isClicked ? "auto" : "text",
                            border: isClicked
                              ? "none"
                              : "1px solid transparent",
                            display: "inline-flex",
                            alignItems: "center",
                          }}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                          onClick={handleClick}
                        >
                          {isClicked ? (
                            <input
                              type="text"
                              value={comment}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Write a comment..."
                              autoFocus
                              style={{
                                outline: "none",
                                border: "none",
                                width: "552px", // Adjust the width as needed
                              }}
                            />
                          ) : (
                            <>
                              <Flex width={"550px"}>
                                <span style={{ flex: "1" }}>
                                  One comment only..
                                </span>
                              </Flex>
                            </>
                          )}
                        </div>
                        <Image
                          mt="5px"
                          ml={"10px"} // Adjust the marginLeft as needed
                          src={guestBookEnterArrow}
                          width="30px"
                          height="auto"
                          style={{ opacity: 4 }}
                        />
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
});

export default GuestBook;
