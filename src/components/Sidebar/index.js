import Scrollink from "components/ScrollLink"
import ConnectButton from "components/ConnectButton"
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
    <ConnectButton onClick={onConnectWalletHandler}>
      {walletAddress === ""
        ? "Connect Wallet"
        : walletAddress.slice(0, 6) + "..." + walletAddress.slice(38)}
    </ConnectButton>
  </div>
)

export default Sidebar
