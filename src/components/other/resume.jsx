import React from 'react';
import { Button, Link } from '@chakra-ui/react';
import Mohammad_Shaad_Resume from '../Mohammad_Shaad_Resume.pdf'
const onClickhandler = () => {
    return window.open(
        "https://drive.google.com/file/d/1VsLWwmNoi4bynW0p9sOXHMSWrj9oi3l6/view?usp=sharing",
        "_blank"
    );
};

const Resume = () => {

    return (
        <div class="nav-link resume">

            <Button

                colorScheme='teal' variant="ghost"
                _hover={{ textDecoration: 'none', bg: 'teal.50' }}
                as={Link}
                target="_blank"
                id="resume-button-1"
                href={Mohammad_Shaad_Resume}
                download={true}
                onClick={onClickhandler}
            >
                Resume
            </Button>

        </div>
    );
}

export default Resume;

export const Resume2 = ({ close }) => {

    return (
        <div>

            <Button
                w="full"
                colorScheme='teal' variant="ghost"
                _hover={{ textDecoration: 'none', bg: 'teal.50' }}
                as={Link}
                target="_blank"
                href={Mohammad_Shaad_Resume}
                download={true}
                onClick={() => {
                    onClickhandler();
                    close()
                }}
            >
                Resume
            </Button>

        </div>
    );
}

