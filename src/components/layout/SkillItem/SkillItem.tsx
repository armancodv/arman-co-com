import React from "react";
import {Skill} from "../../../redux/skills/models_d";
import {CircularProgressbar} from "react-circular-progressbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'react-circular-progressbar/dist/styles.css';
import './SkillIem.scss';

interface SkillItemProps extends React.HTMLAttributes<HTMLDivElement> {
    skill: Skill;
}

const SkillItem: React.FC<SkillItemProps> = (props) => {
    return (
        <div {...props} className="skill-item">
            <div className="skill-item-progress">
                <CircularProgressbar value={props?.skill?.percentage}/>
            </div>
            <div className="skill-item-title">
                {props?.skill?.name}
            </div>
        </div>
    );
}

export default SkillItem;