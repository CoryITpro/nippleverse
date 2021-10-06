import Sidebar from "components/Sidebar"
import Header from "components/Header"
import About from "components/About"
import Minter from "components/Minter"
import Featured from "components/Featured"
import Roadmap from "components/Roadmap"
import Team from "components/Team"
import "./style.scss"

const Dashboard = ({
  showSidebar,
  onSidebarClickHandler,
  mintCount,
  onMintCountChangeHandler,
  onMinting,
  walletAddress,
  onConnectWalletHandler,
}) => (
  <div className="dashboard">
    <Sidebar
      showSidebar={showSidebar}
      onSidebarClickHandler={onSidebarClickHandler}
      walletAddress={walletAddress}
      onConnectWalletHandler={onConnectWalletHandler}
    />
    <Header
      onSidebarClickHandler={onSidebarClickHandler}
      walletAddress={walletAddress}
      onConnectWalletHandler={onConnectWalletHandler}
    />
    <About />
    <Minter
      mintCount={mintCount}
      onMintCountChangeHandler={onMintCountChangeHandler}
      onMinting={onMinting}
    />
    <Featured />
    <Roadmap />
    <Team />
  </div>
)

export default Dashboard
