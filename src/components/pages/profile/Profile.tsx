import React from "react";
import {useSelector} from "react-redux";
import profileSelectors from "../../../redux/profile/profileSelectors";
import './Profile.scss'
import {FetchState} from "../../../redux/models_d";
import State from "../../layout/State/State";

const Profile: React.FC = () => {
    const fetchState = useSelector(profileSelectors.getFetchState);
    const fullName = useSelector(profileSelectors.getFullName);
    const description = useSelector(profileSelectors.getDescription);
    return (
        <div className="profile">
            {fetchState !== FetchState.SUCCESS ? (
                <State variant="dark" fetchState={fetchState}/>
            ) : (
                <>
                    <h3>{fullName}</h3>
                    {description}
                </>
            )
            }
        </div>
    );
}

export default Profile;