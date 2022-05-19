import {
  Flex,
  Heading,
  Box,
  Button,
  Text,
  IconButton,
  Stack,
  Menu,
  Avatar,
  useColorModeValue,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
} from "@chakra-ui/react";

import { ChevronDownIcon, ExternalLinkIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import DarkModeSwitch from "../components/DarkModeSwitch";
import { useNavigate } from "react-router-dom";

function Navbar() {


  const navigate = useNavigate();

  let links = [
    { name: "Home", path: "/" },
    { name: "Entertainment", path: "/entertainment" },
    { name: "About", path: "/about" }

  ];


  const handleNavigate = (url) => {
    console.log("URL to navigate is " + url);
    navigate(url);
  };

  return (
    <Box
      w="100%"
      bg={useColorModeValue("gray.100", "gray.800")}
      px={4}
      borderBottom="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      backdropFilter="saturate(180%) blur(5px)"
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box fontFamily="'Fredoka One', cursive" fontSize="3xl">
          gossip-it-up
        </Box>

        <Flex alignItems={"center"}>
          <Menu>
            <Flex justify="space-between" w="100%" align="center">
              <Flex>
                <DarkModeSwitch />

              </Flex>
            </Flex>

            <Flex alignItems={"center"} ml={3}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                > <ChevronDownIcon></ChevronDownIcon>
                </MenuButton>
                <MenuList>

                  {
                    links.map((link) => (
                      <MenuItem icon={<ExternalLinkIcon />} onClick={() => handleNavigate(link.path)}>
                        {link.name}
                      </MenuItem>
                    ))
                  }
                </MenuList>
              </Menu>
            </Flex>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
