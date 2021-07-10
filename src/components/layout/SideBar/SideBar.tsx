import React from "react";
import QRCode from "react-qr-code";
import Avatar from "../Avatar/Avatar";
import './SideBar.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useSelector} from "react-redux";
import profileSelectors from "../../../redux/profile/profileSelectors";
import {Badge, Button} from "react-bootstrap";
import {FetchState} from "../../../redux/models_d";
import State from "../State/State";
import getFontAwesomeIcon from "../../../utils/getFontAwesomeIcon";
import {REACT_APP_APP_BASE_URL} from "../../../config/config";
import {faPrint} from "@fortawesome/free-solid-svg-icons";

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
                    <div className="print">
                        <Button variant="primary" onClick={() => {window.print();}}>
                            <FontAwesomeIcon icon={faPrint}/> Print CV
                        </Button>
                    </div>
                    <div className="qr-code">
                        <QRCode value={REACT_APP_APP_BASE_URL} size={128} bgColor="transparent" fgColor="#7c9a8e"/>
                    </div>
                </>
            )}
        </div>
    );
}

export default SideBar;