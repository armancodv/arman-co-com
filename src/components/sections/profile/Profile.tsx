import React from "react";
import profileSelectors from "../../../redux/profile/profileSelectors";
import './Profile.scss'
import {FetchState} from "../../../redux/models_d";
import State from "../../items/State/State";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faEnvelope, faGlobe, faMapMarker} from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../items/Avatar/Avatar";
import getFontAwesomeIcon from "../../../utils/getFontAwesomeIcon";
import {Button} from "react-bootstrap";
import {faPrint} from "@fortawesome/free-solid-svg-icons";
import QRCode from "react-qr-code";
import {REACT_APP_APP_BASE_URL} from "../../../config/config";
import {useAppSelector} from "../../../redux/hooks";

const Profile: React.FC = () => {
    const fetchState = useAppSelector(profileSelectors.getFetchState);
    const fullName = useAppSelector(profileSelectors.getFullName);
    const description = useAppSelector(profileSelectors.getDescription);
    const location = useAppSelector(profileSelectors.getLocation)
    const yearOfBirth = useAppSelector(profileSelectors.getYearOfBirth)
    const email = useAppSelector(profileSelectors.getEmail)
    const url = useAppSelector(profileSelectors.getUrl)
    const image = useAppSelector(profileSelectors.getImage)
    const socials = useAppSelector(profileSelectors.getSocial)
    const title = useAppSelector(profileSelectors.getTitle)
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