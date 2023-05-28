import { Heading } from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
    return (
        <Heading textAlign={'left'} mt={2} size={'lg'}>
            <Typewriter
                options={{
                    strings: [
                        "Full-Stack Developer",
                        "MERN Stack Developer",
                        "Problem Solver",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                }}
            />
        </Heading>
    );
}

export default TypeWriter;
