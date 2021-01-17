import React from "react";
import {useSelector} from "react-redux";
import experienceSelectors from "../../../redux/experience/experienceSelectors";
import ExperienceItem from "../../layout/ExperienceItem/ExperienceItem";

const Experience: React.FC = () => {
    const experienceList = useSelector(experienceSelectors.getExperience);
    return (
        <div>
            {experienceList?.map((experience) => <ExperienceItem experience={experience}/>)}
        </div>
    )
}

export default Experience;