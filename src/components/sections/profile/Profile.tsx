import React from "react";
import {useSelector} from "react-redux";
import profileSelectors from "../../../redux/profile/profileSelectors";
import './Profile.scss'
import {FetchState} from "../../../redux/models_d";
import State from "../../items/State/State";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faEnvelope, faGlobe, faMapMarker, faUser} from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../items/Avatar/Avatar";
import getFontAwesomeIcon from "../../../utils/getFontAwesomeIcon";
import {Button} from "react-bootstrap";
import {faPrint} from "@fortawesome/free-solid-svg-icons";
import QRCode from "react-qr-code";
import {REACT_APP_APP_BASE_URL} from "../../../config/config";

const Profile: React.FC = () => {
    const fetchState = useSelector(profileSelectors.getFetchState);
    const fullName = useSelector(profileSelectors.getFullName);
    const description = useSelector(profileSelectors.getDescription);
    const location = useSelector(profileSelectors.getLocation)
    const yearOfBirth = useSelector(profileSelectors.getYearOfBirth)
    const email = useSelector(profileSelectors.getEmail)
    const url = useSelector(profileSelectors.getUrl)
    const image = useSelector(profileSelectors.getImage)
    const socials = useSelector(profileSelectors.getSocial)
    const title = useSelector(profileSelectors.getTitle)
    return (
        <section className="profile">
            {fetchState !== FetchState.SUCCESS ? (
                <State variant="dark" fetchState={fetchState}/>
            ) : (
                <>
                    <Avatar src={image}/>
                    <div className="profile-contacts">
                        <h1 className="profile-contacts-title">
                            {fullName}
                        </h1>
                        <h2 className="profile-contacts-subtitle">
                            {title}
                        </h2>
                        <div className="profile-contacts-container">
                            <div className="profile-contacts-item">
                                <FontAwesomeIcon icon={faMapMarker} color="#477361"/> {location}
                            </div>
                            <div className="profile-contacts-item">
                                <FontAwesomeIcon icon={faCalendar} color="#477361"/> Born in {yearOfBirth}
                            </div>
                            <div className="profile-contacts-item">
                                <FontAwesomeIcon icon={faEnvelope} color="#477361"/> {email}
                            </div>
                            <div className="profile-contacts-item profile-contacts-url">
                                <a href={url}>
                                    <FontAwesomeIcon icon={faGlobe} color="#477361"/> {url}
                                </a>
                            </div>
                        </div>
                        <p className="profile-description">
                            {description}
                        </p>
                        <div className="profile-contacts-container">
                            {socials.map((social) => (
                                <div className="profile-contacts-item">
                                    <a href={social.link}>
                                        <FontAwesomeIcon icon={getFontAwesomeIcon(social.icon)} size="lg"
                                                         color="#477361"/> {social.link}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="profile-print">
                        <div className="qr-code">
                            <QRCode value={REACT_APP_APP_BASE_URL} size={100} bgColor="transparent" fgColor="#222222"/>
                        </div>
                        <div className="print">
                            <Button variant="outline-dark" onClick={() => {window.print();}}>
                                <FontAwesomeIcon icon={faPrint}/> Print
                            </Button>
                        </div>
                    </div>
                </>
            )
            }
        </section>
    );
}

export default Profile;