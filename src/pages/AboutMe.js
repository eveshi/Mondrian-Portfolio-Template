import React, { useState, useEffect } from "react";

import animateScrollTo from "animated-scroll-to";
import clsx from "clsx";
import AboutItem from "src/components/AboutItem";
import AboutMeOpening from "src/components/AboutMeOpening";

const abts = [
    {
        img: "hk.jpeg",
        info: "The street I live@2019",
        content:
            "I came from Hong Kong, where you could have a cyberpunk bay window.",
        style: "left",
    },
    {
        img: "cat_and_me.jpg",
        info: "My cat and I@2020",
        content: "Back there, I had the cutest cat in the world,",
        style: "right",
    },
    {
        img: "bookstore.jpg",
        info: "Old Heaven Bookstore@2019",
        content:
            "and.. the best bookstore. Musicians played avant-garde jazz there all night long.",
        style: "left",
    },
    {
        img: "music.jpg",
        info: "Me on my vinyl unboxing vlog@2021",
        content:
            "Oh, jazz! I love jazz! I go to live shows and collect cassettes and vinyls. Once upon a time, I worked as a freelance music critic.",
        style: "wide",
    },
    {
        content: "Jazz is the reason why I came to New York City!",
        style: "wordsonly",
    },
    {
        img: "sunset.jpg",
        info: "Sunset outside our terrace@2021",
        content:
            "My apartment in NYC has a big terrace, where I can watch the beautiful sunset everyday.",
        style: "right",
    },
    {
        content:
            "If it is dusk on Saturday, you can turn on FM 91.1, enjoy your sunset with my favorite radio show -- Transpacific Sound Paradise.",
        style: "wordsonly",
    },
    {
        img: "community.jpg",
        info: "My favorite episode of my favorite sitcom",
        content: "And this always make current timeline the perfect timeline!",
        style: "left",
    },
    {
        content: "The End.",
        style: "end",
    },
];

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
                {abts.map((abt, index) => (
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