import {
  Box,
  SimpleGrid,
  Flex,
  chakra,
  Text,
  Divider,
  Image,
  Button,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import rocket from "@assets/images/rocket.png";
import arrowIcon from "@assets/images/arrowIcon.png";

const Introduce = forwardRef((props, ref) => {
  return (
    <Box 
      ref={ref} 
      // borderBottom={"solid 1px #C1C1C1"} 
      py={"10px"} 
      bgGradient={"linear(to-l,#8c1eaa,#272842)"}
    >
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="20" m={"80px"} marginBottom={"100px"}>
        <Box 
          justifyContent={"center"} 
          alignItems={"center"} 
        >
          <Flex direction={"row"} justify={"space-around"}>
            <Text
              fontWeight={"700"}
              fontStyle={"normal"}
              fontSize={{ base: "30px", md: "48px" }}
              lineHeight={"57px"}
            >
              Own the Moments <br/>
              that Matter Most
            </Text>
          </Flex>

        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Flex direction={"column"} justify={"center"}>
            <Text
              fontWeight={"500"}
              fontStyle={"normal"}
              fontSize={{ base: "10px", md: "15px" }}
              lineHeight={"30px"}
            >
              Create unforgettable experiences on our web3 platform.  <br/>
              Own and share your most cherished dates with others.  <br/>
              Join now and make lasting memories.  <br/>
            </Text>
            <Flex>
              <Image src={rocket} justifyContent={"center"} alignItems={"center"} boxSize={{ sm: "15px", md: "15px" }} />
              <Text
                fontWeight={"500"}
                fontStyle={"normal"}
                fontSize={{ base: "10px", md: "15px" }}
                lineHeight={"30px"}
              >
                Buy Your First Date Today
              </Text>  
            </Flex>
            <Button
              w={"150px"}
              borderRadius={"50px"}
            >
              <Text
                fontWeight={"500"}
                fontStyle={"normal"}
                fontSize={{ base: "10px", md: "15px" }}
                lineHeight={"30px"}
              >
                Buy Your Date
              </Text>
              <Image src={arrowIcon} />
            </Button>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  );
});

export default Introduce;
