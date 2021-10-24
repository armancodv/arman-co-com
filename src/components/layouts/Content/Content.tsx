import React from "react";
import Profile from "../../sections/profile/Profile";
import Experience from "../../sections/experience/Experience";
import Highlights from "../../sections/highlights/Highlights";
import Publications from "../../sections/publications/Publications";
import Portfolios from "../../sections/portfolios/Portfolios";

const Content: React.FC = () => {
    return (
        <div>
            <header>
                <Profile/>
            </header>
            <main>
                <Highlights/>
                <Experience/>
                <Portfolios/>
                <Publications/>
            </main>
        </div>
    )
}

export default Content;