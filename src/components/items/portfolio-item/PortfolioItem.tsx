import React from "react";
import './PortfolioItem.scss';
import {Badge} from "react-bootstrap";
import {Portfolio} from "../../../redux/portfolio/models_d";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import getFontAwesomeIcon from "../../../utils/getFontAwesomeIcon";

interface PortfolioItemProps extends React.HTMLAttributes<HTMLDivElement> {
    portfolio: Portfolio;
}

const PortfolioItem: React.FC<PortfolioItemProps> = (props) => {
    return (
        <li>
            <a href={props.portfolio?.link} className="portfolio-item-link" target="_blank" rel="noreferrer">
                <article className="portfolio-item">
                    <div className="portfolio-item-top">
                        <h4 className="portfolio-item-title">
                            <FontAwesomeIcon icon={getFontAwesomeIcon(props.portfolio?.icon)} className="portfolio-item-title-icon-left"/>
                            {props.portfolio?.title}
                            <FontAwesomeIcon icon={faExternalLinkAlt} className="portfolio-item-title-icon-right"/>
                        </h4>
                    </div>
                    <p className="portfolio-item-description">{props.portfolio?.description}</p>
                    <div className="portfolio-item-tags">
                        {props.portfolio?.tags?.map((tag) => (
                            <Badge className="portfolio-item-tag">{tag}</Badge>
                        ))}
                    </div>
                </article>
            </a>
        </li>
    );
}

export default PortfolioItem;