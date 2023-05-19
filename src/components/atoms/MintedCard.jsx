import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { IoPersonCircleOutline } from "react-icons/io5";

import emptyHeart from "@assets/images/emptyHeart.png";
// import todayDateNFT from "@assets/images/todayDateNFT.png";
import todayDateNFT from "@assets/images/glitch.png";
import logoHeart from "@assets/images/logoHeart.png";
import DescriptionStarLight2 from "@assets/images/DescriptionStarLight2.png";

export default function MintedCard() {
  return (
    <Box borderRadius={"30px"} h="100%" bg="white" ml={"20px"}>
      <Box
        w="350px"
        position={"relative"}
        // bg={`url(${todayNftImg})`}
        bg={`url(${todayDateNFT})`}
        bgSize={"100%"}
        backgroundBlendMode={"multiply"}
        backgroundColor={"rgba(0, 0, 0, 0.5)"}
      >
        {/* <Image
                position={"absolute"}
                h={"200px"}
                // h={"100%"}
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
              /> */}
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
  );
}
