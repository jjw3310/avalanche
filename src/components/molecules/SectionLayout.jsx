import styled from "styled-components";

const Container = styled.div`
  padding: 30px 16px;
  display: grid;
  height: 150px;
  width:100%;
  background: black;
`;

function SectionLayout({ children }) {
  return <Container>{children}</Container>;
}

export default SectionLayout;
