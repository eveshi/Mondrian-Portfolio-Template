import React from "react";

import ExperienceItem from "src/components/ExperienceItem";
import { EXPERIENCE } from "src/constant";

const Experience = () => {
    return (
        <div className="relative h-full w-full grid grid-cols-1 overflow-scroll md:grid-cols-3">
            <p className="absolute -top-2.5 left-16 align-top uppercase font-normal text-4xl 2xl:text-6xl 2xl:-top-3">
                Experience
            </p>
            {EXPERIENCE &&
                EXPERIENCE.map((exp, index) => (
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
