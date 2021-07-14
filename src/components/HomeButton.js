import React from "react";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

const HomeButton = (props) => {
    const { handleBackToHome, open } = props;

    return (
        <div
            className={clsx(
                "fixed bottom-4 right-0 z-50",
                open ? null : "hidden"
            )}
        >
            <button
                onClick={() => handleBackToHome()}
                className={clsx(
                    "flex items-center justify-center bg-green-500 text-green-50 py-1 px-4 focus:outline-none hover:bg-green-400"
                )}
            >
                <span className="material-icons text-xl">directions_run</span>
                <span className="material-icons text-xl">meeting_room</span>
            </button>
            <div className="w-full h-full text-sm flex flex-col justify-end items-end mt-2 text-gray-200">
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
    );
};

export default HomeButton;
