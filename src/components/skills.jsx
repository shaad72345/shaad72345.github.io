import React from 'react';
import { Box, Text, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import { techstack } from '../data/data';

const Skills = () => {
    return (
        <div>
            <Box pt={20} bg={'white'}>
                <Heading size={'xl'} >Skills</Heading>

                <Box width={'100%'} mt={20}>

                    <Box p={10} maxW={'85%'} m={'auto'} borderRadius={20} boxShadow={'md'} bg={'blue.100'} pt={10} pb={10}>
                        <SimpleGrid minChildWidth='100px' spacing='40px'>
                            {
                                techstack.map((el, ind) => {
                                    return <Box class="skills-card" cursor={'pointer'} _hover={{ boxShadow: 'xl', bg: 'whiteAlpha.800', transition: 'transform 0.5s', transform: 'scale(1.1)' }} height={'160px'} borderRadius={10} boxShadow={'md'} bg={'white'} p={3} maxW={'130px'} >
                                        <Image className="skills-card-img" width={'full'} src={el.img} />
                                        <Text className="skills-card-name" textAlign={'center'} fontWeight={'bold'} mt={2}>{el.name}</Text>

                                    </Box>
                                })
                            }

                        </SimpleGrid>
                    </Box>



                </Box>


            </Box>
        </div>
    );
}

export default Skills;
