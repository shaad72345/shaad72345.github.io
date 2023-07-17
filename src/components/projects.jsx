import React from "react";
import {
  Box,
  Flex,
  chakra,
  Heading,
  Text,
  Image,
  Button,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import { projects } from "../data/data";
import { FaGithub, FaLink } from "react-icons/fa";
import Contribution from "./other/contribution";

const Projects = () => {
  return (
    <Box pt={20} bg={"white"}>
      <Heading size={"xl"} mt={2}>
        Projects
      </Heading>
      <Box mt={20}>
        <Flex
          _dark={{
            bg: "#3e3e3e",
          }}
          w="full"
          alignItems="center"
          justifyContent="center"
          flexDirection={"column"}
          gap={10}
        >
          {projects.map((el, ind) => {
            return (
              <Box
                key={ind}
                mb={10}
                h={{ lg: "335px" }}
                border={"2px solid teal"}
                bg="white"
                style={{
                  boxShadow:
                    "rgba(0,128,128, 0.4) 5px 5px, rgba(0,128,128, 0.3) 10px 10px, rgba(0,128,128, 0.2) 15px 15px",
                }}
                display={{
                  lg: "flex",
                }}
                maxW={"85%"}
                shadow={{
                  lg: "lg",
                }}
                borderRadius={"12px"}
                _hover={{
                  boxShadow: "xl",
                  bg: "whiteAlpha.800",
                  transition: "transform 0.5s",
                  transform: "scale(1.05)",
                }}
                className="project-card"
              >
                <Box
                  w={{
                    lg: "55%",
                  }}
                >
                  <Box
                    h={{
                      base: 64,
                      lg: "full",
                    }}
                    borderRadius={[
                      "10px 10px 0 0",
                      "10px 10px 0 0",
                      "10px 0 0 10px",
                    ]}
                    bgSize="cover"

                    // overflow={'hidden'}
                  >
                    <Image
                      borderRadius={[
                        "10px 10px 0 0",
                        "10px 10px 0 0",
                        "10px 0 0 10px",
                      ]}
                      w={"100%"}
                      h={"100%"}
                      objectFit={"cover"}
                      src={el.img}
                    />
                  </Box>
                </Box>

                <Box
                  py={2}
                  px={6}
                  maxW={{
                    base: "xl",
                    lg: "5xl",
                  }}
                  w={{
                    lg: "45%",
                  }}
                >
                  <chakra.h2
                    fontSize={{
                      base: "2xl",
                      md: "3xl",
                    }}
                    color="gray.800"
                    _dark={{
                      color: "white",
                    }}
                    fontWeight="bold"
                    textAlign={"left"}
                    className="project-title"
                  >
                    {el.title}
                  </chakra.h2>
                  <Text
                    mt={4}
                    textAlign={"left"}
                    noOfLines={6}
                    className="project-description"
                  >
                    {el.desc}
                  </Text>
                  <SimpleGrid
                    className="project-tech-stack"
                    mt={4}
                    minChildWidth={"70px"}
                    gap={4}
                  >
                    {el.techstack.map((tech, id) => {
                      return (
                        <Button
                          maxW={"100px"}
                          colorScheme="teal"
                          size={"xs"}
                          key={id}
                        >
                          {tech}
                        </Button>
                      );
                    })}
                  </SimpleGrid>

                  <Flex mt={4}>
                    <Link href={el.github} isExternal>
                      {" "}
                      <Button
                        className="project-github-link"
                        mr={4}
                        rightIcon={<FaGithub />}
                        variant={"solid"}
                        _hover={{ bg: "gray.800" }}
                        color={"white"}
                        bg={"black"}
                        pl={4}
                        pr={4}
                        size={"sm"}
                      >
                        Github
                      </Button>
                    </Link>

                    <Link href={el.url} isExternal>
                      <Button
                        className="project-deployed-link"
                        rightIcon={<FaLink />}
                        variant={"solid"}
                        colorScheme="teal"
                        pl={4}
                        pr={4}
                        size={"sm"}
                      >
                        Demo
                      </Button>
                    </Link>
                  </Flex>
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Box>
      <Contribution />
    </Box>
  );
};

export default Projects;
