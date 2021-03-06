import React from "react";

import ProjectItem from "src/components/ProjectItem";
import { PROJECTS } from "src/constant";

const Projects = () => {
    return (
        <div className="h-full w-full flex flex-col">
            <p className="uppercase font-normal text-4xl text-white bg-black py-2 pl-8">
                Selected Projects
            </p>
            <div className="h-full w-full overflow-scroll flex flex-col gap-3 bg-black">
                {PROJECTS &&
                    PROJECTS.map((pro, index) => (
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
