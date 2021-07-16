import React from "react";

import clsx from "clsx";
import SchoolItem from "src/components/Schooltem";
import { EDUCATION } from "src/constant";

const School = () => {
    const maxClasses = "2xl:leading-10rem 2xl:-bottom-32 2xl:text-10xl ";
    const lgClasses = "lg:leading-7rem lg:text-7xl lg:-bottom-16";
    const wordsBaseClass =
        "absolute uppercase z-0 font-black text-red-600 bg-blue-700 h-full flex flex-col-reverse justify-between leading-6rem text-6xl -bottom-12";

    const words = ["e", "d", "u", "c", "a", "t", "i", "o", "n"].map(
        (cha, index) => (
            <p
                key={"edu" + index}
                className="origin-top-left transform rotate-270"
            >
                {cha}
            </p>
        )
    );

    return (
        <div className="h-full w-full flex flex-row bg-indigo-50 relative">
            <div className={clsx(wordsBaseClass, maxClasses, lgClasses)}>
                {words}
            </div>
            <div
                className={clsx(
                    "w-1/3 right-0",
                    wordsBaseClass,
                    maxClasses,
                    lgClasses
                )}
            >
                {words}
            </div>
            <div className="absolute top-0 left-0 z-10 h-full w-full overflow-x-scroll">
                <div className="h-full w-max flex flex-row items-center gap-3 px-36">
                    {EDUCATION &&
                        EDUCATION.map((edu, index) => (
                            <SchoolItem
                                key={edu + index}
                                img={edu.img}
                                caption={edu.caption}
                                index={index}
                                name={edu.name}
                                time={edu.time}
                                major={edu.major}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default School;
