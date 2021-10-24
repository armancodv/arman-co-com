import React from "react";
import './PublicationItem.scss';
import {Publication} from "../../../redux/profile/models_d";

interface PublicationItemProps extends React.HTMLAttributes<HTMLDivElement> {
    publication: Publication;
}

const PublicationItem: React.FC<PublicationItemProps> = (props) => {
    return (
        <li>
            <article className="publication-item">
                <h3 className="publication-item-title">{props.publication?.title}</h3>
                <p className="publication-item-journal">{props.publication?.journal}</p>
                <p className="publication-item-date">{props.publication?.date}</p>
                <p className="publication-item-link">{props.publication?.link}</p>
            </article>
        </li>
    );
}

export default PublicationItem;