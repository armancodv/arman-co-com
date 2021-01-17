import React from "react";
import Avatar from "../Avatar/Avatar";
import './SideBar.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useSelector} from "react-redux";
import profileSelectors from "../../../redux/profile/profileSelectors";
import {Badge} from "react-bootstrap";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faGithub, faLinkedin, faMedium, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FetchState} from "../../../redux/models_d";
import State from "../State/State";
import getFontAwesomeIcon from "../../../utils/getFontAwesomeIcon";

const SideBar: React.FC = () => {
    const fetchState = useSelector(profileSelectors.getFetchState)
    const fullName = useSelector(profileSelectors.getFullName)
    const nickName = useSelector(profileSelectors.getNickName)
    const title = useSelector(profileSelectors.getTitle)
    const image = useSelector(profileSelectors.getImage)
    const social = useSelector(profileSelectors.getSocial)
    return (
        <div className="side-bar">
            {fetchState !== FetchState.SUCCESS ? (
                <State variant="primary" fetchState={fetchState}/>
            ) : (
                <>
                    <Avatar src={image}/>
                    <h1>{fullName}</h1>
                    <Badge variant="primary">{nickName.toUpperCase()}</Badge>
                    <h2>{title}</h2>
                    <div className="social">
                        {social.map((item) => (
                            <a href={item?.link} target="_blank" key={item?.id}>
                                <FontAwesomeIcon icon={getFontAwesomeIcon(item?.icon)} color="#eeeeee" size="2x"/>
                            </a>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default SideBar;