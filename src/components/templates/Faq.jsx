import { Flex } from "@chakra-ui/react";
import Accordion from "@components/atoms/Accordion";
import React from "react";
import styled from "styled-components";
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
`;

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
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const Box = styled.div`
  width: 45%;
`;

const FaqText = styled.div`
  line-height: 20px;
`;

const Faq = forwardRef((props, ref) => {
  return (
    <Flex
      // bgGradient={"linear(to-l,#8c1eaa,#272842)"}
      color={"white"}
      fontFamily={"Raleway"}
      fontStyle={"normal"}
      fontWeight={"700"}
      fontSize={"16px"}
      lineHeight={"23px"}
    >
      <Section ref={ref}>
        <Title>Faq</Title>
        <Container>
          <Box>
            <Accordion title="What is Date's ?">
              <FaqText>
                Date's is a social project centered around the concept of NFTs
                (Non-Fungible Tokens) related to dates. It aims to provide a
                platform where individuals can own, share, and cherish their
                most special days through a social Web 3.0 service website. The
                project offers various functions, including date ownership,
                allowing users to mint and edit their dates, which can then be
                visible and shareable with others on the website. Additionally,
                there is a guest book feature to share and store memories
                associated with specific dates. Users can also create personal
                pages with features such as adding friends, direct messaging,
                checking and sharing their NFTs, as well as profile status and
                photo decoration options. The project incorporates a leaderboard
                where users can check the value of dates, engage in competitions
                based on likes and scarcity, and enjoy gaming elements. In
                summary, Date's is a unique NFT-based social project that
                focuses on the significance of dates, enabling users to create
                and share unforgettable experiences in a digital format.
              </FaqText>
            </Accordion>
            <Accordion title="What would Minting Plan be for the project?">
              <FaqText>
                (Q3 2023): - The official launch of the Date's service is
                scheduled for the third quarter of 2023. <br />- Users will be
                able to mint dates throughout the year, with a total of 365 days
                available for minting. <br />- Minting will operate on a
                first-come, first-served basis, allowing users to secure their
                desired dates. <br />
                1. Past Year Minting: <br />- After the initial service launch,
                Date's will introduce minting options for past years' dates.{" "}
                <br />- Users will have the opportunity to mint specific years
                within the past 100 years, based on their demand and
                preferences. <br />- Instead of minting a continuous 100-year
                range, Date's aims to match the minting with user demand. For
                example, users may choose to mint dates for the past 1 year, 3
                years, or 5 years. <br />- This approach helps maintain the
                scarcity and uniqueness of each minted date.
                <br />
                2. Future Year Minting (starting with 2024):
                <br /> - Date's plans to introduce minting options for future
                years' dates, starting with the year following the service
                launch. <br />- The minting of future year dates will occur a
                few days before the start of the respective year. <br />- This
                special minting event will create a sense of excitement, similar
                to an auction, as users compete to mint dates for the upcoming
                year. <br />- The competitive nature and limited availability of
                future year dates contribute to the overall scarcity and value
                of the Date's NFTs. Throughout the roadmap, Date's aims to
                provide users with a platform where they can own, share, and
                cherish significant dates in their lives. The project leverages
                Web 3.0 technology to create a unique and valuable social
                experience centered around the concept of dates.
              </FaqText>
            </Accordion>
            <Accordion title="What is your roadmap?">
              <FaqText>
                - Q3 2023: Service Launch & Initial Features <br />- Launch the
                Date's platform, allowing users to mint, buy, and sell date
                NFTs. <br />- Implement core features, including date editing,
                guest book functionality, and basic profile customization.{" "}
                <br />- Integrate the Core Wallet and Smart Contracts for secure
                transactions. <br />- Q4 2023: User Experience Enhancement &
                Community Growth <br />- Continuously improve the user interface
                and experience based on user feedback. <br />- Expand community
                engagement through targeted marketing campaigns and social media
                initiatives. <br />- Explore partnerships and collaborations to
                increase platform visibility.
                <br />
                2024 - Q1 2024: Mobile Application Development & Marketplace
                Introduction <br />- Begin development of a dedicated mobile
                application for Date's. <br />- Introduce the Date's
                marketplace, allowing users to discover, buy, and sell date
                NFTs. <br />- Enhance user profile customization options. <br />
                - Q2 2024: Social Sharing Integration & Collaborations <br />-
                Integrate social media sharing functionalities within the Date's
                platform. <br />- Forge strategic partnerships with brands,
                organizations, and influencers. <br />- Expand profile
                customization options. <br />- Q3 2024: Global Expansion &
                Enhanced Date Interactions <br />- Expand the Date's platform to
                international markets with localization efforts. <br />-
                Implement interactive features for date NFTs, fostering deeper
                user engagement. <br />- Enhance the marketplace with advanced
                search filters and improved transaction processes. <br />- Q4
                2024: NFT Curation and Discovery & Integration with External
                Services <br />- Introduce curated collections and discovery
                mechanisms for exceptional date NFTs. <br />- Explore
                partnerships with external services to integrate date NFTs in
                real-world experiences. 2025
                <br />- Q1 2025: User Engagement & Advanced Marketplace Features
                - Enhance user engagement through virtual gifting and
                collaborative memories. <br />- Further improve the Date's
                marketplace with advanced functionalities and auction
                mechanisms. <br />- Q2 2025: Expansion and Integration - Expand
                the Date's platform globally, catering to diverse cultural
                preferences. <br />- Explore integration with external services
                like event ticketing and travel agencies. Please note that the
                above roadmap is a summary and may be subject to adjustments and
                refinements as the project progresses and market conditions
                evolve.
              </FaqText>
            </Accordion>
          </Box>
          <Box>
            <Accordion title="What can we do with NFTs for Contents?">
              <FaqText>
                1. Create Date-based NFTs: Utilize Date's platform to create
                unique NFTs that represent significant dates in your life or
                memorable events. These NFTs can include multimedia content such
                as images, videos, or audio recordings. <br />
                2. Share Content on Personal Pages: Customize your personal page
                on Date's and share your content related to specific dates. This
                can include stories, photos, videos, or any form of creative
                expression associated with meaningful moments. <br />
                3. Engage in Collaborative Projects: Collaborate with other
                users on Date's to create collaborative content projects
                centered around specific dates or themes. This can involve joint
                storytelling, artistic collaborations, or collective
                celebrations. <br />
                4. Participate in Challenges and Competitions: Date's may offer
                challenges or competitions where users can showcase their
                creativity and storytelling skills based on certain dates or
                prompts. This can be an opportunity to engage with the community
                and receive recognition for your content. <br />
                5. Explore and Discover Date-related Content: Browse through
                Date's platform to discover content created by other users. You
                can explore different dates, themes, or categories to find
                inspiring and unique content shared by the Date's community.
                Overall, Date's provides a platform to create, share, and
                explore content centered around dates, enabling users to capture
                and commemorate their special moments in a digital and shareable
                format.
              </FaqText>
            </Accordion>
            <Accordion title="What do you think of Selling point?">
              <FaqText>
                1. Unique Concept: Date's offers a unique concept of
                digitalizing and preserving the significance of dates through
                NFTs. It taps into the emotional value attached to specific
                dates, allowing users to own, share, and cherish their most
                special moments in a digital format. <br />
                2. Web 3.0 Social Service: Date's operates on the principles of
                Web 3.0, which emphasizes decentralized and user-centric
                experiences. It provides a social platform where users can
                connect, interact, and collaborate with others who share similar
                experiences or interests related to dates. <br />
                3. Date Ownership and Customization: Date's enables users to
                mint and edit their dates, giving them a sense of ownership over
                their special moments. Users can personalize their dates with
                multimedia content, making each NFT unique and tailored to their
                preferences. <br />
                4. Memories and Guest Book Feature: The inclusion of a guest
                book feature allows users to share and store memories associated
                with specific dates. It creates a space for individuals to
                revisit and reflect on past experiences, fostering a sense of
                nostalgia and connection. <br />
                5. Engagement and Competition: Date's incorporates gaming
                elements, such as challenges, competitions, and leaderboards, to
                enhance user engagement. Users can compete based on factors like
                likes, scarcity, and overall value, adding an element of
                excitement and recognition to the platform. <br />
                6. Onboarding Web 2.0 Users: Date's aims to onboard users from
                Web 2.0 platforms by providing an appealing and innovative
                service that combines the benefits of blockchain technology and
                social networking. It offers a seamless transition for users
                familiar with traditional social media platforms. Overall,
                Date's offers a compelling value proposition by combining the
                emotional significance of dates, the benefits of NFTs, and the
                community-driven nature of Web 3.0. It provides a platform for
                users to celebrate, share, and immortalize their special moments
                in a digital ecosystem.
              </FaqText>
            </Accordion>
            <Accordion title="How we utilize the NFT for Benefit?">
              <FaqText>
                1. Exclusive Experiences and Perks: Date's NFT holders can enjoy
                exclusive events, prize draws, special features, or unique
                experiences on our platform. They can participate in special
                events and enjoy privileged access to exclusive benefits within
                the Date's community. <br />
                2. Ownership Protection and Rights: Date's NFT holders can have
                confidence in the protection of their ownership rights, as
                ownership is recorded securely on the blockchain. Additionally,
                Date's NFT holders may be entitled to royalties or a portion of
                the proceeds from future NFT sales. <br />
                3. Exclusive Content and Interactions: Date's NFT holders have
                access to exclusive digital content, such as digital art pieces
                or virtual items. They can also engage in interactions with
                other users within the Date's platform and participate in
                special networking opportunities exclusive to NFT owners.
                <br /> 4. Community and Event Participation: Date's NFT holders
                become part of the Date's community, allowing them to
                participate in various events, voting, discussions, and more.
                They can engage in active community participation, interact with
                other users, and share common interests. <br />
                5. Involvement in Future Development and Upgrades: Date's NFT
                holders have the opportunity to contribute their opinions and
                participate in the future development and upgrades of the
                platform. We value the input of the Date's community and offer
                opportunities for involvement in shaping the platform's future.
                Please note that this translation is provided for general
                understanding and may require further review by a professional
                translator for precise accuracy.
              </FaqText>
            </Accordion>
          </Box>
        </Container>
      </Section>
    </Flex>
  );
});

export default Faq;
