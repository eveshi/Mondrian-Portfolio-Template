import React from "react";

import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <p className="text-4xl mb-4 text-gray-500">Page Not Found</p>
            <span className="material-icons text-5xl mb-4 text-gray-500">
                error_outline
            </span>
            <Link
                to="/"
                className="mr-2 px-2 py-1 rounded bg-indigo-500 text-white hover:bg-indigo-300"
            >
                Back to Home page.
            </Link>
        </div>
    );
};

export default NotFound;
