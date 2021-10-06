import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./style.scss"

const SocialIcon = ({ isFA, icon }) => (
  <div className="sociallink flex">
    {isFA ? <FontAwesomeIcon icon={icon} /> : <img src={icon} alt="social" />}
  </div>
)

export default SocialIcon
