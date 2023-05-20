import {
  Box,
  // SimpleGrid,
  Flex,
  // chakra,
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
import { forwardRef, useEffect } from "react";
import React, { useState } from "react";
import previousMonth from "@assets/images/previousMonth.svg";
import nextMonth from "@assets/images/nextMonth.svg";
import littleStar from "@assets/images/littleStar.png";
import editPictureIcon from "@assets/images/editPictureIcon.png";
import backIMG from "@assets/images/DistanceStars.png";
import axios from "axios";
import { useWallet, useWeb3 } from "@hooks/useAvax";

const PurchaseDetail = forwardRef((props, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [size, setSize] = useState({ width: 200, height: 200 });
  const [selectedImage, setSelectedImage] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const { dateContract, getContracts } = useWeb3();
  const { address, getAddress } = useWallet();

  const [imgHash, setImgHash] = useState();

  useEffect(() => {
    getContracts();
    getAddress();
  }, [address, dateContract]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleInfo = () => {
    setIsOpen(!isOpen);
  };

  const handleImageChange = (event) => {
    setSelectedFile(event.target.files[0]);
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
      const imageDataURL = reader.result;
      console.log(reader);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
    // reader.readAsDataURL(file);
  };

  const handleDrag = (e, ui) => {
    const { x, y } = ui.deltaXY;
    setPosition((prevPosition) => ({
      x: prevPosition.x + x,
      y: prevPosition.y + y,
    }));
  };

  const handleResize = (e, direction, ref, delta, position) => {
    setSize((prevSize) => ({
      width: prevSize.width + delta.width,
      height: prevSize.height + delta.height,
    }));
    setPosition((prevPosition) => ({
      x: position.x,
      y: position.y,
    }));
  };

  const JWT = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkNTNjYjY4NS0yMDYyLTQ3MWQtOWMwZi05NjUyYzRiYjg0ZDEiLCJlbWFpbCI6Inl5eWxqeUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiYzZkODk0YjBlYzI1M2YxNDAyZTkiLCJzY29wZWRLZXlTZWNyZXQiOiJmZTVhY2EyZTFjMDQ0ZjRiNGIyYWI0NTI0MzM4ZmNhYzY3OWQyYWM3ZmQ2ZDYwNjFhZDMyODU3NmRjZDcyODIxIiwiaWF0IjoxNjg0NDY1MTc2fQ.t0Xm1Blz8Oj3qz-2fdQ-BUlWagqV0vkILbfOI-l8VTI`;

  const [selectedFile, setSelectedFile] = useState();

  const handleSubmission = async () => {
    const formData = new FormData();

    formData.append("file", selectedFile);

    const metadata = JSON.stringify({
      name: "File name",
    });
    formData.append("pinataMetadata", metadata);

    const options = JSON.stringify({
      cidVersion: 0,
    });
    formData.append("pinataOptions", options);

    try {
      const res = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          maxBodyLength: "Infinity",
          headers: {
            "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
            Authorization: JWT,
          },
        }
      );
      console.log(res.data);
      if (res.data.IpfsHash) {
        await setImgHash(res.data.IpfsHash);
        const result = async () => {
          const isDone = await dateContract.methods
            .setNftInfo(
              props.yyyymmdd,
              "",
              "",
              true,
              `https://gateway.pinata.cloud/ipfs/${imgHash}`
            )
            .send({ from: address });
        };
        await result();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <NavBar /> */}
      <Box
        paddingLeft={"190px"}
        paddingRight={"190px"}
        ref={ref}
        w={"100vh"}
        h={"1000px"}
        // paddingBottom={"200px"}
      >
        {/* scrollIntoView용 Box(계속 제목을 가려서 breakpoint 만듬) */}
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          justify={"flex-start"}
          align={"center"}
          // px={{ base: "10%", sm: "15%", lg: "25%" }}
          px={{ base: "10%" }}
          h="100%"
          pt={100}
          pb={5}
          flex="1"
          paddingInlineStart="25%"
        >
          {/* 전체 영역 */}
          <Box h="100%" mr={"30px"}>
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
              direction={"column"}
              justify={"center"}
              align={"center"}
              borderRadius={"30px"}
              h="618px"
              bg="white"
              flex="1"
              mt={"30px"}
            >
              <Box mt={"30px"}>
                {/* 1번째 줄 기능 */}
                <Flex justify={"space-around"} align={"center"}>
                  <Image src={previousMonth} />
                  <Flex
                    py={3}
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
              </Box>

              {/* 사진 넣을 수 있는 기능 */}
              <Flex
                direction={"column"}
                justify={"center"}
                align={"center"}
                gap={14}
              >
                <Box
                  position={"relative"}
                  borderRadius={"30px"}
                  borderColor="#ADADAD"
                  borderWidth="1px"
                  borderStyle="solid"
                  w="300px"
                  h="420px"
                  mt={"39px"}
                  bg="white"
                  boxShadow="base"
                  filter="drop-shadow(0 0 10px rgba(0, 0, 0, 0.2))"
                  // 사진 업로드용
                  // {...getRootProps()}
                  border="1px dashed gray"
                  p={4}
                  textAlign="center"
                  cursor="pointer"
                  width={300} // 원하는 고정된 너비 설정
                  height={380} // 원하는 고정된 높이 설정
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    id="upload-input"
                  />
                  <label htmlFor="upload-input">
                    {selectedImage ? (
                      <Image
                        alt="Uploaded Image"
                        src={selectedImage}
                        maxW="100%"
                        maxH="700px"
                        width={300} // Box의 너비와 동일한 크기로 설정
                        height={300} // Box의 높이와 동일한 크기로 설정
                      />
                    ) : (
                      <Image
                        alt="Edit Picture Icon"
                        position="absolute"
                        bgSize="cover"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        object-fit={"contain"}
                        // backgroundBlendMode={"multiply"}
                        src={editPictureIcon}
                      />
                    )}
                  </label>
                  <Text
                    position="absolute"
                    left="24.26%"
                    right="24.26%"
                    top="90%"
                    bottom="29.35%"
                    fontFamily="Raleway"
                    fontStyle="normal"
                    fontWeight={400}
                    fontSize="12.8034px"
                    lineHeight="15px"
                    color="#747474"
                  >
                    Upload your artwork
                  </Text>
                </Box>
                {/* 3번째 기능 */}
                <Flex>
                  <Box
                    background="linear-gradient(180deg, rgba(52, 71, 88, 0.9) 0%, rgba(56, 89, 120, 0) 100%)"
                    boxSizing="border-box"
                    left="0px"
                    top="60px"
                    border="1px solid #ADADAD"
                    borderTopLeftRadius="0px"
                    borderTopRightRadius="0px"
                    borderBottomRightRadius="30px"
                    borderBottomLeftRadius="30px"
                    w={"400px"}
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

                      <Flex width={"300px"} position={"relative"}>
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
                </Flex>
              </Flex>
            </Box>
          </Box>

          {/* 오른쪽 영역 */}
          <Box
            h="100%"
            ml={"20px"}
            direction={{ base: "column-reverse", md: "row" }}
            justify={"flex-start"}
            px={{ base: "20px", sm: "30px", lg: "50px" }}
            align={"flex-start"}
          >
            <Text
              mt={"80px"}
              fontFamily="sans-serif"
              fontStyle="normal"
              fontWeight={700}
              fontSize="20px"
              lineHeight="23px"
              color="#FFFFFF"
            >
              <label for="input">My date</label>
            </Text>

            {/* 1번째 input tag */}
            <Box position="relative" width="283px">
              <Input
                mt="20px"
                color="black"
                type="text"
                placeholder="Select a date"
                background="rgba(226, 226, 226, 0.96)"
                borderRadius="10px"
                paddingRight={isOpen ? "2.5rem" : "0.75rem"}
                onClick={toggleInfo}
              />
              <Box
                position="absolute"
                right={isOpen ? "0.75rem" : "1.25rem"}
                top="50%"
                fontSize="16px"
                color="blue.500"
                cursor="pointer"
                transition="transform 0.3s"
                transform={isOpen ? "rotate(180deg)" : "rotate(0)"}
                zIndex={1}
              >
                &#9660;
              </Box>
              {isOpen && (
                <Box
                  position="absolute"
                  width="100%"
                  top="calc(100%)"
                  left="0"
                  zIndex={2}
                >
                  <Box
                    bg="white"
                    borderRadius="10px"
                    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
                    p="10px"
                  >
                    <Text color="black">May 1, 2023</Text>
                    <Text color="black" mt="10px">
                      May 10, 2023
                    </Text>
                    <Text color="black" mt="10px">
                      May 17, 2023
                    </Text>
                  </Box>
                </Box>
              )}
            </Box>

            <Text
              mt={"150px"}
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
              placeholder="Give your date a special title."
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
              placeholder="Share the magic of your special date. Describe the cherished moments, emotions, and significance  that
                  make it unforgettable. Tell the story, highlight the meaning, and bring your memories to life in a lasting tribute
                  to your treasured experience.      "
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
            <Flex direction={"row"} justify={"flex-end"} align="flex-end">
              <Button
                borderRadius={"20px"}
                _hover={{ bg: "purple.500" }}
                mt={"30px"}
              >
                <Popover trigger={"hover"} placement={"bottom-start"}>
                  <PopoverTrigger>
                    <Box
                      p={1}
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
                      onClick={handleSubmission}
                    >
                      Submit
                    </Box>
                  </PopoverTrigger>
                </Popover>
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
});

export default PurchaseDetail;
