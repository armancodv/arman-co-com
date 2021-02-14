import React from "react";
import {useSelector} from "react-redux";
import skillsSelectors from "../../../redux/skills/skillsSelectors";
import SkillItem from "../../layout/SkillItem/SkillItem";
import './Skills.scss';

const Skills: React.FC = () => {
    const skills = useSelector(skillsSelectors.getSkills);
    if(!skills || !skills.length) return null;
    return (
        <div className="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                {skills.map((skill) => <SkillItem key={skill?.id} skill={skill} />)}
            </div>
        </div>
    )
}

export default Skills;