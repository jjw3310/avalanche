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
import { useNavigate, useLocation } from "react-router-dom";

import { Connect } from "../connect";
import { useWeb3ConnectionContext } from "../context/web3Connection.context";

export default function NavBar({
  callSignUp,
  handleClick,

  setInputId,
  inputId,
  setInputPass,
  inputPass,
  // account,
  currentVisibleIndex,
  onClickNavLink,
  signUp,
  signIn,
  address,
  setAccount,
  account,
  // account,
}) {
  // const location = useLocation();
  const { isOpen, onToggle } = useDisclosure();
  const [isHovered, setIsHovered] = useState(false);
  // const account = location.state?.account;
  // const history = useHistory();
  const navigate = useNavigate();

  const [scrollPosition, setScrollPosition] = useState(0);

  const { provider, hooks } = useWeb3ConnectionContext();

  useEffect(() => {
    console.log("provider : ", provider);
    console.log("hooks:" + hooks);
  });

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    updateScroll();
    // console.log("hello1@!!@" + account);
  }, [account]);
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
          <Connect />
          {/* {!account ? (
            <>
              <Button
                borderRadius={"50px"}
                _hover={{ bg: "purple.500" }}
                mt={"20px"}
                onClick={signUp}
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
                      onClick={() => navigate("/signup")}
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
                      onClick={() => navigate("/signin")}
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
          )} */}
        </Flex>
      </div>
      <Collapse in={isOpen} animateOpacity></Collapse>
    </Box>
  );
}
