import Scrollink from "components/ScrollLink"
import SocialIcon from "components/SocialIcon"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import opensea from "resources/custom/opensea.svg"
import "./style.scss"

const Header = ({ onSidebarClickHandler }) => (
  <div className="header flex">
    <div className="header-navbar flex">
      <FontAwesomeIcon icon={faBars} onClick={onSidebarClickHandler} />
      <Scrollink to="about">About</Scrollink>
      <Scrollink to="featured">Featured</Scrollink>
      <Scrollink to="roadmap">Roadmap</Scrollink>
      <Scrollink to="team">Team</Scrollink>
      <Scrollink to="connect">Connect Wallet</Scrollink>
    </div>
    <div className="header-socials flex">
      <SocialIcon isFA icon={faDiscord} to="https://discord.gg/nippleverse" />
      <SocialIcon isFA icon={faTwitter} to="https://twitter.com/nippleverse" />
      <SocialIcon
        isFA={false}
        icon={opensea}
        to="https://opensea.io/collection/nippleverse"
      />
    </div>
  </div>
)

export default Header
