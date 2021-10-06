import Scrollink from "components/ScrollLink"
import "./style.scss"

const Sidebar = ({
  showSidebar,
  onSidebarClickHandler,
  walletAddress,
  onConnectWalletHandler,
}) => (
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
    <Scrollink
      to="connect"
      onClick={() => {
        onSidebarClickHandler()
        onConnectWalletHandler()
      }}
    >
      {walletAddress === ""
        ? "Connect Wallet"
        : walletAddress.slice(0, 6) + "..." + walletAddress.slice(38)}
    </Scrollink>
  </div>
)

export default Sidebar
