import React from 'react';
import './Skills.scss';
import {Badge} from 'react-bootstrap';
import profileSelectors from '../../../redux/profile/profileSelectors';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHighlighter} from '@fortawesome/free-solid-svg-icons';
import {useAppSelector} from '../../../redux/hooks';

const Skills: React.FC = () => {
  const skills = useAppSelector(profileSelectors.getSkills);

  return (
    <section className="skills">
      <h2 className="skills-title">
        <FontAwesomeIcon icon={faHighlighter} className="skills-title-icon"/>
                Skills
      </h2>
      <div className="skills-tag-groups">
        {skills?.map((tagGroup) => (
          <div className="skills-tag-group" key={tagGroup?.id}>
            <h4 className="skills-tag-group-title">{tagGroup?.title}</h4>
            {tagGroup?.tags?.map((tag) => (
              <Badge className="skills-tag-group-tag" key={tag}>{tag}</Badge>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
