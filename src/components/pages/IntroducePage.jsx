import React from 'react'
import styled from "styled-components";
import { forwardRef } from "react";
import {useNavigate, Link } from "react-router-dom";
import NavBar from '@components/templates/NavBar';
// import ImgAslanLogo from "@assets/images/AslanLogo.png"
// import ImgIntroTeam from "@assets/images/introduceTeamPic.png"
import LeftSideBar from "@components/organisms/LeftSideBar"
import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";


const Container = styled.div`
  width: 100%;
  height: 150vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
`;

const ContentWrap = styled.div`
  flex-direction: row;
  display: flex;
  margin-left: 50px;
  padding-left: 20px;
  padding-right: 50px;
  padding-top: 150px;
`;

//////////// Right Bar //////////// 

const RightBarWrap = styled.main`
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  /* background-color: blue; */
`;

const WhatsAslanTitleBox = styled.main`
width: 440px;
height: 70px;
/* background-color: gray; */
margin-top: 50px;
margin-bottom: 20px;
margin-left: 50px;
border-bottom: 3px solid #B38B30;
`;

const WhatsAslanTitleText = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #B38B30;
`;

const IntroducePage = forwardRef((props, ref) => {

  return (
    <>
      <NavBar/>
      <Container position={"absolute"} top={0} width={"100%"} z-index={99}>
          <ContentWrap>
              <LeftSideBar/>

            {/* RightBar */}
              <RightBarWrap >
                {/* 학회-제목 */}
                <WhatsAslanTitleBox pos={"absolute"}>
                  <WhatsAslanTitleText>
                    아슬란 아카데미 란?
                  </WhatsAslanTitleText>
                </WhatsAslanTitleBox>


                <Box ref={ref} >
                  <Box w={"100%"} h={"100%"}>
                    <Box h={"1px"} />
                    {/* scrollIntoView용 Box(계속 제목을 가려서 breakpoint 만듬) */}
                    
                    {/* 첫번째 사진 */}
                    <Flex
                      justify={"flex-start"}
                      direction={{ base: "column", md: "row" }}
                      // pb={12}
                      px={{ base: "20px", sm: "30px", lg: "50px" }}
                      align={"flex-start"}
                      // mt={"46px"}
                      mr={{ base: "0px", sm: "0px", lg: "0px" }}
                      // ref={ref}

                    >
                      <Box>
                        <Image
                          boxSize="400px"
                          // src={ImgIntroTeam}
                          objectFit={"cover"}
                          w={{ base: "400px", md: "1500px" }}
                          h={{ base: "100%", md: "248.85px" }}
                          mr={{ base: "0px", md: "20px" }}
                          mb={"50px"}
                        />
                        <Image
                          // src={ImgAslanLogo}
                          objectFit={"cover"}
                          w={{ base: "400px", md: "1500px" }}
                          h={{ base: "100%", md: "200px" }}
                          mr={{ base: "0px", md: "20px" }}
                        />
                      </Box>
                      <Box>
                        <Stack>
                          <VStack 
                            align="flex-start" 
                            justify="flex-start"
                          >
                            <Text
                              fontFamily={"IBM Plex Sans"}
                              lineHeight={"18.2px"}
                              fontSize="14px"
                              color={"black.500"}
                              align="left"
                              justify="left"
                              alignSelf={"flex-start"}
                            >
                              <Text
                                fontFamily={"IBM Plex Sans"}
                                lineHeight={{ base: "20px", sm: "25px", lg: "25px" }}
                                fontSize={{ base: "5px", sm: "15px", lg: "15px" }}
                                align={"flex-start"}
                                justify={"flex-start"}
                                mb={"10px"}
                                mr={{ base: "0px", sm: "0px", lg: "0px" }}
                                ml={{ base: "0px", sm: "0px", lg: "40px" }}
                              >
                                Aslan Academy(아슬란 아카데미)는 “블록체인 기술과 정보의 대중화”라는 이념을 추구하기위해 설립된 조직으로, 
                                멋쟁이사자처럼의 대학 동아리 혹은 KDT 과정을 수료한 “멋쟁아사자처럼 수료생들"이 운영하고 활동하는 학회 겸 커뮤니티입니다.
                                <br/>
                                <br/>
                                "블록체인 기술과 정보의 대중화"의 이념에 따라 학회로서의 본분인 독자적인 연구도 진행하지만 이미 공개/배포된 타 논문들을 분석하고
                                대중들이 알아듣기 쉽게 풀어내는 자료 제작과 블록체인의 대중화를
                                위한 여러 활동도 기회갛고 진행하는 단체입니다.
                                <br/>
                                <br/>
                                블록체인에 관심이 있는 모두가 자유롭게 참여하고
                                소통할 수 있는 커뮤니티도 운영하며
                                서로 돕고 도움을 받으며 같이 성장할 수 있는 환경을
                                조성하고 있습니다.
                                <br/>
                                <br/>
                                추가로 멤버십 기반 NFT 발행을 통해 업계 전문가의 특강 청강 기회 등
                                성장 기회를 제공하며 커뮤니티를 더욱 강화할 예정입니다.
                                <br/>
                                <br/>
                                이러한 활동들을 통해 아슬란 아카데미는 궁극적으로
                                국내 블록체인에 관한 부정적 인식 개선 및 업계 성장에
                                기여하기를 희망합니다.
                                <br/>
                              </Text>
                              <Flex
                                mt={"10px"}
                                h={"40px"}
                                position={"relative"}
                                cursor={"pointer"}
                              >
                              </Flex>
                            </Text>
                          </VStack>
                        </Stack>
                      </Box>  
                    </Flex>
                  </Box>
                </Box>  
            </RightBarWrap>
          </ContentWrap>
      </Container>
    </>
  );
});

export default IntroducePage;