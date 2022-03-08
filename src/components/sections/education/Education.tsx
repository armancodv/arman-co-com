import React from 'react';
import './Education.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import profileSelectors from '../../../redux/profile/profileSelectors';
import EducationItem from '../../items/education-item/EducationItem';
import { useAppSelector } from '../../../redux/hooks';

const Education: React.FC = () => {
  const educationList = useAppSelector(profileSelectors.getEducation);
  if (!educationList || !educationList.length) return null;
  return (
    <section className="education">
      <h2 className="education-title">
        <FontAwesomeIcon icon={faUniversity} className="education-title-icon" />
        Education
      </h2>
      <ul className="education-container">
        {educationList?.map((education) => (
          <EducationItem education={education} key={education?.id} />
        ))}
      </ul>
    </section>
  );
};

export default Education;
