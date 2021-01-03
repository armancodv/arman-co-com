import React from "react";
import {useSelector} from "react-redux";
import skillsSelectors from "../../../redux/skills/skillsSelectors";

const Skills: React.FC = () => {
    const skills = useSelector(skillsSelectors.getSkills);
    return (
        <div>
            {JSON.stringify(skills)}
        </div>
    )
}

export default Skills;