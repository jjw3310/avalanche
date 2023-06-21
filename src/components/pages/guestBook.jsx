import { Box, Flex, Divider, Text, Image, Button } from "@chakra-ui/react";
import { forwardRef } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import littleStar from "@assets/images/littleStar.png";
import { useParams } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import logoHeart from "@assets/images/logoHeart.png";
import celebrateIcon from "@assets/images/celebrateIcon.png";
import guestBookEnterArrow from "@assets/images/guestBookEnterArrow.png";
import glitch from "@assets/images/glitch.png";
import backIMG from "@assets/images/DistanceStars.png";
import { useWeb3 } from "@hooks/useAvax";
import GuestComment from "@components/atoms/GuestComment";

const GuestBook = forwardRef((props, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [inputComment, setInputComment] = useState("");
  const [comments, setComments] = useState("");
  const { commentContract, dateContract, getContracts } = useWeb3();
  const { yyyymmdd, address } = useParams();
  const [owner, setOwner] = useState();
  const [nftInfo, setNftInfo] = useState();

  useEffect(() => {
    getContracts();
  }, []);

  useEffect(() => {
    if (!commentContract) return;
    if (comments) return;
    const getComments = async () => {
      const res = await commentContract.methods.getComments(yyyymmdd).call();
      console.log("COMMENTS : ", res);
      setComments(res);
    };
    getComments();
  }, [commentContract]);

  useEffect(() => {
    if (!dateContract) return;
    const getData = async () => {
      const ownerAddr = await dateContract.methods.ownerOf(yyyymmdd).call();
      // console.log(ownerAddr);
      setOwner(ownerAddr);

      const todayNftInfo = await dateContract.methods
        .getDayNftInfo(yyyymmdd)
        .call();
      setNftInfo(todayNftInfo);
      console.log(todayNftInfo);
    };
    getData();
  }, [dateContract]);

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
    setInputComment(e.target.value);
  };

  const handleBlur = () => {
    setIsClicked(false);
  };

  const sendComment = async function () {
    const res = await commentContract.methods
      .writeComment(yyyymmdd, "TITLE", inputComment)
      .send({ from: address });
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
                GuestBook
              </Text>

              {/* 왼쪽 가장 큰 카드 */}

              <Box
                direction="column"
                justify="flex-start"
                align="space-around"
                w="400px"
                h="530px"
                bgSize="100% 100%"
                bgRepeat={"no-repeat"}
                bgPosition={"center"}
                backgroundBlendMode={"multiply"}
                backgroundColor={"rgba(0, 0, 0, 0.5)"}
                bgImage={nftInfo ? nftInfo.imgUrl : `url(${glitch})`}
                // backgroundBlendMode={"multiply"}
                // backgroundColor={"rgba(0, 0, 0, 0.5)"}
                // bgSize="cover"
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
                    <Text ml={"10px"}>
                      {owner
                        ? owner.slice(0, 4) + "..." + owner.slice(-4)
                        : "Loading"}
                    </Text>
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
                        {yyyymmdd}
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
                      Today’s top {comments.length} comments
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
                  {comments
                    ? comments.map((v, i) => {
                        return (
                          <div key={i}>
                            <GuestComment comment={v} />
                          </div>
                        );
                      })
                    : ""}
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
                          {inputComment ? (
                            <input
                              type="text"
                              value={inputComment}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              autoFocus
                              style={{
                                outline: "none",
                                border: "none",
                                width: "552px", // Adjust the width as needed
                              }}
                            />
                          ) : (
                            <input
                              type="text"
                              value={inputComment}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="One comment only.."
                              autoFocus
                              style={{
                                outline: "none",
                                border: "none",
                                width: "552px", // Adjust the width as needed
                              }}
                            />
                          )}
                        </div>
                        <Image
                          mt="5px"
                          ml={"10px"} // Adjust the marginLeft as needed
                          src={guestBookEnterArrow}
                          width="30px"
                          height="auto"
                          style={{ opacity: 4 }}
                          onClick={() => {
                            setInputComment("");
                            sendComment();
                          }}
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
