import React from "react";
import { Box, Flex, Heading, Image, Button, Link } from "@chakra-ui/react";
import TypeWriter from "./other/typewriter";
import { ViewIcon } from "@chakra-ui/icons";
import Mohammad_Shaad_Resume from "./Mohammad_Shaad_Resume.pdf";
import pic from "./image.jpg";
const onClickhandler = () => {
  return window.open(
    "https://drive.google.com/file/d/1uVGXl8eiB1OcnnxMP7ZsJkdW6nI0FR9e/view?usp=drive_link",
    "_blank"
  );
};

const Home = () => {
  return (
    <Box pt={20}>
      <Flex
        pt={10}
        pb={20}
        flexDirection={["column", "row", "row"]}
        justifyContent={"center"}
        gap={[10, 10, 20]}
        alignItems={"center"}
      >
        <Box>
          <Image
            className="home-img"
            borderRadius="full"
            maxW={["150px", "250px", "250px"]}
            src={pic}
            alt="shaad"
          />
        </Box>
        <Box>
          <Heading textAlign={"left"} size={"lg"}>
            {" "}
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>{" "}
          </Heading>
          <Heading textAlign={"left"} mt={2} size={"lg"} id="user-detail-name">
            I'm Mohammad Shaad{" "}
          </Heading>
          <TypeWriter />
          <Flex mt={2}>
            <Button
              id="resume-button-2"
              colorScheme="teal"
              variant="solid"
              _hover={{ textDecoration: "none", bg: "teal" }}
              as={Link}
              target="_blank"
              href={Mohammad_Shaad_Resume}
              download={true}
              rightIcon={<ViewIcon />}
              onClick={onClickhandler}
              pl={4}
              pr={4}
              size={"sm"}
            >
              Resume
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
