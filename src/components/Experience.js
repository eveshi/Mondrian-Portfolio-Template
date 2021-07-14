import React from "react";

import ExperienceItem from "./ExperienceItem";

const exps = [
    {
        color: "blue-900",
        position: "Fullstack Developer",
        company: "GoGoChart",
        company_link: "https://www.gogochart.com/",
        time: "Oct. 2018 - Mar. 2019",
        items: [
            <p key="fd-1">
                Built and developed a data analysis dashboard using{" "}
                <span className="text-blue-900 font-semibold">React</span> and{" "}
                <span className="text-blue-900 font-semibold">Flask</span> to
                integrate, analyze data, and generate marketing reports from
                Apple search ads campaigns management API.
            </p>,
            <p key="fd-2">
                Developed front-end portion of a user-friendly ads serving
                platform for ads agencies to organize advertising campaigns on
                App Store and monitor costs. Introduced{" "}
                <span className="text-blue-900 font-semibold">GraphQL</span> to
                the team and used it in production.
            </p>,
        ],
    },
    {
        color: "red-700",
        position: "Fullstack Software Engineer",
        company: "Urban Spring",
        company_link: "https://urbanspring.hk/",
        time: "Apr. 2019 - June. 2020",
        items: [
            <p key="fse-1">
                Optimized the alerting system to use a new infrastructure using{" "}
                <span className="text-red-700 font-semibold">AWS S3</span> event
                trigger,{" "}
                <span className="text-red-700 font-semibold">AWS Lambda</span>,{" "}
                <span className="text-red-700 font-semibold">Grafana</span>,{" "}
                <span className="text-red-700 font-semibold">
                    AWS API Gateway
                </span>
                , <span className="text-red-700 font-semibold">PostgreSQL</span>
                , and Slack to visualize related warning data and manage history
                alerts. Reduced the data loss rate from 5% to 0%.
            </p>,
            <p key="fse-2">
                Built a dashboard website containing user management, data
                analysis and visualization, remote device control, and IoT
                management based on{" "}
                <span className="text-red-700 font-semibold">React</span>,{" "}
                <span className="text-red-700 font-semibold">
                    Django REST framework
                </span>
                , <span className="text-red-700 font-semibold">AWS IoT</span>.
            </p>,
        ],
    },
    {
        color: "yellow-500",
        position: "Research Asistant",
        company: "New York University",
        company_link: "https://ai4ce.github.io/",
        time: "Mar. 2021 - Present.",
        items: [
            <p key="ra-1">
                Led a cross-functional team to develop an AI-powered 3D model
                sharing platform using{" "}
                <span className="text-yellow-500 font-semibold">React</span>,{" "}
                <span className="text-yellow-500 font-semibold">
                    Django REST framework
                </span>
                ,{" "}
                <span className="text-yellow-500 font-semibold">
                    AWS API Gateway
                </span>
                ,{" "}
                <span className="text-yellow-500 font-semibold">
                    AWS Lambda
                </span>
                , and{" "}
                <span className="text-yellow-500 font-semibold">
                    AWS RDS MySQL
                </span>
                .
            </p>,
            <p key="ra-2">
                Designed and developed an{" "}
                <span className="text-yellow-500 font-semibold">
                    interactive map
                </span>{" "}
                based on{" "}
                <span className="text-yellow-500 font-semibold">
                    D3 and WebGL
                </span>{" "}
                to make users label the edges of the nearest neighbors inside
                our 3D model dataset.
            </p>,
            <p key="ra-3">
                <span className="text-yellow-500 font-semibold">
                    Designed the algorithm
                </span>{" "}
                to combine user-labeled graph data and our unlabeled dataset to
                compute the more accurate clustreing results.
            </p>,
        ],
    },
];

const Experience = () => {
    return (
        <div className="relative h-full w-full grid grid-cols-1 overflow-scroll md:grid-cols-3">
            <p className="absolute -top-2.5 left-16 align-top uppercase font-normal text-4xl 2xl:text-6xl 2xl:-top-3">
                Experience
            </p>
            {exps &&
                exps.map((exp, index) => (
                    <ExperienceItem
                        key={"exp" + index}
                        color={exp.color}
                        position={exp.position}
                        company={exp.company}
                        company_link={exp.company_link}
                        time={exp.time}
                        items={exp.items}
                    />
                ))}
        </div>
    );
};

export default Experience;
