import React from "react";
import {Highlight} from "../../../redux/highlights/models_d";
import './HighlightItem.scss';
import {Badge} from "react-bootstrap";

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
                <p className="highlight-item-description">{props.highlight?.description}</p>
                <div className="highlight-item-tag-groups">
                    {props.highlight?.tagGroups?.map((tagGroup) => (
                        <div className="highlight-item-tag-group">
                            <h4 className="highlight-item-tag-group-title">{tagGroup?.title}</h4>
                            {tagGroup?.tags?.map((tag) => (
                                <Badge variant="success" className="highlight-item-tag-group-tag">{tag}</Badge>
                            ))}
                        </div>
                    ))}
                </div>
            </article>
        </li>
    );
}

export default HighlightItem;