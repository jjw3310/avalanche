import { Flex } from "@chakra-ui/react";
import Accordion from '@components/atoms/Accordion';
import React from 'react'
import styled from 'styled-components';
import { forwardRef } from "react";

const Section = styled.section`
    min-height: 100vh;
    width: 100%;
    position: relative;
    // color: ${(props) => props.theme.body};
    background-color: gray.900;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // border-bottom: solid 1px #C1C1C1; 
`

const Title = styled.h1`
    text-align: center;
    padding-top: 100px;
    font-weight: 700;
    font-size: 48px;
    font-style: normal;
    line-height: 57px;
    text-transform: uppercase;
    // color: ${(props) => props.theme.body};
    margin: 1rem auto;
    width: fit-content;
`

const Container = styled.div`
    width: 75%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    align-content: center;
`

const Box = styled.div`
    width: 45%;
`

const FaqText = styled.div`
    line-height: 20px;
`

const Faq = forwardRef((props, ref) => {
    return (
    <Flex 
        bgGradient={"linear(to-l,#8c1eaa,#272842)"}
        color={"Black"}
    >
    <Section ref={ref} >
        <Title>Faq</Title>
        <Container>
            <Box>
                <Accordion title="Date's 란?">
                    <FaqText>
                        이러한 질문을 통해 새로운 프로젝트의 concept이 어떤 점에서 기존의 프로젝트와 다르며, 어떤 장단점이 있는지 파악할 수 있습니다. 이에 따라 프로젝트에 대한 이해도를 높일 수 있고, 향후 프로젝트에 대한 기대와 관심을 가지게 될 가능성이 높아집니다.
                    </FaqText>
                </Accordion>
                <Accordion title="민팅플랜?">
                    <FaqText>
                        이러한 질문을 통해 새로운 프로젝트의 concept이 어떤 점에서 기존의 프로젝트와 다르며, 어떤 장단점이 있는지 파악할 수 있습니다. 이에 따라 프로젝트에 대한 이해도를 높일 수 있고, 향후 프로젝트에 대한 기대와 관심을 가지게 될 가능성이 높아집니다.
                    </FaqText>
                </Accordion>
                <Accordion title="로드맵?" >
                    <FaqText>
                        이러한 질문을 통해 새로운 프로젝트의 concept이 어떤 점에서 기존의 프로젝트와 다르며, 어떤 장단점이 있는지 파악할 수 있습니다. 이에 따라 프로젝트에 대한 이해도를 높일 수 있고, 향후 프로젝트에 대한 기대와 관심을 가지게 될 가능성이 높아집니다.
                    </FaqText>
                </Accordion>
            </Box>
            <Box>
                <Accordion title="NFT로 할 수 있는 Contents들은 무엇이 있나요?">
                    <FaqText>
                        이러한 질문을 통해 새로운 프로젝트의 concept이 어떤 점에서 기존의 프로젝트와 다르며, 어떤 장단점이 있는지 파악할 수 있습니다. 이에 따라 프로젝트에 대한 이해도를 높일 수 있고, 향후 프로젝트에 대한 기대와 관심을 가지게 될 가능성이 높아집니다.
                    </FaqText>
                </Accordion>
                <Accordion title="Selling point는 무엇이라고 생각하나요?">
                    <FaqText>
                        이러한 질문을 통해 새로운 프로젝트의 concept이 어떤 점에서 기존의 프로젝트와 다르며, 어떤 장단점이 있는지 파악할 수 있습니다. 이에 따라 프로젝트에 대한 이해도를 높일 수 있고, 향후 프로젝트에 대한 기대와 관심을 가지게 될 가능성이 높아집니다.
                    </FaqText>
                </Accordion>
                <Accordion title="NFT Benefit 어떻게 활용할 수 있나요?">
                    <FaqText>
                        이러한 질문을 통해 새로운 프로젝트의 concept이 어떤 점에서 기존의 프로젝트와 다르며, 어떤 장단점이 있는지 파악할 수 있습니다. 이에 따라 프로젝트에 대한 이해도를 높일 수 있고, 향후 프로젝트에 대한 기대와 관심을 가지게 될 가능성이 높아집니다.
                    </FaqText>
                </Accordion>
            </Box>
        </Container>
    </Section >
    </Flex>
    )
});


export default Faq;
