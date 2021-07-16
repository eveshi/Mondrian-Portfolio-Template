import React, { useState, useEffect } from "react";

import animateScrollTo from "animated-scroll-to";
import clsx from "clsx";
import AboutItem from "src/components/AboutItem";
import AboutMeOpening from "src/components/AboutMeOpening";
import { ABOUT_ME } from "src/constant";

const TEXT_COLOR = ["text-red-900", "text-blue-900", "text-yellow-50"];

const AboutMe = () => {
    const [showOpening, setShowOpening] = useState(true);

    useEffect(() => {
        const contanier = document.getElementById("abtContanier");
        contanier.scrollTop = 0;
        const openingTimeId = setTimeout(() => {
            setShowOpening(false);
        }, 2000);

        const scrollTimeId = setTimeout(() => {
            animateScrollTo(contanier.scrollHeight, {
                elementToScroll: contanier,
                maxDuration: 90000,
                speed: 12000,
                easing: (t) => t,
            });
        }, 3000);

        return () => {
            clearTimeout(openingTimeId);
            clearTimeout(scrollTimeId);
        };
    }, []);

    const getRow = (repeat, line) => {
        const text = "ABOUT&ME&".repeat(repeat);
        const text_arr = text.split("&");

        return text_arr.map((w, index) => (
            <p
                key={w + "_" + line + "_" + index}
                className={clsx(TEXT_COLOR[(index + line) % 3])}
            >
                {w}&nbsp;
            </p>
        ));
    };
    return (
        <div className="h-full w-full relative bg-black">
            {showOpening && (
                <AboutMeOpening getRow={(line) => getRow(6, line)} />
            )}
            <div className="absolute top-0 left-0 z-10 items-center text-xl black-to-white h-24">
                <div className="w-max flex flex-row">{getRow(45, 0)}</div>
            </div>
            <div
                className="absolute top-0 left-0 z-0 h-full w-full overflow-scroll"
                id="abtContanier"
            >
                <div className="w-full sm:h-16 h-24"></div>
                {ABOUT_ME &&
                    ABOUT_ME.map((abt, index) => (
                        <AboutItem
                            key={"abt" + index}
                            index={index}
                            img={abt.img}
                            content={abt.content}
                            info={abt.info}
                            style={abt.style}
                        />
                    ))}
            </div>
            <div className="absolute bottom-4 left-4 z-10 text-yellow-900 flex flex-col">
                <span className="material-icons -mb-4">arrow_drop_down</span>
                <span className="material-icons -mb-4">arrow_drop_down</span>
                <span className="material-icons">arrow_drop_down</span>
            </div>
        </div>
    );
};

export default AboutMe;
