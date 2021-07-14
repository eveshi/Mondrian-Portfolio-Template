import React, { useEffect, useState } from "react";

import clsx from "clsx";

const ScrollingTextBorder = (props) => {
    const { text, bgColor } = props;

    const pClasses = clsx("animate-slideslow w-max", bgColor);

    return (
        <>
            <div className="absolute top-0 left-0 z-0 items-center child-hover hidden">
                <p className={pClasses}>
                    {text}
                    {text}
                </p>
            </div>
            <div className="absolute origin-top-left left-full top-0 z-0 items-center child-hover hidden transform rotate-90">
                <p className={pClasses}>
                    {text}
                    {text}
                </p>
            </div>
            <div className="absolute bottom-0 right-0 z-0 items-center child-hover hidden transform rotate-180">
                <p className={pClasses}>
                    {text}
                    {text}
                </p>
            </div>
            <div className="child-hover hidden absolute origin-top-left left-0 top-full z-0 items-center w-full mr-20 overflow-hidden transform rotate-270">
                <p className={pClasses}>
                    {text}
                    {text}
                </p>
            </div>
        </>
    );
};

export default ScrollingTextBorder;
