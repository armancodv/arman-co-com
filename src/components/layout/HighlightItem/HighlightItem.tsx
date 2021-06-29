import React from "react";
import {Highlight} from "../../../redux/highlights/models_d";
import './HighlightItem.scss';
import {Badge, Button, Image} from "react-bootstrap";

interface HighlightItemProps extends React.HTMLAttributes<HTMLDivElement> {
    highlight: Highlight;
}

const HighlightItem: React.FC<HighlightItemProps> = (props) => {
    return (
        <li className="highlight-item">
            <div className="highlight-item-top">
                <h3 className="highlight-item-title">{props.highlight?.title}</h3>
            </div>
            <p className="highlight-item-description">{props.highlight?.description}</p>
            <div className="highlight-item-tag-groups">
            {props.highlight?.tagGroups?.map((tagGroup) => (
                <div className="highlight-item-tag-group">
                    <h4 className="highlight-item-tag-group-title">{tagGroup?.title}</h4>
                    {tagGroup?.tags?.map((tag) => (
                        <Badge variant="secondary" className="highlight-item-tag-group-tag">{tag}</Badge>
                    ))}
                </div>
            ))}
            </div>
            <div className="highlight-item-links">
                {props.highlight?.links?.map((link) => (
                    <Button className="highlight-item-link"
                            key={link?.id}
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => window.open(link?.url)}>{link?.title}</Button>
                ))}
            </div>
        </li>
    );
}

export default HighlightItem;