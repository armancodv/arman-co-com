import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {
    faAndroid,
    faGithub,
    faJava,
    faJs,
    faLinkedin,
    faMedium,
    faNodeJs,
    faPhp,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";

export type IconString = 'github' | 'linkedin' | 'twitter' | 'medium' | 'js' | 'android' | 'php' | 'java' | 'nodeJs';

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
        case "android":
            return faAndroid;
        case "php":
            return faPhp;
        case "java":
            return faJava;
        case "nodeJs":
            return faNodeJs;
    }
}

export default getFontAwesomeIcon;