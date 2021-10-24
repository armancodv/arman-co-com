import React from "react";
import {useSelector} from "react-redux";
import './Highlights.scss';
import highlightsSelectors from "../../../redux/highlights/highlightsSelectors";
import HighlightItem from "../../items/HighlightItem/HighlightItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHighlighter} from "@fortawesome/free-solid-svg-icons";

const Highlights: React.FC = () => {
    const highlights = useSelector(highlightsSelectors.getHighlights);
    if(!highlights || !highlights.length) return null;
    return (
        <section className="highlights">
            <h2 className="highlights-title">
                <FontAwesomeIcon icon={faHighlighter} className="highlights-title-icon"/>
                Highlights
            </h2>
            <ul className="highlights-container">
                {highlights.map((highlight) => <HighlightItem key={highlight?.id} highlight={highlight} />)}
            </ul>
        </section>
    )
}

export default Highlights;