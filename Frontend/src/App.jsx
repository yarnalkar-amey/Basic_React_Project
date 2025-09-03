import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100","gray.900")} minWidth={"100vw"}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/create" element={<CreatePage/>}/>
        </Routes>
      </Box>
    </>
  );
}

export default App;
