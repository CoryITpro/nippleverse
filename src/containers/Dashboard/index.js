import { useState, useEffect } from "react"
import DashboardComponent from "components/Dashboard"
import { connectWallet, getCurrentWalletConnected } from "helpers/wallet"

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  const [mintCount, setMintCount] = useState(1)
  const [onMinting, setOnMinting] = useState(false)

  const [walletAddress, setWalletAddress] = useState("")
  const [soldOut, setSoldOut] = useState(0)

  useEffect(() => {
    const initProject = async () => {
      if (window.ethereum) {
        const { address, status } = await getCurrentWalletConnected()

        console.log(address)
        setWalletAddress(address)

        onChangeWalletListener()
        onConnectWalletHandler()
      }
    }

    initProject()

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

  const onChangeWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length) {
          setWalletAddress(accounts[0])
        } else {
          setWalletAddress("")
        }
      })

      window.ethereum.on("chainChanged", () => {
        onConnectWalletHandler()
      })
    }
  }

  const onConnectWalletHandler = async () => {
    const { address, status } = await connectWallet()

    console.log(address)
    setWalletAddress(address)
  }

  return (
    <DashboardComponent
      showSidebar={showSidebar}
      onSidebarClickHandler={onSidebarClickHandler}
      mintCount={mintCount}
      onMintCountChangeHandler={onMintCountChangeHandler}
      onMinting={onMinting}
      walletAddress={walletAddress}
      onConnectWalletHandler={onConnectWalletHandler}
    />
  )
}

export default Dashboard
