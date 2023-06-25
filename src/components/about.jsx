import { Box, Text, Center, Heading, Image } from "@chakra-ui/react";
import React from "react";
import gif from "./gif.png";

const About = () => {
  return (
    <Box pt={20} bg={"white"}>
      <Heading size={"xl"}>About Me</Heading>

      <Box width={"100%"} mt={20}>
        <Box
          maxW={"85%"}
          m={"auto"}
          borderRadius={20}
          boxShadow={"md"}
          bg={"blue.100"}
          pt={10}
          pb={10}
        >
          <Center>
            {" "}
            <Image
              borderRadius="full"
              maxW={["150px", "150px", "150px"]}
              src={gif}
              alt="Dan Abramov"
            />
          </Center>
          <Center>
            <Heading mb={3} size={"md"} mt={2} id="user-detail-name">
              Hello! I am Mohammad Shaad
            </Heading>
          </Center>
          <Text
            id="user-detail-intro"
            noOfLines={6}
            color={"#151418"}
            lineHeight={"1.6"}
            width={"90%"}
            m={"auto"}
          >
            Highly adaptable and quick-learning full-stack developer with a
            passion for staying up-to-date with the latest technologies and
            trends. A proven track record of effectively and efficiently
            adapting to changing requirements and implementing new solutions
            with ease. Seeking an opportunity to apply my skills and contribute
            to a dynamic team in a challenging and growth-oriented
            environment.Expertise in front-end technologies like JavaScript,
            React, HTML, and CSS. Also skilled in back-end technologies such as
            Node.js, Express, and MongoDB. These technology stack enables to
            build dynamic and responsive full-stack applications.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
