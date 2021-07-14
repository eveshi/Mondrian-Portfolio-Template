import React from "react";

import clsx from "clsx";

const PUBLIC_URL = process.env.PUBLIC_URL;

const BG_COLOR = ["bg-yellow-500", "bg-red-500", "bg-blue-500"];

const SchoolItem = (props) => {
    const { index, img, caption, name, major, time } = props;
    const bgColor = BG_COLOR[index % 3];
    return (
        <div
            className={clsx(
                "w-110 shadow-lg flex flex-col p-6 gap-4",
                "bg-white"
            )}
        >
            <div className="shadow-inner filter">
                <img src={PUBLIC_URL + "/" + img} />
            </div>
            <div className="font-handwriting h-28 pt-2 relative">
                <p className="text-3xl">{caption}</p>
                <p className="text-2xl absolute -bottom-1 right-0">
                    {name}, {time}
                </p>
            </div>
        </div>
    );
};

export default SchoolItem;
