import React from "react";

import clsx from "clsx";

import SchoolItem from "./Schooltem";

const edus = [
    {
        img: "nyu.jpg",
        name: "NYU",
        time: "2020 ~ present.",
        major: "Data Science",
        caption: "Now, I have a NYU unicorn and we have the same T-shirt!",
    },
    {
        img: "cuhk.jpg",
        name: "CUHK",
        time: "2017 ~ 2019",
        major: "Anthropology",
        caption:
            "I always enjoy the sunset outside the Anthropology department.",
    },
    {
        img: "hkbu.jpg",
        name: "HKBU",
        time: "2011 ~ 2015",
        major: "Journalism",
        caption: `A paper on my teacher's desk said: "Cry is meaningless. Turn a sigh into a sign of vitality."`,
    },
];

const School = () => {
    const maxClasses = "2xl:leading-10rem 2xl:-bottom-32 2xl:text-10xl ";
    const lgClasses = "lg:leading-7rem lg:text-7xl lg:-bottom-16";
    return (
        <div className="h-full w-full flex flex-row bg-indigo-50 relative">
            <div
                className={clsx(
                    "absolute uppercase z-0 font-black text-red-600 bg-blue-700 h-full flex flex-col-reverse justify-between leading-6rem text-6xl -bottom-12",
                    maxClasses,
                    lgClasses
                )}
            >
                {["e", "d", "u", "c", "a", "t", "i", "o", "n"].map(
                    (cha, index) => (
                        <p
                            key={"edu" + index}
                            className="origin-top-left transform rotate-270"
                        >
                            {cha}
                        </p>
                    )
                )}
            </div>
            <div
                className={clsx(
                    "absolute uppercase z-0 font-black text-red-600 bg-blue-700 h-full w-1/3 flex flex-col-reverse justify-between leading-6rem text-6xl -bottom-12 right-0",
                    maxClasses,
                    lgClasses
                )}
            >
                {["e", "d", "u", "c", "a", "t", "i", "o", "n"].map(
                    (cha, index) => (
                        <p
                            key={"edu" + index}
                            className="origin-top-left transform rotate-270"
                        >
                            {cha}
                        </p>
                    )
                )}
            </div>
            <div className="absolute top-0 left-0 z-10 h-full w-full overflow-x-scroll">
                <div className="h-full w-max flex flex-row items-center gap-3 px-36">
                    {edus &&
                        edus.map((edu, index) => (
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
