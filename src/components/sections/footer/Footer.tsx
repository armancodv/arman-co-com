import React from "react";
import './Footer.scss'
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faGooglePlay, faLinkedin, faMedium} from "@fortawesome/free-brands-svg-icons";
import {faCalendar, faDownload, faEnvelope, faGlobe, faMapMarker} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";
import profileSelectors from "../../../redux/profile/profileSelectors";

const Footer: React.FC = () => {
    const footer = useSelector(profileSelectors.getFooter)
    const fullName = useSelector(profileSelectors.getFullName);
    const location = useSelector(profileSelectors.getLocation)
    const yearOfBirth = useSelector(profileSelectors.getYearOfBirth)
    const email = useSelector(profileSelectors.getEmail)
    const url = useSelector(profileSelectors.getUrl)
    if(!footer) return null
    return (
        <div className="footer">
            <h2 className="footer-contacts-title">{fullName}</h2>
            <div className="footer-contacts-container">
                <div className="footer-contacts-item">
                    <FontAwesomeIcon icon={faMapMarker} color="#7c9a8e" /> {location}
                </div>
                <div className="footer-contacts-item">
                    <FontAwesomeIcon icon={faCalendar} color="#7c9a8e" /> Born in {yearOfBirth}
                </div>
                <div className="footer-contacts-item">
                    <FontAwesomeIcon icon={faEnvelope} color="#7c9a8e" /> {email}
                </div>
                <div className="footer-contacts-item footer-contacts-url">
                    <a href={url}>
                        <FontAwesomeIcon icon={faGlobe} color="#7c9a8e" /> {url}
                    </a>
                </div>
            </div>
            <div className="footer-buttons">
                <Button variant="secondary" className="footer-button" size="sm" href={footer?.pageSource} target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="footer-button-icon"/>
                    View source of this page
                </Button>
                <Button variant="secondary" className="footer-button" size="sm" href={footer?.github} target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="footer-button-icon"/>
                    My Open-Source projects
                </Button>
                <Button variant="secondary" className="footer-button" size="sm" href={footer?.googlePlay} target="_blank">
                    <FontAwesomeIcon icon={faGooglePlay} className="footer-button-icon"/>
                    My applications on Google Play
                </Button>
                <Button variant="secondary" className="footer-button" size="sm" href={footer?.medium} target="_blank">
                    <FontAwesomeIcon icon={faMedium} className="footer-button-icon"/>
                    My medium stories
                </Button>
                <Button variant="secondary" className="footer-button" size="sm" href={footer?.linkedin} target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className="footer-button-icon"/>
                    My linkedin profile
                </Button>
                <Button variant="secondary" className="footer-button" size="sm" onClick={() => {window.print();}}>
                    <FontAwesomeIcon icon={faDownload} className="footer-button-icon"/>
                    Download PDF
                </Button>
            </div>
        </div>
    );
}

export default Footer;