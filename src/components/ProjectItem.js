import React, { useRef } from "react";

import { faTools, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

const PUBLIC_URL = process.env.PUBLIC_URL;

// const TAG_COLOR = [
//     "bg-indigo-600",
//     "bg-blue-600",
//     "bg-purple-600",
//     "bg-red-700",
// ];

const BG_COLOR = ["bg-yellow-500", "bg-blue-900", "bg-red-700"];

const ProjectItem = (props) => {
    const { index, name, img, tags, link, dev } = props;
    const bgColor = BG_COLOR[index % 3];
    const odd = index % 2 == 0;
    return (
        <div
            className={clsx(
                "h-1/2 w-full flex gap-3",
                odd ? "flex-row text-left" : "flex-row-reverse text-right",
                bgColor
            )}
        >
            <div
                className={clsx(
                    "w-3/5 overflow-scroll relative parent-hover items-center",
                    odd ? "pl-12" : "pr-12"
                )}
            >
                <p className="hidden w-full text-center child-hover sticky top-0 left-0 z-10 bg-black text-white bg-opacity-10 py-1">
                    You can scroll
                </p>
                <img src={PUBLIC_URL + "/" + img} className="w-full" />
            </div>
            <div
                className={clsx(
                    "w-2/5 text-black pt-4 px-4 flex flex-col",
                    odd ? "items-start" : "items-end"
                )}
            >
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-2"
                >
                    {link && <FontAwesomeIcon icon={faLink} />}
                    <p className="text-2xl">{name}</p>
                </a>

                {dev && (
                    <p>
                        <FontAwesomeIcon icon={faTools} className="mr-2" />
                        under constraction
                    </p>
                )}
                <div
                    className={clsx(
                        "w-2/3 h-full flex flex-row flex-wrap gap-2 mt-4 items-end pb-6",
                        odd ? "justify-start" : "justify-end"
                    )}
                >
                    <p>{tags.join("/ ")}</p>
                    {/* {tags &&
                        tags.map((tag, i) => (
                            <p
                                key={name + "_tag" + i}
                                className={clsx(
                                    "inline-box font-light rounded-lg px-2.5 py-1 align-middle",
                                    TAG_COLOR[i % TAG_COLOR.length]
                                )}
                            >
                                {tag}
                            </p>
                        ))} */}
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
