import React from "react";

import clsx from "clsx";

import SuspenseImg from "./SuspenseImg";

const PUBLIC_URL = process.env.PUBLIC_URL;

const SchoolItem = (props) => {
    const { index, img, caption, name, major, time } = props;
    return (
        <div
            className={clsx(
                "w-screen sm:w-110 shadow-lg flex flex-col p-6 gap-4 sm:mr-0 mr-8",
                "bg-white"
            )}
        >
            <div className="shadow-inner filter">
                {/* <img src={PUBLIC_URL + "/" + img} className="w-full" /> */}
                <SuspenseImg
                    alt=""
                    src={PUBLIC_URL + "/" + img}
                    className="w-full"
                />
            </div>
            <div className="font-handwriting h-28 pt-2 relative">
                <p className="text-2xl sm:text-3xl">{caption}</p>
                <p className="text-2xl absolute -bottom-1 right-0">
                    {name}, {time}
                </p>
            </div>
        </div>
    );
};

export default SchoolItem;
