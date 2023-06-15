import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useWallet, useWeb3 } from "@hooks/useAvax";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { PINATA_IMG_BASE_URL } from "src/web3.config";

export default function NotMintedCard({ selectedYYYYMMDD }) {
  const [imgSrc, setImgSrc] = useState();
  const { dateContract, getContracts } = useWeb3();
  const { address, getAddress } = useWallet();

  useEffect(() => {
    getContracts();
    getAddress();
  }, []);

  useEffect(() => {
    if (selectedYYYYMMDD) {
      setImgSrc(selectedYYYYMMDD);
      // console.log("imgSrc : ", imgSrc);
    }
  }, [selectedYYYYMMDD]);

  const mintNft = async function () {
    let res = await dateContract.methods
      .mintCommon("2023", selectedYYYYMMDD, address)
      .send({ from: address });
    // console.log("mintNft:", res);
  };
  return (
    <Box borderRadius={"30px"} h="100%" w={"380px"} bg="white" ml={"20px"}>
      <Box
        h={"100%"}
        w="100%"
        position={"relative"}
        bgImage="https://gateway.pinata.cloud/ipfs/QmNmkuE5unrYNEFNApLAEC2K3kciZ6QiiKUTxUrirvpLxt/dates/202305/basic.png"
        bgSize="100% 100%"
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
      >
        {/* <Image
        h={"556px"}
        // src={imgSrc ? `${PINATA_IMG_BASE_URL + imgSrc + ".png"}` : ""}
        src="https://gateway.pinata.cloud/ipfs/QmNmkuE5unrYNEFNApLAEC2K3kciZ6QiiKUTxUrirvpLxt/dates/202305/basic.png"
      ></Image> */}
        <Flex
          h={"100%"}
          direction={"column"}
          justifyContent={"flex-end"}
          alignItems={"flex-end"}
        >
          <Box m={"20px"}>
            <Button
              w={"160px"}
              borderRadius={"50px"}
              _hover={{ bg: "purple.500" }} // hover 시 배경색 변경
            >
              <Text
                fontWeight={"500"}
                fontStyle={"normal"}
                fontSize={{ base: "10px", md: "16px" }}
                lineHeight={"30px"}
                justifyContent={"center"}
                alignItems={"center"}
                color={"black"}
                onClick={() => {
                  mintNft();
                }}
              >
                Mint the date
              </Text>
              <Box ml={2}>
                <BsArrowRight color="black" />
              </Box>
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
