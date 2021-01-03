import React from "react";
import {useSelector} from "react-redux";
import skillsSelectors from "../../../redux/skills/skillsSelectors";
import SkillItem from "../../layout/SkillItem/SkillItem";

const Skills: React.FC = () => {
    const skills = useSelector(skillsSelectors.getSkills);
    return (
        <div>
            {skills.map((skill) => <SkillItem key={skill?.id} skill={skill} />)}
        </div>
    )
}

export default Skills;