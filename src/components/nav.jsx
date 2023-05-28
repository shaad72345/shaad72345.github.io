import React from 'react';
import {
    Flex,
    Text,
    HStack,
    Button,
    Box,
    VStack,
    IconButton,
    CloseButton,
    useDisclosure
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'
import '../App.css';
import { Link } from "react-scroll";
import Resume, { Resume2 } from './other/resume';


const Navbar = () => {
    const mobileNav = useDisclosure();
    return (
        <Box position={'fixed'} maxW={'1150px'} w={'100%'} bg={'white'} zIndex={1}>

            <Flex p={3} boxShadow={'md'} alignItems="center" justifyContent="space-between" mx="auto">
                <Flex>

                    <Text fontSize="xl" fontWeight="medium" ml="2">
                        Shaad
                    </Text>
                </Flex>
                <HStack display="flex" alignItems="center" spacing={1}>
                    <HStack
                        id="nav-menu"
                        spacing={1}
                        mr={1}
                        color="brand.500"
                        display={{
                            base: "none",
                            md: "inline-flex",
                        }}
                    >
                        <Link class="nav-link home" activeClass="active" smooth spy to="home">
                            <Button colorScheme='teal' variant="ghost">Home</Button></Link>
                        <Link class="nav-link about" activeClass="active" smooth spy to="about">
                            <Button colorScheme='teal' variant="ghost">About</Button></Link>
                        <Link class="nav-link skills" activeClass="active" smooth spy to="skills">
                            <Button colorScheme='teal' variant="ghost">Skills</Button></Link>
                        <Link class="nav-link projects" activeClass="active" smooth spy to="projects">
                            <Button colorScheme='teal' variant="ghost">Projects</Button></Link>
                        <Link class="nav-link contact" activeClass="active" smooth spy to="contact">
                            <Button colorScheme='teal' variant="ghost">Contact</Button></Link>
                        <Resume />
                    </HStack>

                    <Box
                        display={{
                            base: "inline-flex",
                            md: "none",
                        }}
                    >
                        <IconButton
                            display={{
                                base: "flex",
                                md: "none",
                            }}
                            aria-label="Open menu"
                            fontSize="20px"
                            color="gray.800"
                            _dark={{
                                color: "inherit",
                            }}
                            variant="ghost"
                            icon={<HamburgerIcon />}
                            onClick={mobileNav.onOpen}
                        />

                        <VStack
                            pos="absolute"
                            top={0}
                            left={0}
                            right={0}
                            display={mobileNav.isOpen ? "flex" : "none"}
                            flexDirection="column"
                            p={2}
                            pb={4}
                            spacing={3}
                            rounded="sm"
                            shadow="sm"
                            bg={'white'}
                        >
                            <CloseButton
                                aria-label="Close menu"
                                onClick={mobileNav.onClose}
                            />

                            <Link activeClass="active" smooth spy to="home">
                                <Button onClick={mobileNav.onClose} w="full" colorScheme='teal' variant="ghost">Home</Button></Link>
                            <Link activeClass="active" smooth spy to="about">
                                <Button onClick={mobileNav.onClose} w="full" colorScheme='teal' variant="ghost">About</Button></Link>
                            <Link activeClass="active" smooth spy to="skills">
                                <Button onClick={mobileNav.onClose} w="full" colorScheme='teal' variant="ghost">Skills</Button></Link>
                            <Link activeClass="active" smooth spy to="projects">
                                <Button onClick={mobileNav.onClose} w="full" colorScheme='teal' variant="ghost">Projects</Button></Link>
                            <Link activeClass="active" smooth spy to="contact">
                                <Button onClick={mobileNav.onClose} w="full" colorScheme='teal' variant="ghost">Contact</Button></Link>
                            <Resume2 close={mobileNav.onClose} />
                        </VStack>
                    </Box>
                </HStack>
            </Flex>

        </Box>
    );
}

export default Navbar;
