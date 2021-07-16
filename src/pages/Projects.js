import React from "react";

import ProjectItem from "src/components/ProjectItem";

const pros = [
    {
        name: "AI-Based 3D Model Search Engine",
        img: "3d-browser.png",
        link: "https://ai4cemodels.com",
        tags: [
            "ReactJS",
            "Material-UI",
            "DataViz",
            "D3.js",
            "WebGL",
            "AWS",
            "RDS MySQL",
            "Django REST framework",
        ],
        dev: true,
    },
    {
        name: "Modality-agnostic Road Traffic Monitoring",
        img: "traffic.png",
        tags: [
            "Machine Learning",
            "DataViz",
            "New Dataset",
            "Multi-modal Analysis",
        ],
        dev: true,
    },
];

const Projects = () => {
    return (
        <div className="h-full w-full flex flex-col">
            <p className="uppercase font-normal text-4xl text-white bg-black py-2 pl-8">
                Selected Projects
            </p>
            <div className="h-full w-full overflow-scroll flex flex-col gap-3 bg-black">
                {pros &&
                    pros.map((pro, index) => (
                        <ProjectItem
                            name={pro.name}
                            img={pro.img}
                            tags={pro.tags}
                            index={index}
                            link={pro.link}
                            dev={pro.dev}
                            key={"pro" + index}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Projects;
