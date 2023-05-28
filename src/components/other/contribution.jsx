import React from 'react';
import { Box, Heading, Flex, Image } from '@chakra-ui/react';
import GithubCalendar from "react-github-calendar";


const Contribution = () => {
    return (
        <Box pt={10} bg={'white'}>
            <Heading size={'xl'} mt={2}>Days I Worked</Heading>

            <Box width={'85%'} border={'2px solid teal'} borderRadius={'0 40px 0 40px'} p={4} H={'250px'} m={'auto'} marginTop={10} className='calendar'>
                <GithubCalendar
                    class="react-activity-calendar"
                    username="shaad72345"
                    year={new Date().getFullYear()}
                />
            </Box>
            <Heading size={'xl'} mt={10}>Statistics</Heading>
            <Flex mt={10} overflow={'hidden'} alignItems={'center'} justifyContent={'center'} gap={10} flexDirection={['column', 'column', 'row']}>

                <Image
                    id="github-streak-stats"
                    align="center"
                    src="https://camo.githubusercontent.com/03a00a618d5ab1407a32fc0c95f9efda4f53af5f74dc94283feab9b4f20f5e07/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d73686161643732333435267468656d653d7261646963616c26686964655f626f726465723d66616c7365"
                    alt="streak"
                />
                <Image
                    id="github-stats-card"
                    align="center"
                    src="https://camo.githubusercontent.com/01f8222a4f286f990c076db5d116d4037c0c012378502acf885bb153d9cee542/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d73686161643732333435267468656d653d7261646963616c26686964655f626f726465723d66616c736526696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d74727565"
                    alt="stats"
                />

            </Flex>
            <Image
                w={['450px', '450px', '450px']}
                m={'auto'}
                mt={10}
                id="github-top-langs"
                align="center"
                src='https://camo.githubusercontent.com/c11f6e0d9507ab8f8871df7d790c754df1b829cbbe9693e90a5cd46987be3b62/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d73686161643732333435267468656d653d7261646963616c26686964655f626f726465723d66616c736526696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d74727565266c61796f75743d636f6d70616374'
                 // src="https://github-readme-stats.vercel.app/api/top-langs/?username=shaad72345&layout=compact&theme=transparent"
                alt="langs"
            />

        </Box>
    );
}

export default Contribution;
