import React from "react";
import {useSelector} from "react-redux";
import './Highlights.scss';
import highlightsSelectors from "../../../redux/highlights/highlightsSelectors";
import HighlightItem from "../../layout/HighlightItem/HighlightItem";

const Highlights: React.FC = () => {
    const highlights = useSelector(highlightsSelectors.getHighlights);
    if(!highlights || !highlights.length) return null;
    return (
        <section className="highlights">
            <ul className="highlights-container">
                {highlights.map((highlight) => <HighlightItem key={highlight?.id} highlight={highlight} />)}
            </ul>
        </section>
    )
}

export default Highlights;