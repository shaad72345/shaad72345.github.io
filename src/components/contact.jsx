import React, { useRef } from 'react';
import {
    Flex,
    Box,
    Heading,
    IconButton,
    Button,
    VStack,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Center, FormControl,
    Link,
    Tooltip,
    useToast
} from '@chakra-ui/react';

import emailjs from '@emailjs/browser';

import { FaGithub, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail, MdLocationOn, MdOutlineEmail } from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'


const Contact = () => {
    let name = useRef()
    let email = useRef()
    let msg = useRef()
    let toast = useToast()

    return (
        <Box pt={20} bg={'white'}>
            <Heading size={'xl'} >Contact Me</Heading>

            <Box p={4} height={{ lg: '330px' }} mt={10} bg={'blue.100'}>
                <Flex flexDirection={['column-reverse', 'column-reverse', 'row']} gap={{ lg: 20, sm: 4, md: 4 }}>
                    <Box w={{ lg: '35%' }}>
                        <VStack overflow={'hidden'} pl={0} spacing={3}>
                            <Tooltip label={'Number'} placement='right'>

                                <Button
                                    size="md"
                                    height="48px"

                                    variant="ghost"

                                    _hover={{ border: '1px solid teal' }}
                                    leftIcon={<FaPhoneAlt color="black" size="20px" />}
                                    mt={[10, 10, 4]}
                                    id="contact-phone"
                                >
                                    +91-8317016260
                                </Button>
                            </Tooltip>
                            <Tooltip label={'e-Mail'} placement='right'>

                                <Button
                                    size="md"
                                    height="48px"
                                    id="contact-email"
                                    variant="ghost"

                                    _hover={{ border: '1px solid teal' }}
                                    leftIcon={<MdEmail color="black" size="20px" />}>
                                    shaad72345@@gmail.com
                                </Button></Tooltip>
                            <Tooltip label={'Location'} placement='right'>
                                <Button
                                    size="md"
                                    height="48px"
                                    variant="ghost"

                                    _hover={{ border: '1px solid teal' }}
                                    leftIcon={<MdLocationOn color="black" size="20px" />}>
                                    Mau, Uttar Pradesh
                                </Button>
                            </Tooltip>
                        </VStack>
                        <Center
                            mt={4}
                        >
                            <Tooltip label='LinkedIn' placement='top'>
                                <IconButton
                                    as={Link}
                                    href={'https://www.linkedin.com/in/mohammad-shaad-94102385/'} isExternal
                                    aria-label="linkedin"
                                    variant="ghost"
                                    size="lg"
                                    isRound={true}
                                    _hover={{ color: 'teal', transition: 'transform 0.5s', transform: 'scale(1.2)' }}
                                    icon={<FaLinkedinIn size="28px" />}
                                    mr={10}
                                    id="contact-linkedin"
                                /></Tooltip>
                            <Tooltip label='Github' placement='top'>

                                <IconButton
                                    as={Link}
                                    href={'https://github.com/shaad72345'} isExternal
                                    aria-label="github"
                                    variant="ghost"
                                    size="lg"
                                    isRound={true}
                                    _hover={{ color: 'teal', transition: 'transform 0.5s', transform: 'scale(1.2)' }}
                                    icon={<FaGithub size="28px" />}
                                    id="contact-github"
                                /></Tooltip>

                        </Center>

                    </Box>
                    <Box w={{ lg: '65%' }}>
                        <FormControl id="name">
                            <FormLabel>Your Name</FormLabel>
                            <InputGroup borderColor="black">
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<BsPerson color="black" />}
                                />
                                <Input ref={name} type="text" bg={'blue.100'} size="md" />
                            </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                            <FormLabel>Mail</FormLabel>
                            <InputGroup borderColor="black">
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<MdOutlineEmail color="black" />}
                                />
                                <Input ref={email} type="email" bg={'blue.100'} size="md" />
                            </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                            <FormLabel>Message</FormLabel>
                            <Textarea
                                ref={msg}
                                borderColor="black"
                                _hover={{
                                    borderRadius: 'black',
                                }}
                                placeholder="message"
                            />
                        </FormControl>
                        <FormControl mt={4} id="name" float="right">
                            <Flex justifyContent={'right'}>
                                <Button
                                    variant="solid"
                                    colorScheme='teal'
                                    size={'sm'}
                                    onClick={() => {
                                        console.log("hii")
                                        emailjs.send("service_pmo10z3", "template_e4hg1zg", {
                                            user_name: name.current.value,
                                            user_email: email.current.value,
                                            from_name: `name ${name.current.value} email:${email.current.value}`,
                                            to_name: 'Manoj Kumar Padhy',
                                            message: msg.current.value,
                                        }, "kqAHJa1JvQWNKv7-B");

                                        toast({
                                            title: 'Sucess.',
                                            description: "Message sent Sucessfully.",
                                            status: 'success',
                                            duration: 2000,
                                            isClosable: true,
                                        })
                                        name.current.value = "";
                                        email.current.value = "";
                                        msg.current.value = ""
                                    }}
                                >
                                    Send Message
                                </Button>
                            </Flex>
                        </FormControl>

                    </Box>
                </Flex>

            </Box>

        </Box>
    );
}

export default Contact;
