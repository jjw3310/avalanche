import React, { useState, useEffect } from "react";
import { Calendar, CalendarDay, CalendarMonth } from "react-calendar";
import MyCalendar from "./MyCalendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3Config";
// import Nfts from "../components/Nfts";
const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

console.log(contract);
const CalendarComponent = ({ totalNft, mintedNft, myNft }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [images, setImages] = useState(["ss", "sa"]);
  const [formatDate, setFormatDate] = useState(["aa", "bb"]);
  const [nfts, setNfts] = useState(["", "h"]);
  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${selectedDate.toISOString()}/`
      );
      const data = await response.json();
      // setImages(data);
    };
    fetchImages();
  }, [selectedDate]);
  const today = new Date();
  let formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "UTC",
  });
  useEffect(() => {
    setFormatDate(formattedDate);
  }, [formatDate]);
  console.log(formattedDate);

  const CalendarContainer = styled.div`
    /* ~~~ container styles ~~~ */
    max-width: 600px;
    margin: auto;
    margin-top: 20px;
    background-color: #d4f7d4;
    padding: 10px;
    border-radius: 3px;
  `;
  // const CalendarContainer = styled.div`
  //   /* ~~~ container styles ~~~ */
  //   /* ... */

  //   /* ~~~ navigation styles ~~~ */
  //   .react-calendar__navigation {
  //     display: flex;
  //     background-color: black;

  //     .react-calendar__navigation__label {
  //       font-weight: bold;
  //       background-color: black;
  //     }

  //     .react-calendar__navigation__arrow {
  //       flex-grow: 0.333;
  //       background-color: black;
  //     }
  //   }
  // `;
  const web3 = require("web3");
  const { ethers } = require("ethers");

  // 지갑 주소 입력
  const walletAddress = "0x0c4E3dAc7B9595329911C21331E311E0E0Bf3ad5";

  // 지갑의 NFT 목록 가져오기
  const getNfts = async () => {
    try {
      const nfts = await web3.eth.getNFTs(walletAddress);
      setNfts(nfts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNfts();
    console.log(nfts.image.url);
  }, []);

  // NFT 목록 반복
  // for (const nft of nfts) {
  //   // NFT 이름 출력
  //   console.log(nft.name);

  //   // NFT 설명 출력
  //   console.log(nft.description);

  //   // NFT 이미지 출력
  //   console.log(nft.image);
  // }

  return (
    <div>
      <CalendarContainer>
        <Calendar
          selected={selectedDate}
          calendarType="US"
          minDetail="decade"
          onSelectDate={setSelectedDate}
          className="react-calendar"
          style={{ backgroundColor: "white" }}
          // style={{ "background-color": "black" }}
        />
      </CalendarContainer>
      <div>
        {nfts.map((image, index) => (
          <img key={index} src={image.url} alt={image.title} />
        ))}
      </div>
      <div className="text-gray-500 mt-4">{formattedDate}</div>
      {/* <MyCalendar /> */}
    </div>
  );
};

export default CalendarComponent;
