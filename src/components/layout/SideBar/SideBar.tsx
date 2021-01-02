import React from "react";
import Avatar from "../Avatar/Avatar";
import './SideBar.scss';
import {useSelector} from "react-redux";
import profileSelectors from "../../../redux/profile/profileSelectors";
import {Badge} from "react-bootstrap";

const SideBar: React.FC = () => {
    const fullName = useSelector(profileSelectors.getFullName)
    const nickName = useSelector(profileSelectors.getNickName)
    const title = useSelector(profileSelectors.getTitle)
    const image = useSelector(profileSelectors.getImage)
    return (
        <div className="side-bar">
            <Avatar src={image} />
            <h1>{fullName}</h1>
            <Badge variant="primary">{nickName.toUpperCase()}</Badge>
            <h2>{title}</h2>
        </div>
    );
}

export default SideBar;