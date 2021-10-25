import React from "react";
import './PublicationItem.scss';
import {Publication} from "../../../redux/profile/models_d";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";

interface PublicationItemProps extends React.HTMLAttributes<HTMLDivElement> {
    publication: Publication;
}

const PublicationItem: React.FC<PublicationItemProps> = (props) => {
    return (
        <li>
            <article className="publication-item">
                <a href={props.publication?.link} className="publication-item-link" target="_blank" rel="noreferrer">
                    <h3 className="publication-item-title">
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="publication-item-title-icon"/>
                        {props.publication?.title}
                    </h3>
                    <p className="publication-item-journal">{props.publication?.journal}</p>
                    <p className="publication-item-date">{props.publication?.date}</p>
                </a>
            </article>
        </li>
    );
}

export default PublicationItem;