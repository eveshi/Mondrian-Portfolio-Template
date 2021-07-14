import React from "react";

const NameBlock = () => {
    return (
        <>
            <div className="font-headline text-8xl flex flex-wrap justify-center items-center">
                <div className="flex h-24 mr-8">
                    <p className="hover:uppercase hover:pt-8">e</p>
                    <p className="hover:uppercase hover:pt-8">v</p>
                    <p className="hover:uppercase hover:pt-8">e</p>
                </div>
                <div className="flex h-24">
                    <p className="hover:uppercase hover:pt-8">s</p>
                    <p className="hover:uppercase hover:pt-8">h</p>
                    <p className="hover:uppercase hover:pt-8">i</p>
                </div>
            </div>
            <div className="text-lg w-full flex flex-col flex-wrap justify-center items-center">
                <p className="text-center break-words">
                    Fullstack Software Engineer
                </p>
                <p>Brooklyn, NY</p>
            </div>
        </>
    );
};

export default NameBlock;
