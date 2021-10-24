import React from "react";
import {useSelector} from "react-redux";
import experienceSelectors from "../../../redux/experience/experienceSelectors";
import ExperienceItem from "../../layout/ExperienceItem/ExperienceItem";
import './Experience.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";

const Experience: React.FC = () => {
    const experienceList = useSelector(experienceSelectors.getExperience);
    if(!experienceList || !experienceList.length) return null;
    return (
        <section className="experience">
            <h2 className="experience-title">
                <FontAwesomeIcon icon={faBriefcase} className="highlights-title-icon"/>
                Experience
            </h2>
            <div className="experience-container">
                {experienceList?.map((experience) => <ExperienceItem experience={experience}/>)}
            </div>
        </section>
    )
}

export default Experience;