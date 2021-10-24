import React from "react";
import './PortfolioItem.scss';
import {Badge} from "react-bootstrap";
import {Portfolio} from "../../../redux/portfolio/models_d";

interface PortfolioItemProps extends React.HTMLAttributes<HTMLDivElement> {
    portfolio: Portfolio;
}

const PortfolioItem: React.FC<PortfolioItemProps> = (props) => {
    return (
        <li>
            <article className="portfolio-item">
                <div className="portfolio-item-top">
                    <h4 className="portfolio-item-title">{props.portfolio?.title}</h4>
                </div>
                <p className="portfolio-item-description">{props.portfolio?.description}</p>
                <div className="portfolio-item-tags">
                    {props.portfolio?.tags?.map((tag) => (
                        <Badge variant="success" className="portfolio-item-tag">{tag}</Badge>
                    ))}
                </div>
                <div className="portfolio-item-links">{props.portfolio?.link}</div>
            </article>
        </li>
    );
}

export default PortfolioItem;