import React from 'react';
import experienceSelectors from '../../../redux/experience/experienceSelectors';
import ExperienceItem from '../../items/ExperienceItem/ExperienceItem';
import './Experience.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {useAppSelector} from '../../../redux/hooks';

const Experience: React.FC = () => {
  const experienceList = useAppSelector(experienceSelectors.getExperience);
  if (!experienceList || !experienceList.length) return null;
  return (
    <section className="experience">
      <h2 className="experience-title">
        <FontAwesomeIcon icon={faBriefcase} className="highlights-title-icon"/>
                Experience
      </h2>
      <ul className="experience-container">
        {experienceList?.map((experience) => (
          <ExperienceItem experience={experience} key={experience?.id}/>
        ),
        )}
      </ul>
    </section>
  );
};

export default Experience;
