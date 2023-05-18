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
  Input,
  label,
  Textarea,
  Button,
  Popover,
  PopoverTrigger,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import NavBar from "@components/templates/NavBar";
// import editPictureSection from "@assets/images/editPictureSection.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const PurchaseDetail = forwardRef((props, ref) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <NavBar />
      <Box
        ref={ref}
        w={"100%"}
        h={"1000px"}
        // bgGradient={"linear(to-l,#8c1eaa,#272842)"}
        // paddingBottom={"200px"}
      >
        {/* scrollIntoView용 Box(계속 제목을 가려서 breakpoint 만듬) */}
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          justify={"flex-end"}
          px={{ base: "20px", sm: "30px", lg: "50px" }}
          align={"center"}
          h="100%"
          pt={5}
          pb={5}
        >
          <Box borderRadius={"30px"} h="100%" mr={"20px"} flex="3">
            <Box
              position="relative"
              zIndex={1}
              width="266px"
              height="47px"
              left="100px"
              top="50px"
            >
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
              <Box
                background="rgba(0, 0, 0, 0.4)"
                boxShadow="1px 1px 25px 10px rgba(0, 0, 0, 0.2)"
                borderRadius={"30px"}
                mt={"30px"}
                position="absolute"
                left="0px"
                top="50px"
                w={"300px"}
                h={"300px"}
              >
                <Box
                  background="rgba(0, 0, 0, 0)"
                  position="relative"
                  boxSizing="border-box"
                  left="25px"
                  top="25px"
                  border="1px solid #FFFFFF"
                  borderRadius="30px"
                  w={"250px"}
                  h={"250px"}
                >
                  <Box
                    fontFamily="sans-serif"
                    position="relative"
                    textAlign={"center"}
                    left="0px"
                    top="205px"
                    fontStyle="normal"
                    fontWeight={700}
                    fontSize="15px"
                    lineHeight="23px"
                    color="#FFFFFF"
                  >
                    upload your artwork
                  </Box>
                  <FontAwesomeIcon
                    icon={faImages}
                    size={120}
                    style={{
                      position: "absolute",
                      width: "250px",
                      height: "50px",
                      transition: "transform 0.4s",
                      transform: `scale(${
                        isHovered ? 1.05 : 1
                      }) translateY(70px)`,
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                  {/* <Image 
                    src={editPictureSection} // png 받으면 여기 바꿔넣어라.
                    z-zIndex={"999"}
                  /> */}
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            borderRadius={"30px"}
            h="100%"
            ml={"20px"}
            flex="4"
            direction={{ base: "column-reverse", md: "row" }}
            justify={"flex-start"}
            px={{ base: "20px", sm: "30px", lg: "50px" }}
            align={"flex-start"}
          >
            {/* M date */}
            <Text
              mt={"130px"}
              fontFamily="sans-serif"
              fontStyle="normal"
              fontWeight={700}
              fontSize="20px"
              lineHeight="23px"
              color="#FFFFFF"
            >
              <label for="input">My date</label>
            </Text>
            <Input
              mt={"20px"}
              color="black"
              type="text"
              placeholder="yy/mm/dd"
              width="283px"
              background="rgba(226, 226, 226, 0.96)"
              borderRadius="10px"
            />

            {/* Date’s title */}
            <Text
              mt={"80px"}
              fontFamily="sans-serif"
              fontStyle="normal"
              fontWeight={700}
              fontSize="20px"
              lineHeight="23px"
              color="#FFFFFF"
            >
              <label for="input">Date’s title</label>
            </Text>
            <Input
              mt={"20px"}
              color="black"
              type="text"
              placeholder="My Birthday !! "
              width="600px"
              background="rgba(226, 226, 226, 0.96)"
              borderRadius="10px"
            />
            <Text
              direction={{ base: "column-reverse", md: "row" }}
              justify="flex-end"
              align="flex-end"
              ml={"565px"}
              fontFamily="sans-serif"
              fontSize="14px"
              color="gray.500"
            >
              0/30
            </Text>

            {/* Description for the date  */}
            <Text
              mt={"80px"}
              fontFamily="sans-serif"
              fontStyle="normal"
              fontWeight={700}
              fontSize="20px"
              lineHeight="23px"
              color="#FFFFFF"
            >
              <label for="input">Description for the date</label>
            </Text>
            <Textarea
              mt="20px"
              color="black"
              placeholder="Write a long sentence..."
              width="600px"
              height="200px"
              background="rgba(226, 226, 226, 0.96)"
              borderRadius="10px"
            />
            <Text
              mt="2"
              justify="flex-end"
              align="flex-end"
              fontFamily="sans-serif"
              fontSize="14px"
              color="gray.500"
              ml={"565px"}
            >
              0/500
            </Text>

            <Button
              borderRadius={"20px"}
              _hover={{ bg: "purple.500" }}
              mt={"100px"}
            >
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Box
                    p={1}
                    // mt={"164px"}
                    fontWeight={"500"}
                    color="black"
                    fontStyle={"normal"}
                    fontSize={{ base: "10px", md: "16px" }}
                    lineHeight={"30px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    _hover={{
                      textDecoration: "none",
                      color: "linkHoverColor",
                    }}
                    href="/"
                    target="_blank"
                  >
                    Submit
                  </Box>
                </PopoverTrigger>
              </Popover>
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
});

export default PurchaseDetail;
