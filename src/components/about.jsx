import { Box, Text, Center, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import gif from './gif.png'



const About = () => {
    return (
        <Box pt={20} bg={'white'}>
            <Heading size={'xl'} >About Me</Heading>

            <Box width={'100%'} mt={20}>

                <Box maxW={'85%'} m={'auto'} borderRadius={20} boxShadow={'md'} bg={'blue.100'} pt={10} pb={10}>
                    <Center>  <Image
                        borderRadius='full'
                        maxW={['150px', '150px', '150px']}
                        src={gif}
                        alt='Dan Abramov'
                    />
                    </Center>
                    <Center>
                        <Heading mb={3} size={'md'} mt={2} id="user-detail-name">Hello! I am Mohammad Shaad</Heading>

                    </Center>
                    <Text id="user-detail-intro" noOfLines={6} color={'#151418'} lineHeight={'1.6'} width={'90%'} m={'auto'}>
                        The individual is a highly adaptable and quick-learning full-stack developer with a passion for staying up-to-date with the latest technologies and trends. They have a proven track record of effectively and efficiently adapting to changing requirements and implementing new solutions with ease. The individual is eager to apply their skills and expertise to contribute to the success of an organization, while also enhancing their skills and knowledge in a dynamic team environment. Their focus on contributing to the company's growth and success makes them a valuable asset to any team.
                    </Text>
                </Box>



            </Box>


        </Box>
    );
}

export default About;
