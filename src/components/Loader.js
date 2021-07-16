import React from "react";

const Loader = () => (
    <div className="loader w-screen h-screen flex flex-row items-center justify-center bg-white">
        <div className="w-5 h-5 border-4 border-black bg-yellow-500  animate-bounce mr-4" />
        <div className="w-5 h-5 border-4 border-black bg-blue-900  animate-bounce mr-4" />
        <div className="w-5 h-5 border-4 border-black bg-red-700  animate-bounce" />
    </div>
);

export default Loader;
