import React from "react";
import Profile from "../../sections/profile/Profile";
import Experience from "../../sections/experience/Experience";
import Highlights from "../../sections/highlights/Highlights";
import Publications from "../../sections/publications/Publications";

const Content: React.FC = () => {
    return (
        <div>
            <header>
                <Profile/>
            </header>
            <main>
                <Highlights/>
                <Experience/>
                <Publications/>
            </main>
        </div>
    )
}

export default Content;