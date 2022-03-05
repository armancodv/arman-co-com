import React from 'react';
import { Highlight } from '../../../redux/highlights/models_d';
import './HighlightItem.scss';

interface HighlightItemProps extends React.HTMLAttributes<HTMLDivElement> {
  highlight: Highlight;
}

const HighlightItem: React.FC<HighlightItemProps> = (props) => {
  return (
    <li>
      <article className="highlight-item">
        <div className="highlight-item-top">
          <h3 className="highlight-item-title">{props.highlight?.title}</h3>
        </div>
        <p className="highlight-item-description">
          {props.highlight?.description}
        </p>
      </article>
    </li>
  );
};

export default HighlightItem;
