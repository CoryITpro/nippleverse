import Scrollink from "components/ScrollLink"
import "./style.scss"

const Sidebar = ({ showSidebar, onSidebarClickHandler }) => (
  <div
    className={`sidebar flex flex-column${showSidebar ? " show" : ""}`}
    onClick={onSidebarClickHandler}
  >
    <p>NippleVerse</p>
    <Scrollink to="about" onClick={onSidebarClickHandler}>
      About
    </Scrollink>
    <Scrollink to="featured" onClick={onSidebarClickHandler}>
      Featured
    </Scrollink>
    <Scrollink to="roadmap" onClick={onSidebarClickHandler}>
      Roadmap
    </Scrollink>
    <Scrollink to="team" onClick={onSidebarClickHandler}>
      Team
    </Scrollink>
    <Scrollink to="connect" onClick={onSidebarClickHandler}>
      Connect Wallet
    </Scrollink>
  </div>
)

export default Sidebar
