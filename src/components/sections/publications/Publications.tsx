import React from 'react';
import './Publications.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons';
import profileSelectors from '../../../redux/profile/profileSelectors';
import PublicationItem from '../../items/publication-item/PublicationItem';
import {useAppSelector} from '../../../redux/hooks';

const Publications: React.FC = () => {
  const publications = useAppSelector(profileSelectors.getPublications);
  if (!publications || !publications.length) return null;
  return (
    <section className="publications">
      <h2 className="publications-title">
        <FontAwesomeIcon icon={faBook} className="publications-title-icon"/>
                Publications
      </h2>
      <ul className="publications-container">
        {publications.map((publication) => (
          <PublicationItem key={publication?.id} publication={publication} />
        ))}
      </ul>
    </section>
  );
};

export default Publications;
