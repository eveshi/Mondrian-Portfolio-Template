import React, { useEffect, useState } from "react";

import clsx from "clsx";
import { useHistory } from "react-router";
import ContactBlock from "src/components/ContactBlock";
import NameBlock from "src/components/NameBlock";
import NavigateButton from "src/components/NavigateButton";
import ScrollingTextBorder from "src/components/ScrollingTextBorder";

import "./Home.css";

const Home = () => {
    const [touch, setTouch] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if ("ontouchstart" in document.documentElement) {
            setTouch(true);
        }
    }, []);

    const handleExperienceOpen = () => {
        history.push("/experience");
    };

    const handleAboutOpen = () => {
        history.push("/about");
    };

    const handleProjectsOpen = () => {
        history.push("/projects");
    };

    const handleSchoolOpen = () => {
        history.push("/education");
    };

    return (
        <div
            className={clsx(
                "w-screen h-screen grid sm:grid-cols-8 sm:grid-rows-8 bg-black	gap-3 relative",
                touch && "touch",
                "grid-cols-4 grid-rows-6"
            )}
        >
            <div className="col-span-2 bg-indigo-50 hidden sm:block"></div>
            <div className="col-span-3 bg-white hidden sm:block"></div>
            <div className="parent-hover col-start-6 col-span-2 bg-yellow-400 flex-col justify-start items-end text-yellow-200 hover:text-black hidden sm:flex">
                <p className="mr-3">@2021 - Eve Shi</p>
                <div className="hidden child-hover-flex">
                    <p>Hi there!</p>
                    <span className="material-icons text-3xl">
                        emoji_people
                    </span>
                </div>
            </div>
            <div className="col-start-8 col-span-1 row-start-1 row-span-6 bg-indigo-50 hidden sm:block"></div>
            <div className="col-span-1 row-start-2 row-span-2 bg-white hidden sm:block"></div>
            <div className="parent-hover col-start-1 col-span-3 sm:col-start-2 sm:col-span-4 row-start-1 row-span-3 sm:row-start-2 sm:row-span-4 bg-red-700 flex flex-col justify-center items-center text-white relative overflow-hidden p-4">
                <NameBlock />
                <ScrollingTextBorder
                    bgColor="bg-red-700"
                    text={
                        "ReactJS/Django REST framework/Flask/SQL/NoSQL/DataViz/Machine Learning/AWS cloud service/Serverless/Docker/Git/"
                    }
                />
            </div>
            <div className="col-start-2 col-span-2 sm:col-start-6 row-start-6 row-span-1 sm:row-start-2 sm:row-span-2 bg-yellow-400">
                <NavigateButton
                    bgColor="bg-yellow-400"
                    contentTitle="Experience"
                    contentName="experience"
                    handleContentOpen={handleExperienceOpen}
                />
            </div>
            <div className="col-start-2 col-span-1 row-start-4 row-span-1 sm:col-start-6 sm:row-span-2 bg-white"></div>
            <div className="col-start-3 col-span-1 row-start-4 row-span-1 sm:col-start-7 sm:row-span-2 bg-white"></div>
            <div className="col-span-1 col-start-4 row-start-1 row-span-3 sm:col-span-1 sm:col-start-1 sm:row-start-4 sm:row-span-3 bg-indigo-50"></div>
            <div className="col-start-2 col-span-2 sm:col-start-2 row-start-5 row-span-1 sm:row-start-6 sm:row-span-2 bg-black">
                <NavigateButton
                    bgColor="bg-black"
                    contentTitle="Projects"
                    contentName="projects"
                    handleContentOpen={handleProjectsOpen}
                />
            </div>
            <div className="col-start-4 col-span-2 row-start-6 row-span-1 bg-indigo-50 hidden sm:block"></div>
            <div className="col-start-6 col-span-2 row-start-6 row-span-1 bg-white hidden sm:block"></div>
            <div className="parent-hover col-start-1 col-span-1 row-start-7 row-span-2 bg-yellow-400 justify-center items-center text-yellow-50 hidden sm:flex">
                <a
                    href="https://youtu.be/eZHPqblWyCI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="child-hover hidden"
                >
                    <span className="material-icons text-4xl">surfing</span>
                </a>
            </div>
            <div className="col-start-4 col-span-2 row-start-7 row-span-1 bg-indigo-50 hidden sm:block"></div>
            <div className="col-start-1 col-span-1 row-start-4 row-span-2 sm:col-start-6 sm:col-span-2 sm:row-start-7 bg-blue-900">
                <NavigateButton
                    bgColor="bg-blue-900"
                    contentTitle="About Me"
                    contentName="aboutme"
                    handleContentOpen={handleAboutOpen}
                />
            </div>
            <div className="col-start-4 col-span-1 row-start-5 row-span-2 sm:col-start-8 sm:col-span-1 sm:row-start-7 sm:row-span-1 bg-red-700">
                <NavigateButton
                    bgColor="bg-red-700"
                    contentTitle="Education"
                    contentName="school"
                    handleContentOpen={handleSchoolOpen}
                />
            </div>
            <div className="col-start-2 col-span-2 row-start-8 row-span-1 bg-white hidden sm:block"></div>
            <div className="col-start-4 col-span-1 row-start-4 row-span-1 sm:col-start-4 sm:col-span-2 sm:row-start-8 sm:row-span-1 bg-black">
                <ContactBlock touch={touch} />
            </div>
            <div className="col-start-8 col-span-1 row-start-8 row-span-1 bg-white hidden sm:block"></div>
            <div className="col-start-1 col-span-1 row-start-6 row-span-1 bg-white sm:hidden"></div>
        </div>
    );
};

export default Home;
