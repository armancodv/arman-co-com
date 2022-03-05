import React from 'react';
import './Highlights.scss';
import highlightsSelectors from '../../../redux/highlights/highlightsSelectors';
import HighlightItem from '../../items/HighlightItem/HighlightItem';
import { useAppSelector } from '../../../redux/hooks';

const Highlights: React.FC = () => {
  const highlights = useAppSelector(highlightsSelectors.getHighlights);
  if (!highlights || !highlights.length) return null;
  return (
    <section className="highlights">
      <ul className="highlights-container">
        {highlights.map((highlight) => (
          <HighlightItem key={highlight?.id} highlight={highlight} />
        ))}
      </ul>
    </section>
  );
};

export default Highlights;
