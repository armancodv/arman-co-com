import React from "react";
import {Skill} from "../../../redux/skills/models_d";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import './SkillIem.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import getFontAwesomeIcon from "../../../utils/getFontAwesomeIcon";
import {faCertificate} from "@fortawesome/free-solid-svg-icons";

interface SkillItemProps extends React.HTMLAttributes<HTMLDivElement> {
    skill: Skill;
}

const SkillItem: React.FC<SkillItemProps> = (props) => {
    return (
        <div {...props} className="skill-item">
            <div className="skill-item-progress">
                <CircularProgressbar value={props?.skill?.percentage}
                                     strokeWidth={12}
                                     styles={buildStyles({
                                         strokeLinecap: 'butt',
                                         pathTransitionDuration: 1,
                                         pathColor: `#7c9a8e`,
                                         trailColor: '#eeeeee',
                                     })}
                />
            </div>
            <div className="skill-item-title">
                {props?.skill?.name}
            </div>
            {props?.skill?.icon ? <FontAwesomeIcon className="skill-item-icon" icon={getFontAwesomeIcon(props?.skill?.icon)} color="#7c9a8e" size="lg"/> : null}
            {props?.skill?.hasBadge ? <FontAwesomeIcon className="skill-item-badge" icon={faCertificate} color="#7c9a8e" size="1x"/> : null}
        </div>
    );
}

export default SkillItem;