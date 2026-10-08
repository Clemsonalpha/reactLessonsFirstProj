import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUpRightFromSquare, faBars, faMoon, faSun, faXmark, faEnvelope, faLocationDot, faCode, faPalette, faMobileScreenButton, faLayerGroup, faPaperPlane, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const icons = { arrow: faArrowRight, external: faArrowUpRightFromSquare, menu: faBars, moon: faMoon, sun: faSun, close: faXmark, mail: faEnvelope, pin: faLocationDot, code: faCode, palette: faPalette, mobile: faMobileScreenButton, layers: faLayerGroup, send: faPaperPlane, check: faCheck, github: faGithub, linkedin: faLinkedinIn, instagram: faInstagram, whatsapp: faWhatsapp };
export default function Icon({ name, ...props }) { return <FontAwesomeIcon icon={icons[name] || faArrowRight} {...props} />; }
