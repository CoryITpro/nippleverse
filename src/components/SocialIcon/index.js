import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./style.scss"

const SocialIcon = ({ isFA, icon, to }) => (
  <div className="sociallink">
    <a
      className="flex"
      href={to}
      target="_blank"
      rel="noreferrer"
      aria-label="social-icons"
    >
      {isFA ? <FontAwesomeIcon icon={icon} /> : <img src={icon} alt="social" />}
    </a>
  </div>
)

export default SocialIcon
