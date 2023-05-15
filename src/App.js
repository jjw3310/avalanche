// import logo from "./logo.svg";

import { 
  ChakraProvider, 
  // Box, 
  // Heading, 
  // Text, 
  // Button 
} from "@chakra-ui/react";
import { 
  BrowserRouter, 
  // Routes, 
  // Route 
} from "react-router-dom";
// import Main from "./pages/main";
// import Customizing from "./pages/customizing";
import MainPage from "./pages/MainPage";
// import { useState, useRef } from "react";
// import "./App.css";
// import Main from "@components/Main";
// import Nfts from "@components/Nfts";

function App() {
  // const [account, setAccount] = useState("");

  return (
    <BrowserRouter>
      <ChakraProvider>
        <>
          <MainPage/>
        </>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;

      // className="
          //   min-h-screen 
          //   bg-gray-950 
          //   text-white
          // "

  /* 
  
  <Routes>
  <Route path="/" element={<Main account={account} />} />
  <Route path="/:tokenId" element={<Customizing />} />
</Routes>
<div> 
  <div>Hi</div>
</div>

<Box bg="gray.50" minH="100vh" p={8}>
  <Box
    maxW="xl"
    mx="auto"
    bg="white"
    boxShadow="md"
    rounded="md"
    p={6}
  >
    <Heading size="lg" mb={4}>
      Welcome to NFT Minting Website
    </Heading>
    <Text fontSize="md" mb={6}>
      Create, sell, and buy unique digital assets with blockchain
      technology
    </Text>
    <Button colorScheme="teal">Get Started</Button>
  </Box>
</Box> 
*/