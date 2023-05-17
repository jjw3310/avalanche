import React from 'react'
import styled from "styled-components";
import { forwardRef } from "react";
import { Link, OutLet } from "react-router-dom";
// import ImgAslanLogo from "@assets/images/AslanLogo.png"
// import ImgIntroTeam from "@assets/images/introduceTeamPic.png"

import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";


const Container = styled.div`
  width: 100%;
  height: 150vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
`;

const ContentWrap = styled.div`
  flex-direction: row;
  display: flex;
  margin-left: 50px;
  padding-left: 20px;
  padding-right: 50px;
  padding-top: 150px;
`;



const LeftBar = styled.main`
  justify-content: flex-start;
  width: 220px;
  /* align-items: stretch; */
  height: 100%;
  /* background-color: purple; */
`;

const FilterBox = styled.main`
  width: 220px;
  height: 560px;
  /* background-color: yellow; */
  border-radius: 20px;
  position: relative;
`;

const FilterBoxSetting = styled.div`
  width: 165px;
  height: 350px;
  /* background-color: pink; */
  left:25px;
  top:35px;
  position: absolute;
  align-items: center;
  justify-content: flex-start;

`;

const FilterTitleBox = styled.div`
  width: 165px;
  height: 80px;
  /* background-color: green; */
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

`;

const FilterText = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: white;
`;

const FilterBoxes = styled.div`
  width: 100%;
  height: 80px;
  /* background-color: blueviolet; */
  border-bottom: 3px solid #B38B30;
  display: flex;
  align-items: center;
  padding-top: 20px;
`;

const FilterBoxesText = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: #B38B30;
`;

const LeftSideBar = () => {
  return (
    <>      
      <LeftBar>
          <FilterBox>
            <FilterBoxSetting>
              <FilterTitleBox>

                <FilterText>
                  학회
                </FilterText>
                <FilterBoxes>
                    <Link to="/Introduce">
                      <FilterBoxesText>
                        소개
                      </FilterBoxesText>
                    </Link>
                </FilterBoxes>


                <FilterBoxes>
                  <Link to="/Introduce/Notice">
                    <FilterBoxesText>
                      공지사항
                    </FilterBoxesText>
                  </Link>
                </FilterBoxes>


                <FilterBoxes>
                  <Link to="/Introduce/SocietyNews">
                    <FilterBoxesText>
                      학회 소식
                    </FilterBoxesText>
                  </Link>
                </FilterBoxes>


                <FilterBoxes>
                  <Link to="/Introduce/OrganizationChart">
                    <FilterBoxesText>
                      조직도
                    </FilterBoxesText>
                  </Link>
                </FilterBoxes>

              </FilterTitleBox>
            </FilterBoxSetting>
          </FilterBox>
        </LeftBar>
    </>
  );
};

export default LeftSideBar;