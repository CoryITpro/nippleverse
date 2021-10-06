import { useState, useEffect } from "react"
import DashboardComponent from "components/Dashboard"

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  const [mintCount, setMintCount] = useState(1)
  const [onMinting, setOnMinting] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", getWindowWidth)

    return () => window.removeEventListener("resize", getWindowWidth)
  }, [])

  const getWindowWidth = () => {
    const { innerWidth: width } = window
    if (width > 768) {
      setShowSidebar(false)
    }
  }

  const onSidebarClickHandler = () => {
    setShowSidebar(!showSidebar)
  }

  const onMintCountChangeHandler = (e) => {
    e.preventDefault()
    let { value } = e.target

    if (value <= 0) {
      value = 1
    } else if (value > 5) {
      value = 5
    }

    setMintCount(value)
  }

  return (
    <DashboardComponent
      showSidebar={showSidebar}
      onSidebarClickHandler={onSidebarClickHandler}
      mintCount={mintCount}
      onMintCountChangeHandler={onMintCountChangeHandler}
      onMinting={onMinting}
    />
  )
}

export default Dashboard
