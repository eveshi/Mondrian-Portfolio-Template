import React, { useEffect, useState } from "react";

import ContactBlock from "src/components/ContactBlock";
import ContentBox from "src/components/ContentBox";
import HomeButton from "src/components/HomeButton";
import NameBlock from "src/components/NameBlock";
import ScrollingTextBorder from "src/components/ScrollingTextBorder";

import "./Home.css";

const Home = () => {
    const [expeirenceOpen, setExperienceOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [projectsOpen, setProjectsOpen] = useState(false);
    const [schoolOpen, setSchoolOpen] = useState(false);
    const [countOpenAboutMe, SetCountOpenAboutMe] = useState(0);
    const handleExperienceOpen = () => {
        setExperienceOpen(true);
    };

    const handleAboutOpen = () => {
        SetCountOpenAboutMe(countOpenAboutMe + 1);
        setAboutOpen(true);
    };

    const handleProjectsOpen = () => {
        setProjectsOpen(true);
    };

    const handleSchoolOpen = () => {
        setSchoolOpen(true);
    };

    const handleBackToHome = () => {
        setExperienceOpen(false);
        setAboutOpen(false);
        setProjectsOpen(false);
        setSchoolOpen(false);
    };

    return (
        <div className="w-screen h-screen grid grid-cols-8 grid-rows-8 bg-black	gap-3 relative">
            <div className="col-span-2 bg-indigo-50"></div>
            <div className="col-span-3 bg-white"></div>
            <div className="parent-hover col-start-6 col-span-2 bg-yellow-400 flex flex-col justify-start items-end text-yellow-200 hover:text-black">
                <p className="mr-3">@2021 - Eve Shi</p>
                <div className="hidden child-hover-flex">
                    <p>Hi there!</p>
                    <span className="material-icons text-3xl">
                        emoji_people
                    </span>
                </div>
            </div>
            <div className="col-start-8 col-span-1 row-start-1 row-span-6 bg-indigo-50"></div>
            <div className="col-span-1 row-start-2 row-span-2 bg-white"></div>
            <div className="parent-hover col-start-2 col-span-4 row-start-2 row-span-4 bg-red-700 flex flex-col justify-center items-center text-white relative overflow-hidden p-4">
                <NameBlock />
                <ScrollingTextBorder
                    bgColor="bg-red-700"
                    text={
                        "ReactJS/Django REST framework/Flask/SQL/NoSQL/DataViz/Machine Learning/AWS cloud service/Serverless/Docker/Git/"
                    }
                />
            </div>
            <div className="col-start-6 col-span-2 row-start-2 row-span-2 bg-yellow-400">
                <ContentBox
                    bgColor="bg-yellow-400"
                    open={expeirenceOpen}
                    handleContentOpen={handleExperienceOpen}
                    contentTitle="Experience"
                    contentName="experience"
                />
            </div>
            <div className="col-start-6 col-span-1 row-start-4 row-span-2 bg-white"></div>
            <div className="col-start-7 col-span-1 row-start-4 row-span-2 bg-white"></div>
            <div className="col-span-1 row-start-4 row-span-3 bg-indigo-50"></div>
            <div className="col-start-2 col-span-2 row-start-6 row-span-2 bg-black">
                <ContentBox
                    bgColor="bg-black"
                    open={projectsOpen}
                    handleContentOpen={handleProjectsOpen}
                    contentTitle="Projects"
                    contentName="projects"
                />
            </div>
            <div className="col-start-4 col-span-2 row-start-6 row-span-1 bg-indigo-50"></div>
            <div className="col-start-6 col-span-2 row-start-6 row-span-1 bg-white"></div>
            <div className="parent-hover col-span-1 row-start-7 row-span-2 bg-yellow-400 flex justify-center items-center text-yellow-50">
                <a
                    href="https://youtu.be/eZHPqblWyCI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="child-hover hidden"
                >
                    <span className="material-icons text-4xl">surfing</span>
                </a>
            </div>
            <div className="col-start-4 col-span-2 row-start-7 row-span-1 bg-indigo-50"></div>
            <div className="col-start-6 col-span-2 row-start-7 row-span-2 bg-blue-900">
                <ContentBox
                    bgColor="bg-blue-900"
                    open={aboutOpen}
                    handleContentOpen={handleAboutOpen}
                    contentTitle="About Me"
                    contentName="aboutme"
                    countOpenAboutMe={countOpenAboutMe}
                />
            </div>
            <div className="col-start-8 col-span-1 row-start-7 row-span-1 bg-red-700">
                <ContentBox
                    bgColor="bg-red-700"
                    open={schoolOpen}
                    handleContentOpen={handleSchoolOpen}
                    contentTitle="Education"
                    contentName="school"
                />
            </div>
            <div className="col-start-2 col-span-2 row-start-8 row-span-1 bg-white"></div>
            <div className="col-start-4 col-span-2 row-start-8 row-span-1 bg-black">
                <ContactBlock />
            </div>
            <div className="col-start-8 col-span-1 row-start-8 row-span-1 bg-white"></div>
            <HomeButton
                bgColor="bg-red-700"
                handleBackToHome={handleBackToHome}
                open={expeirenceOpen || aboutOpen || projectsOpen || schoolOpen}
            />
        </div>
    );
};

export default Home;
