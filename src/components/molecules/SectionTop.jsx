import React from "react";
import styled from "styled-components";
import * as colors from "@styles/colors";

const SectionTopWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;

`;

const SectionTitle = styled.span`
  font-size: 50px;
  font-weight: 700;
  color: ${colors.titleColor};
`;
const ShowAllText = styled.span`
  font-size: 14px;
  margin-right: 4px;

`;

export default function SectionTop({ title, showAll }) {
  return (
    <SectionTopWrapper>
      <SectionTitle>{title}</SectionTitle>
      <ShowAllText>{showAll}</ShowAllText>
    </SectionTopWrapper>
  );
}
