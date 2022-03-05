import React from 'react';
import { Image } from 'react-bootstrap';
import './Avatar.scss';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <div className="avatar">
      <Image className="image" roundedCircle src={props.src} />
    </div>
  );
};

export default Avatar;
