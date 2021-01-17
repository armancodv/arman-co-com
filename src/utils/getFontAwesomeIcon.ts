import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faGithub, faJs, faLinkedin, faMedium, faTwitter} from "@fortawesome/free-brands-svg-icons";

export type IconString = 'github' | 'linkedin' | 'twitter' | 'medium' | 'js';

const getFontAwesomeIcon = (icon: IconString): IconProp => {
    switch (icon) {
        case "github":
            return faGithub;
        case "linkedin":
            return faLinkedin;
        case "twitter":
            return faTwitter;
        case "medium":
            return faMedium;
        case "js":
            return faJs;
    }
}

export default getFontAwesomeIcon;