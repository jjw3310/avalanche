import {
  Box,
  Button,
  Image,
  Popover,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
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
    if (selectedYYYYMMDD) {
      setImgSrc(selectedYYYYMMDD);
      console.log("imgSrc : ", imgSrc);
    }
  }, [selectedYYYYMMDD]);

  useEffect(() => {
    if (dateContract) {
      console.log(dateContract.methods);
    }
  }, [dateContract]);

  const mintNft = async function () {
    let res = await dateContract.methods
      .mintCommon("2023", selectedYYYYMMDD, address)
      .send({ from: address });
    console.log("mintNft:", res);
  };
  return (
    <Box borderRadius={"30px"} h="100%" bg="white" ml={"20px"}>
      <Box w="350px" position={"relative"}>
        <Image
          h={"556px"}
          src={`${PINATA_IMG_BASE_URL + imgSrc + ".png"}`}
        ></Image>
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
            Buy Your Date
          </Text>
          <Box ml={2}>
            <BsArrowRight color="black" />
          </Box>
        </Button>
      </Box>
    </Box>
  );
}
