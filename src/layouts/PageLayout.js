import React from "react";

import { useHistory } from "react-router-dom";
import HomeButton from "src/components/HomeButton";

const PageLayout = ({ children }) => {
    const history = useHistory();

    const handleBackToHome = () => {
        history.push("/");
    };

    return (
        <>
            <div className="w-screen h-screen absolute top-0 left-0 z-30 overflow-hidden bg-white">
                {children}
            </div>
            <HomeButton
                bgColor="bg-red-700"
                handleBackToHome={() => handleBackToHome()}
            />
        </>
    );
};

export default PageLayout;
