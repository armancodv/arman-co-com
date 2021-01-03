import React from "react";
import {useSelector} from "react-redux";
import experienceSelectors from "../../../redux/experience/experienceSelectors";

const Experience: React.FC = () => {
    const experience = useSelector(experienceSelectors.getExperience);
    return (
        <div>
            {JSON.stringify(experience)}
        </div>
    )
}

export default Experience;