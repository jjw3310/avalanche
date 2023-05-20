import {
  Box,
  Flex,
  Text,
  IconButton,
  Collapse,
  Link,
  Image,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  ButtonGroup,
} from "@chakra-ui/react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar({
  currentVisibleIndex,
  onClickNavLink,
  signUp,
  signIn,
  address,
  account,
}) {
  const { isOpen, onToggle } = useDisclosure();
  const [isHovered, setIsHovered] = useState(false);
  
  const navigate = useNavigate();
  const navigateToPurchase = () => {
    navigate("/signUp");
  };


  const handleClick = () => {
    // 클릭 시 이동할 페이지 경로
    // 예시: "/profile"
    console.log("helloacount:" + account);
    const destination1 = {
      pathname: "/purchaseDetail",
      state: { account: account },
    };
    const destination2 = {
      pathname: "/guestBook",
      state: { account: account },
    };
    // const destination1 = "/purchaseDetail";
    // const destination2 = "/guestBook";
    // 페이지 이동

    if (account) {
      // window.location.href = destination1;
      navigate(destination1);
    } else {
      // window.location.href = destination2;
      navigate(destination2);
    }
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <Box
      z-index={"999"}
      top={0}
      width={"100%"}
      // bgGradient={"linear(to-l,#8c1eaa,#272842)"}
    >
      <div
        className={scrollPosition < 50 ? "original_header" : "change_header"}
      >
        <Flex
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={"space-around"}
          position={"fixed"}
          width={"100%"}
        >
          <Flex flex={{ base: 1 }} ml={"12px"} alignItems={"center"}>
            <Box width={70} cursor={"pointer"} onClick={() => navigate("/")}>
              <Text color={"white"}>Date's</Text>
            </Box>
          </Flex>
          {/* {account ? `Welcome!\t"${account}"` : ""} */}
          {!account ? (
            <>
              <Button
                onClick={navigateToPurchase}
                borderRadius={"50px"}
                _hover={{ bg: "purple.500" }}
                mt={"20px"}
                href={"/signup"}
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
                    >
                      Sign Up
                    </Box>
                  </PopoverTrigger>
                </Popover>
              </Button>
              <Button
                borderRadius={"50px"}
                _hover={{ bg: "purple.500" }}
                ml={"20px"}
                mt={"20px"}
                onClick={() => {
                  signIn();
                }}
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
                      href="/"
                      target="_blank"
                    >
                      Sign in
                    </Box>
                  </PopoverTrigger>
                </Popover>
              </Button>
            </>
          ) : (
            <>
              <Button
                borderRadius={"50px"}
                _hover={{ bg: "purple.500" }}
                mt={"20px"}
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
                      href="/"
                      target="_blank"
                    >
                      Sign Out
                    </Box>
                  </PopoverTrigger>
                </Popover>
              </Button>
              <Flex
                ml={"20px"}
                mr={"40px"}
                mt={"10px"}
                position="relative"
                cursor="pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleClick}
                justifyContent={"center"}
                alignItems={"center"}
                transform={isOpen ? "translateY(5)" : "translateY(5px)"}
              >
                <Link to="/purchaseDetail" textDecoration="none">
                  <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    transition="transform 0.3s ease-in-out"
                    transform={
                      isHovered ? "translateY(-10px)" : "translateY(0)"
                    }
                    position="relative"
                  >
                    <IoPersonCircleOutline color="white" size={40} />
                  </Flex>
                </Link>
              </Flex>
            </>
          )}
        </Flex>
      </div>
      <Collapse in={isOpen} animateOpacity></Collapse>
    </Box>
  );
}
