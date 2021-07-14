import React from "react";

import clsx from "clsx";

const ExperienceItem = (props) => {
    const { color, position, company, company_link, time, items } = props;
    return (
        <div className="h-full grid grid-rows-8 pt-16 2xl:pt-24 2xl:text-xl">
            <div className="row-span-1">
                <div className={clsx("bg-" + color, "h-6")}></div>
            </div>
            <div className="row-span-1 px-8">
                <p className={clsx("text-" + color, "text-xl 2xl:text-2xl")}>
                    {position}
                </p>

                <div className="text-gray-600 font-light">
                    <a
                        href={company_link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p className="underline hover:italic">{company}</p>
                    </a>
                    <p>{time}</p>
                </div>
            </div>
            <div className="row-span-6 px-8">
                {items &&
                    items.map((item, index) => (
                        <div
                            key={company + index}
                            className="text-gray-600 font-light grid grid-cols-12 mb-2"
                        >
                            <div
                                className={clsx(
                                    "rounded-full h-2 w-2 col-span-1 mt-2",
                                    "bg-" + color
                                )}
                            ></div>
                            <div className="col-span-11 break-word">{item}</div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ExperienceItem;
