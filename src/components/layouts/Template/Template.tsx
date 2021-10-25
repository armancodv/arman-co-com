import React from "react";
import Profile from "../../sections/profile/Profile";
import Experience from "../../sections/experience/Experience";
import Highlights from "../../sections/highlights/Highlights";
import Publications from "../../sections/publications/Publications";
import Portfolios from "../../sections/portfolios/Portfolios";
import Education from "../../sections/education/Education";
import Footer from "../../sections/footer/Footer";
import './Template.scss';

const Template: React.FC = () => {
    return (
        <div className="template">
            <header className="template-header">
                <div className="template-container">
                    <Profile/>
                </div>
            </header>
            <main className="template-main">
                <div className="template-container">
                    <Highlights/>
                    <Experience/>
                    <Portfolios/>
                    <Education/>
                    <Publications/>
                </div>
            </main>
            <footer className="template-footer">
                <div className="template-container">
                    <Footer/>
                </div>
            </footer>
        </div>
    )
}

export default Template;