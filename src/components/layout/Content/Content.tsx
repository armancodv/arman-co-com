import React from "react";
import Profile from "../../pages/profile/Profile";
import Skills from "../../pages/skills/Skills";
import Experience from "../../pages/experience/Experience";

const Content: React.FC = () => {
    return (
        <div>
            <Profile />
            <Skills />
            <Experience />
        </div>
    )
}

export default Content;