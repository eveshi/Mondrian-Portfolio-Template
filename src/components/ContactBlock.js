import React from "react";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactBlock = () => {
    return (
        <>
            <div className="parent-hover w-full h-full text-white overflow-hidden relative">
                <div className="absolute child-hover top-0 left-0 h-full z-0 items-center hidden">
                    <p className="2xl:text-9xl xl:text-8xl lg:text-7xl md:text-5xl text-3xl opacity-30 uppercase font-extrabold animate-slide">
                        Contact&nbsp;&nbsp;Contact&nbsp;&nbsp;
                    </p>
                </div>
                <div className="absolute w-full h-full text-2xl flex justify-end z-10 items-end">
                    <a
                        href="https://github.com/eveshi"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} className="mr-3" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/eveqsshi/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} className="mr-3" />
                    </a>
                    <a href="mailto:eveshiwork@gmail.com">
                        <FontAwesomeIcon icon={faPaperPlane} className="mr-3" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default ContactBlock;
