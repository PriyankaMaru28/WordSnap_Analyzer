import React from "react";
import { Box, Image, Text, Flex, Heading } from "@chakra-ui/react";
import logo from "../assets/openAi_logo.jpeg";
const Footer = () => {
  return (
    <div>
      <Box>
        <Flex justifyContent={"center"} alignItems="center">
          <Text align={"center"} marginRight={2} marginTop={5} fontSize={25}>
            Powered by
          </Text>
          <Image
            src={logo}
            marginRight={2}
            marginTop={5}
            width={10}
            height={10}
          />
        </Flex>
      </Box>
    </div>
  );
};

export default Footer;
