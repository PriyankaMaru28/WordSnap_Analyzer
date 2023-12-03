import React from "react";
import { Heading, Box, Image, Tag } from "@chakra-ui/react";
import bulb from "../assets/bulb_pic.png";

const Header = () => {
  return (
    <div>
      <>
        <>
          <Box alignItems={"center"}>
            <Image
              src={bulb}
              width={20}
              height={20}
              marginLeft={120}
              marginBottom={2}
            />
            <Heading color="white" marginBottom="1 rem">
              <Tag size={"lg"} fontSize={30}>
                WordSnap Analyzer !!
              </Tag>
            </Heading>
          </Box>
        </>
        <Box textAlign={"center"}>
          <Tag size={"lg"} fontSize={20} marginTop={3}>
            Extract words for FREE!!!!
          </Tag>
        </Box>
      </>
    </div>
  );
};

export default Header;
