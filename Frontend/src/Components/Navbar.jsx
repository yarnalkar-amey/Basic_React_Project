import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { IoMoonSharp } from "react-icons/io5";

function Navbar() {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <Container  maxW={"1140px"} px={4}>
      <Flex
        flexDir={{ base: "column", sm: "row" }}
        h={16}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Link to={"/"}>
          <Text
            textTransform={"uppercase"}
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={{base:"22", sm:"28"}}
            bgGradient={"linear(to-r,cyan.400,blue.500)"}
            bgClip={"text"}
          >Product Store 🛒</Text>
        </Link>

        <HStack spacing={2} alignItems={"center"}>
            <Link to={"/create"}>
                <Button><CiSquarePlus fontSize={22}/></Button>
            </Link>
            <Link>
                <Button onClick={toggleColorMode}>{colorMode === "light" ? <CiLight fontSize={22} /> : <IoMoonSharp fontSize={22}/>}</Button>
            </Link>
        </HStack>
      </Flex>
    </Container>
  );
}

export default Navbar;
