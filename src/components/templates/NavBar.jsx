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
} from "@chakra-ui/react";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function NavBar({ currentVisibleIndex, onClickNavLink }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box top={0} width={"100%"} bgGradient={"linear(to-l,#8c1eaa,#272842)"}>
      <Flex minH={"60px"} py={{ base: 2 }} px={{ base: 4 }} align={"space-around"}>
        <Flex flex={{ base: 1 }} ml={"12px"} alignItems={"center"}>
          <a href="/">
            <Box width={70} cursor={"pointer"}>
              <Text color={"white"}>Date's</Text>
            </Box>
          </a>
        </Flex>

        <Button borderRadius={"50px"} _hover={{ bg: "purple.500" }} mt={"20px"}>
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

        <Flex
          ml={"20px"}
          mr={"40px"}
          mt={"10px"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
          transition="transform 0.3s ease-in-out"
          transform={
            isOpen
              ? "translateY(0)"
              : "translateY(5px)"
          }
          _hover={{
            transform: "translateY(-5px)",
          }}
        >
          <IoPersonCircleOutline color="white" size={40} />
          <IoPersonCircleOutline
            color="#dd9c4f"
            size={40}
            position="absolute"
            top={0}
            left={0}
            opacity={0}
            transition="top 0.3s ease-in-out, opacity 0.3s ease-in-out"
            _groupHover={{
              opacity: 1,
              top: "5px",
              transition: "top 0.3s ease-in-out, opacity 0.3s ease-in-out",
            }}
          />
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity></Collapse>
    </Box>
  );
}
