import React from "react";

import clsx from "clsx";

const PUBLIC_URL = process.env.PUBLIC_URL;

const baseStyle = "flex-col items-center justify-center ";

const styles = {
    left: baseStyle + "sm:pl-w1/5 sm:flex-row sm:justify-start sm:items-center",
    right:
        baseStyle +
        "sm:pr-w1/5 sm:flex-row-reverse sm:justify-start sm:items-center",
    wide: baseStyle,
    wordsonly: "flex-col justify-center items-center text-3xl",
    end: "flex-col justify-center items-center text-6xl pb-24 w-full text-center",
};

const AboutItem = (props) => {
    const { index, info, img, content, style } = props;
    const extraClass = styles[style];

    return (
        <div
            className={clsx(
                "h-4/5 sm:h-5/6 w-full flex gap-8 text-yellow-700 text-lg ",
                extraClass
            )}
        >
            {img && (
                <div className="flex flex-col gap-2">
                    <img
                        src={PUBLIC_URL + "/" + img}
                        className="max-h-50screen max-w-80screen sm:max-h-480 sm:max-w-480 w-auto border-t-2 border-l-4 border-opacity-30 border-yellow-900"
                    />
                    <p className="text-gray-600 text-sm uppercase">{info}</p>
                </div>
            )}
            <p className="max-w-80screen sm:w-1/3 lg:w-1/4">{content}</p>
        </div>
    );
};

export default AboutItem;
