import React from "react";
import {useSelector} from "react-redux";
import profileSelectors from "../../../redux/profile/profileSelectors";
import './Profile.scss'
import {FetchState} from "../../../redux/models_d";
import State from "../../items/State/State";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faEnvelope, faGlobe, faMapMarker} from "@fortawesome/free-solid-svg-icons";

const Profile: React.FC = () => {
    const fetchState = useSelector(profileSelectors.getFetchState);
    const fullName = useSelector(profileSelectors.getFullName);
    const description = useSelector(profileSelectors.getDescription);
    const location = useSelector(profileSelectors.getLocation)
    const yearOfBirth = useSelector(profileSelectors.getYearOfBirth)
    const email = useSelector(profileSelectors.getEmail)
    const url = useSelector(profileSelectors.getUrl)
    return (
        <section className="profile">
            {fetchState !== FetchState.SUCCESS ? (
                <State variant="dark" fetchState={fetchState}/>
            ) : (
                <>
                    <h3>{fullName}</h3>
                    <div className="profile-contacts-container">
                        <div className="profile-contacts-item">
                            <FontAwesomeIcon icon={faMapMarker} color="#7c9a8e" /> {location}
                        </div>
                        <div className="profile-contacts-item">
                            <FontAwesomeIcon icon={faCalendar} color="#7c9a8e" /> Born in {yearOfBirth}
                        </div>
                        <div className="profile-contacts-item">
                            <FontAwesomeIcon icon={faEnvelope} color="#7c9a8e" /> {email}
                        </div>
                        <div className="profile-contacts-item profile-contacts-url">
                            <a href={url}>
                                <FontAwesomeIcon icon={faGlobe} color="#7c9a8e" /> {url}
                            </a>
                        </div>

                    </div>
                    <p className="profile-description">
                        {description}
                    </p>
                </>
            )
            }
        </section>
    );
}

export default Profile;