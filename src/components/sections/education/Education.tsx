import React from "react";
import {useSelector} from "react-redux";
import './Education.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUniversity} from "@fortawesome/free-solid-svg-icons";
import profileSelectors from "../../../redux/profile/profileSelectors";
import EducationItem from "../../items/education-item/EducationItem";

const Education: React.FC = () => {
    const educationList = useSelector(profileSelectors.getEducation);
    if(!educationList || !educationList.length) return null;
    return (
        <section className="education">
            <h2 className="education-title">
                <FontAwesomeIcon icon={faUniversity} className="highlights-title-icon"/>
                Education
            </h2>
            <ul className="education-container">
                {educationList?.map((education) => <EducationItem education={education}/>)}
            </ul>
        </section>
    )
}

export default Education;