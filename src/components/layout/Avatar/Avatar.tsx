import React from "react";
import {Image} from "react-bootstrap";
import './Avatar.scss';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {
    return (
        <div {...props} className="avatar">
            <Image className="image" roundedCircle src={props.src} width={200} height={200} />
        </div>
    );
}

export default Avatar;