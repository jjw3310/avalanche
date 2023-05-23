import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import emptyHeart from "@assets/images/emptyHeart.png";
import glitchImg from "@assets/images/glitch.png";

import DescriptionStarLight2 from "@assets/images/DescriptionStarLight2.png";
import { useWallet, useWeb3 } from "@hooks/useAvax";
import { useEffect, useState } from "react";
import InCardComments from "./InCardComments";

export default function MintedCard({ todayNftImg, selectedYYYYMMDD }) {
  const { commentContract, getContracts } = useWeb3();
  const { address, getAddress } = useWallet();
  const [comments, setComments] = useState();

  useEffect(() => {
    getContracts();
    getAddress();
  }, []);

  useEffect(() => {
    if (!commentContract) return;
    if (!selectedYYYYMMDD) return;
    const getComments = async () => {
      const res = await commentContract.methods
        .getComments(selectedYYYYMMDD)
        .call();
      // console.log("COMMENTS : ", res);
      setComments(res);
    };
    getComments();
  }, [commentContract, selectedYYYYMMDD]);

  return (
    <>
      <Link to={`/guestBook/${selectedYYYYMMDD}/${address}`}>
        <Box borderRadius={"30px"} h="100%" bg="white" ml={"20px"}>
          {/* #upper box */}
          <Box
            w="350px"
            position={"relative"}
            // bg={`url(${todayNftImg})`}
            bg={`url(${glitchImg})`}
            bgSize={"100%"}
            backgroundBlendMode={"multiply"}
            backgroundColor={"rgba(0, 0, 0, 0.5)"}
          >
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
                  {selectedYYYYMMDD}
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
                  {comments
                    ? `Today’s top ${
                        comments.length >= 4 ? 4 : comments.length
                      } comments`
                    : "Let's write comments"}
                </Text>
              </Box>

              {comments
                ? comments.map((v, i) => {
                    if (i === 4) return;
                    return (
                      <div key={i}>
                        <InCardComments
                          yyyymmdd={selectedYYYYMMDD}
                          comment={v}
                        />
                      </div>
                    );
                  })
                : ""}
            </Flex>
          </Box>
        </Box>
      </Link>
    </>
  );
}
