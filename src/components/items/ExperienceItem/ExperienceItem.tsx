import React from 'react';
import {Experience} from '../../../redux/experience/models_d';
import './ExperienceItem.scss';
import {Image} from 'react-bootstrap';

interface ExperienceItemProps extends React.HTMLAttributes<HTMLDivElement> {
    experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = (props) => {
  return (
    <li>
      <article className="experience-item">
        <div className="experience-item-avatar">
          <Image className="image" src={props.experience?.company?.image}
            rounded={true}/>
        </div>
        <div className="experience-item-details">
          <h3 className="experience-item-title">{props.experience?.title}</h3>
          <p className="experience-item-company-name">
            {props.experience?.company?.title}
          </p>
          <p className="experience-item-duration">
            {props.experience?.duration}
          </p>
          <p className="experience-item-location">
            {props.experience?.location}
          </p>
          {props.experience?.description?.split('\n')?.map((line) => (
            <p className="experience-item-description" key={line}>{line}</p>),
          )}
        </div>
      </article>
    </li>
  );
};

export default ExperienceItem;
