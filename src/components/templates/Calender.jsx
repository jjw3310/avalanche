import { Box, Flex, Img } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import moment from "moment";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import TodayNftCard from "@components/atoms/TodayNftCard";
import { useWeb3 } from "@hooks/useAvax";

const Calender = ({
  // selected,
  // onSelectDate,
  // totalNft,
  mintedNft,
  // myNft,
  page,
  todayNftImg,
  todayNftMinted,
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [value, onChange] = useState(new Date());

  const [isMinted, setIsMinted] = useState();
  const [todayNftUrl, setTodayNftUrl] = useState();
  const { dateContract, getContracts } = useWeb3();
  const [className, setClassName] = useState("react-calendar");

  const [imgurl, setImgurl] = useState("");
  const [rerender, setRerender] = useState(false);
  useEffect(() => {
    getContracts();
  }, []);

  var year = selectedDate.getFullYear();
  var month = ("0" + (1 + selectedDate.getMonth())).slice(-2);
  var day = ("0" + selectedDate.getDate()).slice(-2);
  let todayYYYYMMDD = year + month + day;

  const CalendarContainer = styled.div`
    /* ~~~ container styles ~~~ */
    /* max-width: 600px; */
    /* margin: auto; */
    /* margin-top: 20px; */
    background-color: white;
    //ng: 10px;
    border-radius: 30px;
    height: 100%;
  `;

  const getNftImg = async () => {
    let dates = document.querySelectorAll(".react-calendar__tile");
    for (let i = 0; i < dates.length; i++) {
      // console.log(dates[i]);
      let korDate = dates[i].innerHTML.split('"')[1];
      let divided = korDate.split(" ");
      let numYear = divided[0].split("년")[0];
      let numMonth =
        divided[1].split("월")[0].length > 1
          ? divided[1].split("월")[0]
          : "0" + divided[1].split("월")[0];
      let numDay =
        divided[2].split("일")[0].length > 1
          ? divided[2].split("일")[0]
          : "0" + divided[2].split("일")[0];
      const _yyyymmdd = numYear + numMonth + numDay;
      const imgurl = await chkMinted(_yyyymmdd);
      // console.log("imgurl : ", imgurl);
      if (imgurl.length > 1) {
        console.log("imgurl.length > 1");
        var img = new Image(80, 80);
        img.src = imgurl;
        dates[i].append(img);
        console.log("DATEs[i] : ", dates[i]);
        // setImgurl(dates[i]);
        setRerender(true);
        console.log("asd");
      }
    }
  };

  // const tileHandler = this.handleDayColors.bind(this);
  const addImg = ({ date }) => {
    if (!dateContract) return;
    const contents = [];
    const _yyyymmdd =
      date.getFullYear().toString() +
      (date.getMonth() >= 10
        ? date.getMonth().toString()
        : "0" + date.getMonth()) +
      (date.getDate() >= 10 ? date.getDate().toString() : "0" + date.getDate());
    // const imgurl = await chkMinted(_yyyymmdd);
    const imgurl = "";
    // console.log("imgurl : ", imgurl);
    if (imgurl.length > 1) {
      contents.push(
        <div>
          <image src={imgurl} width={"80px"} height={"80px"} />
        </div>
      );
    }
    return <div>{contents}</div>;
  };

  const chkMinted = async (_yyyymmdd) => {
    const result = await dateContract.methods.getDayNftInfo(_yyyymmdd).call();
    // console.log("result  : ", result);
    if (result.showDefaultImg) {
      // console.log("result.imgUrl : ", result.imgUrl);
      return result.imgUrl;
    } else return "";
  };

  useEffect(() => {
    if (dateContract) {
      getNftImg();
    }
  }, [dateContract, rerender]);

  useEffect(() => {
    if (todayNftMinted) {
      setIsMinted(todayNftMinted.minted);
      // showDefaultImg = false => show defaultImg
      // showDefaultImg = true  => show  selectedImg
      // setIsSelectedImg(todayNftMinted.showDefaultImg);
      // console.log("setIsMinted : ", isMinted);
      // console.log("DefaultImg : ", isSelectedImg, isMinted);
    }
  }, [todayNftMinted, isMinted]);

  return (
    <>
      <Box
        // ref={ref}
        w={"100%"}
        h={"600px"}
        // bgGradient={"linear(to-l,#8c1eaa,#272842)"}
        // paddingBottom={"200px"}
      >
        {/* scrollIntoView용 Box(계속 제목을 가려서 breakpoint 만듬) */}
        <Flex
          alignItems={"flex-start"}
          direction={{ base: "column-reverse", md: "row" }}
          justify={"flex-end"}
          px={{ base: "20px", sm: "30px", lg: "50px" }}
          align={"center"}
          h="100%"
          pt={5}
          pb={5}
        >
          <Box borderRadius={"30px"} h="100%" bg="tomato" mr={"20px"} flex="2">
            <div style={{ height: "100%" }}>
              <CalendarContainer
                style={{ height: "100%", backgroundColor: "white" }}
              >
                <Calendar
                  selected={selectedDate}
                  calendarType="US"
                  minDetail="decade"
                  onSelectDate={setSelectedDate}
                  className={className}
                  style={{ backgroundColor: "white" }}
                  onChange={onChange}
                  value={value}
                  formatDay={(locale, date) => moment(date).format("D")}
                  // tileContent={getNftImg()}
                />
              </CalendarContainer>
            </div>
          </Box>
          {/* 큰 캘린더 */}

          <TodayNftCard
            isMinted={isMinted}
            todayNftUrl={todayNftUrl}
            selectedYYYYMMDD={todayYYYYMMDD}
          />
        </Flex>
      </Box>
    </>
  );
};

export default Calender;
