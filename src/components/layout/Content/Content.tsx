import React from "react";
import Profile from "../../pages/profile/Profile";
import Experience from "../../pages/experience/Experience";
import Highlights from "../../pages/highlights/Highlights";

const Content: React.FC = () => {
    return (
        <div>
            <Profile />
            <Highlights />
            <Experience />
        </div>
    )
}

export default Content;