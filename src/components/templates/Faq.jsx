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
    <Flex bgGradient={"linear(to-l,#8c1eaa,#272842)"}>
    <Section ref={ref} >
        <Title>Faq</Title>
        <Container>
            <Box>
                <Accordion title="민팅은 언제인가요?">
                    <FaqText>
                        2023년 6월 정도로 예상하고 있습니다! 자세한 일정은 추후 아슬란 아카데미/NFT SNS (디스코드, 트위터, 텔레그램 등) 을 통해 공지해 드리겠습니다.
                    </FaqText>
                </Accordion>
                <Accordion title="연구분야 제안 및 투표는 어디서 하죠?" >
                    <FaqText>
                        아슬란 아카데미 디스코드(https://discord.gg/ExD7EtmBdc) 에 홀더들만을 위한 투표 채널이 개설될 예정입니다! 해당 채널에서 연구분야 투표를 포함하여 아슬란 NFT의 미래 방향성 투표 등 모든 투표가 이루어질 예정입니다!
                    </FaqText>
                </Accordion>
                <Accordion title="고급 자료들은 어디서 볼 수 있죠?">
                    <FaqText>
                        고급 자료를 포함한 아슬란 아카데미의 모든 자료들은 아슬란 아카데미 웹사이트 (https://alsanacademy.vercel.app/) 에서 확인하실 수 있습니다!
                    </FaqText>
                </Accordion>
            </Box>
            <Box>
                <Accordion title="블록체인 관련 질문을 하고 싶어요!">
                    <FaqText>
                       아슬란 아카데미 디스코드(https://discord.gg/ExD7EtmBdc) 를 들어오시면 마음껏 질문하시고 답변을 받으실 수 있습니다! 편하게 들어오셔서 블록체인 업계 종사자, 전문가, 학생들과 자유롭게 소통해봐요!
                    </FaqText>
                </Accordion>
                <Accordion title="컨퍼런스란?">
                    <FaqText>
                        아슬란 컨퍼런스는 8개월간의 학회 활동을 끝으로 연구부서에서 연구한 결과를 발표하는 자리입니다. 해당 컨퍼런스에는 업계 전문가들이나 현업자들을 연사로 초청할 예정이며, 자금이 넉넉하지 않은 신생 블록체인 관련 기업 및 프로젝트들을 대상으로 신청을 받고 심사를 거처 컨퍼런스에서 무상으로 부스를 제공해 주는 등 “블록체인 업계의 발전에 기여“라는 아슬란 아카데미의 목표를 이루기 위한 여러 프로그램을 구성할 예정입니다. 첫 컨퍼런스는 2023년 9월로 예정되어 있습니다.
                    </FaqText>
                </Accordion>
                <Accordion title="워케이션이란?">
                    <FaqText>
                        워케이션 이벤트는 홀더들만 대상으로 진행하는 행사로, 힐링을 할 수 있는 휴양지에서 진행되는 1박 2일 (예정)의 네트워킹 및 해커톤 이벤트입니다. 평소에 자신이 갖고 있었던 좋은 아이디어를 다른 홀더들과 이야기를 나누며 피드백을 받고 마음이 맞는 팀원까지 구해볼 수 있는 자리가 될 것입니다. 또한 학회 측에서 초청할 멘토들 (현업 전문가)과 소통할 기회 역시 얻을 수 있으며, 1박 2일간 멘토 분들의 피드백과 최종 심사 등 아이디어에 대한 평가까지 직접 받아볼 수 있는 자리가 될 것입니다.
                    </FaqText>
                </Accordion>
            </Box>
        </Container>
    </Section >
    </Flex>
  )
});


export default Faq;
