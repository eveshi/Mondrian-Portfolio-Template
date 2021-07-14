import React from "react";

import clsx from "clsx";
import ReactLoading from "react-loading";

import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import School from "./School";

const contents = {
    experience: () => <Experience />,
    aboutme: (props) => <AboutMe countOpenAboutMe={props.countOpenAboutMe} />,
    projects: () => <Projects />,
    school: () => <School />,
};

const ContentBox = (props) => {
    const {
        bgColor,
        open,
        handleContentOpen,
        contentTitle,
        contentName,
        countOpenAboutMe,
    } = props;
    const openClasses = "scale-100";
    const Content = contents[contentName];

    // TO-DO: when use phone, show directly
    return (
        <>
            <button
                className={clsx(
                    "parent-hover w-full h-full focus:outline-none overflow-hidden relative",
                    bgColor,
                    open ? "hidden" : null
                )}
                onClick={() => handleContentOpen()}
            >
                <div className="absolute child-hover h-full left-0 top-0 items-center hidden">
                    <p className="2xl:text-9xl xl:text-8xl lg:text-7xl md:text-5xl text-3xl text-white w-max uppercase font-extrabold animate-slide">
                        {contentTitle}&nbsp;&nbsp;{contentTitle}&nbsp;&nbsp;
                    </p>
                </div>
            </button>
            <div
                className={clsx(
                    "w-screen h-screen absolute top-0 left-0 z-30 overflow-hidden bg-white transform scale-0 transition duration-200 ease",
                    // bgColor,
                    open ? openClasses : null
                )}
            >
                <Content countOpenAboutMe={countOpenAboutMe} />
            </div>
        </>
    );
};

export default ContentBox;
