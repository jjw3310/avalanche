// import React from "react";
// import { Box, Flex, Text, Link } from "@chakra-ui/react";

// export default function Nfts() {
//   return (
//     <div>
//       <Flex
//         alignItems={"center"}
//         justify={"center"}
//         flexDir={"column"}
//         bgColor={"aquamarine"}
//         height={"200px"}
//       >
//         <Text fontSize="6xl" fontWeight="extrabold">
//           This is NFT's Component!
//         </Text>
//         <Text></Text>
//         <Link
//           href="https://aslanacademy.oopy.io/"
//           isExternal
//           fontSize={"xl"}
//           color={"orange.600"}
//         >
//           visit to Aslan Academy
//         </Link>
//       </Flex>
//     </div>
//   );
// }

import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import NftCard from "./NftCard";
export default function Nfts({ page, mintedNft }) {
  const [selectedPage, setSelectedPage] = useState(1);
  const [nfts, setNfts] = useState();
  const getNfts = async (p) => {
    try {
      let nftArray = [];

      //한 번 비워주고 시작
      setNfts();
      for (let i = 0; i < 3; i++) {
        //   for (let i = 0; i < 10; i++) {
        const tokenId = i + 1 + (p - 1) * 3;
        // console.log(tokenId);
        let response = await axios.get(
          `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
        );
        nftArray.push({ tokenId, metadata: response.data });
        console.log(process.env.REACT_APP_JSON_URL);
      }
      setNfts(nftArray);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickPageChange = (p) => () => {
    setSelectedPage(p);
    getNfts(p);
  };

  const pageComp = () => {
    let pageArray = [];

    for (let i = 0; i < page; i++) {
      pageArray.push(
        <button
          key={i}
          className={`ml-4 text-2xl font-bold hover:text-white ${
            i + 1 === selectedPage ? "text-white" : "text-gray-400"
          }`}
          onClick={onClickPageChange(i + 1)}
        >
          {i + 1} <span className="text-base">페이지</span>
        </button>
      );
    }
    return pageArray;
  };

  //   이 방식이 리액트에서 공식적으로 권장하는 방식
  //   const pageComp = () => {
  //     let pageArray = [];

  //     for (let i = 0; i < page; i++) {
  //       pageArray.push(
  //         <button
  //           key={i}
  //           className={`ml-4 text-2xl font-bold hover:text-white ${
  //             i + 1 === selectedPage ? "text-white" : "text-gray-400"
  //           }`}
  //           onClick={() => onClickPageChange(i)}
  //         >
  //           {i + 1} <span className="text-base">페이지</span>
  //         </button>
  //       );
  //     }
  //     return pageArray;
  //   };

  //   const onClickPageChange = (p) => {
  //     setSelectedPage(p);
  //   };
  //   useEffect(() => {
  //     // console.log(page);
  //     getNfts(page);
  //   }, [page]);

  useEffect(() => {
    console.log(nfts);
    getNfts(page);
  }, [page]);

  return (
    <div className="max-w-screen-xl mx-auto pt-4">
      <div>{pageComp()}</div>
      <ul className="mt-8 grid grid-cols-1 xl:grid-cols-2 justify-items-center gap-8">
        {nfts ? (
          nfts.map((v, i) => {
            return (
              <NftCard
                key={i}
                tokenId={v.tokenId}
                metadata={v.metadata}
                mintedNft={mintedNft}
              />
            );
          })
        ) : (
          <div>로딩중입니다...</div>
        )}
      </ul>
    </div>
  );
}

//강사님 코드
// import axios from "axios";
// import { useEffect, useState } from "react";

// const Nfts = ({ page }) => {
//   const [selectedPage, setSelectedPage] = useState(1);
//   const [nfts, setNfts] = useState();

//   const getNfts = async (p) => {
//     try {
//       let nftArray = [];

//       for (let i = 0; i < 10; i++) {
//         const tokenId = i + 1 + (p - 1) * 10;

//         let response = await axios.get(
//           `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
//         );

//         nftArray.push({ tokenId, metadata: response.data });
//       }

//       setNfts(nftArray);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const onClickPage = (p) => () => {
//     setSelectedPage(p);
//   };

//   const pageComp = () => {
//     let pageArray = [];

//     for (let i = 0; i < page; i++) {
//       pageArray.push(
//         <button
//           key={i}
//           className={`ml-4 text-2xl font-bold hover:text-white ${
//             i + 1 === selectedPage ? "text-white" : "text-gray-400"
//           }`}
//           onClick={onClickPage(i + 1)}
//         >
//           {i + 1} <span className="text-base">페이지</span>
//         </button>
//       );
//     }

//     return pageArray;
//   };

//   useEffect(() => {
//     console.log(nfts);
//   }, [nfts]);

//   useEffect(() => {
//     getNfts(1);
//   }, []);

//   return (
//     <div>
//       <div>{pageComp()}</div>
//     </div>
//   );
// };

// export default Nfts;
