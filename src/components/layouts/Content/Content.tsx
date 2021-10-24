import React from "react";
import Profile from "../../sections/profile/Profile";
import Experience from "../../sections/experience/Experience";
import Highlights from "../../sections/highlights/Highlights";

const Content: React.FC = () => {
    return (
        <div>
            <header>
                <Profile/>
            </header>
            <main>
                <Highlights/>
                <Experience/>
            </main>
        </div>
    )
}

export default Content;