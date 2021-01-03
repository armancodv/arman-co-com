import React from "react";
import {useSelector} from "react-redux";
import profileSelectors from "../../../redux/profile/profileSelectors";

const Profile: React.FC = () => {
    const description = useSelector(profileSelectors.getDescription);
    return (
        <div>
            {description}
        </div>
    );
}

export default Profile;