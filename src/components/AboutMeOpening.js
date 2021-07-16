import React from "react";

const AboutMeOpening = (props) => {
    const { getRow } = props;

    return (
        <div className="absolute top-0 left-0 z-50 h-full grid grid-rows-6 tems-center bg-black text-1/6 leading-1/6 font-semibold">
            <div className="animate-slide-superslow w-max flex flex-row">
                {getRow(0)}
            </div>
            <div className="animate-slide-superslow w-max flex flex-row animation-reverse">
                {getRow(1)}
            </div>
            <div className="animate-slide-superslow w-max flex flex-row">
                {getRow(2)}
            </div>
            <div className="animate-slide-superslow w-max flex flex-row animation-reverse">
                {getRow(3)}
            </div>
            <div className="animate-slide-superslow w-max flex flex-row">
                {getRow(4)}
            </div>
            <div className="animate-slide-superslow w-max flex flex-row animation-reverse">
                {getRow(5)}
            </div>
        </div>
    );
};

export default AboutMeOpening;
