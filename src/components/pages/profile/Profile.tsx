import React from "react";
import {useSelector} from "react-redux";
import profileSelectors from "../../../redux/profile/profileSelectors";
import './Profile.scss'

const Profile: React.FC = () => {
    const fullName = useSelector(profileSelectors.getFullName);
    const description = useSelector(profileSelectors.getDescription);
    return (
        <div className="profile">
            <h3>{fullName}</h3>
            {description}
        </div>
    );
}

export default Profile;