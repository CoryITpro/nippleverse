import Header from "components/Header"
import Sidebar from "components/Sidebar"
import "./style.scss"

const Dashboard = ({ showSidebar, onSidebarClickHandler }) => (
  <div className="dashboard">
    <Sidebar
      showSidebar={showSidebar}
      onSidebarClickHandler={onSidebarClickHandler}
    />
    <Header onSidebarClickHandler={onSidebarClickHandler} />
  </div>
)

export default Dashboard
