import React, { useState, useEffect } from "react";
import { Flex, Box, Button, Text, Heading, Image } from "@chakra-ui/react";

import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import moment from "moment";
import Entertainment from "./views/Entertainment";
import { DatabaseProvider } from "./db";



function App() {
  return (
    <DatabaseProvider>
      <div className="App">
        <Flex position="fixed" top="0" w="100%">
          <Navbar />
        </Flex>

        <Box maxW={1024} align="center" mx="auto" px={4} mt={24} mb={4}>
          <Routes>
            <Route exact path='/' element={<Entertainment />}></Route>
            <Route exact path='/home' element={<Home />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/entertainment' element={< Entertainment />}></Route>
          </Routes>
        </Box>
      </div>
    </DatabaseProvider>
  );
}

export default App;
