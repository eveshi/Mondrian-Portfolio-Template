import React from "react";

import clsx from "clsx";

const NavigateButton = (props) => {
    const { bgColor, handleContentOpen, contentTitle } = props;
    const title = contentTitle + " ";

    return (
        <button
            className={clsx(
                "parent-hover w-full h-full focus:outline-none overflow-hidden relative",
                bgColor
            )}
            onClick={() => handleContentOpen()}
        >
            <div className="absolute child-hover h-full left-0 top-0 items-center hidden">
                <p className="2xl:text-9xl xl:text-8xl lg:text-7xl md:text-5xl text-3xl text-white w-max uppercase font-extrabold animate-slide-normal">
                    {title.repeat(3)}
                </p>
            </div>
            <div className="absolute child-hover-disapear w-full right-0 bottom-0 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-xl text-white uppercase font-extrabold text-opacity-30 flex justify-end items-end flex-wrap-reverse">
                {title.split("").map((cha, index) => (
                    <p key={"home_title_" + index} className="leading-none">
                        {cha}
                    </p>
                ))}
            </div>
        </button>
    );
};

export default NavigateButton;
