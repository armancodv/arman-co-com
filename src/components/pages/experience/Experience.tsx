import React from "react";
import {useSelector} from "react-redux";
import experienceSelectors from "../../../redux/experience/experienceSelectors";
import ExperienceItem from "../../layout/ExperienceItem/ExperienceItem";
import './Experience.scss';

const Experience: React.FC = () => {
    const experienceList = useSelector(experienceSelectors.getExperience);
    if(!experienceList || !experienceList.length) return null;
    return (
        <div className="experience">
            <h2>Experience</h2>
            <div className="experience-container">
                {experienceList?.map((experience) => <ExperienceItem experience={experience}/>)}
            </div>
        </div>
    )
}

export default Experience;