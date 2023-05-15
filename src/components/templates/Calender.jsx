import {
  Box,
  SimpleGrid,
  Flex,
  chakra,
  Text,
  Divider,
  Image,
} from "@chakra-ui/react";
import { forwardRef } from "react";
// import jiminNFT from "@assets/images/jimin.png";
// import BasicNFT from "@assets/images/BasicLion.png";

const Calender = forwardRef((props, ref) => {
  return (
    <Box 
      ref={ref} 
      // borderBottom={"solid 1px #C1C1C1"} 
      py={"10px"} 
      bgGradient={"linear(to-l,#8c1eaa,#272842)"}
    >
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="20" m={"80px"} marginBottom={"200px"}>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} >
          <Flex direction={"column"} justify={"center"}>
            <chakra.h1
              fontWeight={"700"}
              fontStyle={"normal"}
              fontSize={{ base: "30px", md: "48px" }}
              lineHeight={"57px"}
            >
              아슬란 NFT란?
            </chakra.h1>
            <Divider
              my={"30px"}
              width={"50%"}
              borderStyle={"solid"}
              borderWidth={"thin"}
              // borderColor={"gray.300"}
            />
            <Text
              fontFamily={"IBMPlexSansKR-Regular"}
              fontWeight={"700"}
              fontSize={"14px"}
              color={"#797979"}
              w={{ base: "200px", sm: "350px", md: "500px" }}
            >
              아슬란 아카데미는 “블록체인 기술과 정보의 대중화”의 취지에 맞게
              모두가 참여할 수 있는 커뮤니티를 생성하고, <br />
              10,000개의 멤버십 기반 유틸리티 NFT를 발행 후 판매하여 커뮤니티를
              더 강화할 예정입니다. <br />
              <br />
              기본적으로 아슬란 아카데미의 커뮤니티와 자료들은 모두가 열람할 수
              있되, 특정 커뮤니티 채널(홀더 채팅방 등)과 특정 심화 자료들은 NFT
              홀더들에게만 오픈이 될 예정입니다. <br />
              <br />
              또한, 홀더들만 참가할 수 있는 이벤트 개최, 학회 연구 분야 및 자료
              주제 선정 투표권 등 다른 여러 혜택도 제공될 예정입니다. <br />
              <br />
              NFT를 판매하여 모은 후원금은 학회 운영 자금으로 활용됩니다. 이러한
              기관이나 기업 등, 대형 단체가 제공하는 후원에 의존하지않는 모금
              구조는 아슬란 아카데미의 독립성을 보장할 것입니다.
            </Text>
          </Flex>
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          {/* <Image src={BasicNFT} boxSize={{ sm: "250px", md: "500px" }} /> */}
        </Box>
      </SimpleGrid>
    </Box>
  );
});

export default Calender;
