import React from 'react';
import './EducationItem.scss';
import { Image } from 'react-bootstrap';
import { Education } from '../../../redux/profile/models_d';

interface EducationItemProps extends React.HTMLAttributes<HTMLDivElement> {
  education: Education;
}

const EducationItem: React.FC<EducationItemProps> = (props) => {
  return (
    <li>
      <article className="education-item">
        <div className="education-item-avatar">
          <Image
            className="image"
            src={props.education?.image}
            rounded={true}
          />
        </div>
        <div className="education-item-details">
          <h3 className="education-item-university">
            {props.education?.university}
          </h3>
          <p className="education-item-level">{props.education?.level}</p>
          <p className="education-item-duration">{props.education?.duration}</p>
        </div>
      </article>
    </li>
  );
};

export default EducationItem;
