import React, { useState, useEffect } from "react"
import styled from "styled-components"
import {
  Intro,
  Banner,
  Featured,
  Roadmap,
  Team,
  Faq,
  Footer,
  Loading,
} from "../components"
import { useAppContext } from "../context/app_context"
import { nftPrice } from "utils/constants"
import { mintNFT } from "helpers/interact"
import { generateInitIds, getDiffArray } from "helpers/index"
import {
  getOccupiedIds,
  getPrice,
  getMaxSupply,
  getCurrentMaxSupply,
  getCurrentMaxMint,
} from "helpers/contract"

const HomePage = ({ walletAddress }) => {
  const { isLoading } = useAppContext()

  const [mintLoading, setMintLoading] = useState(false)

  const [maxMint, setMaxMint] = useState(0)
  const [maxSupply, setMaxSupply] = useState(0)
  const [maxCurrentSupply, setMaxCurrentSupply] = useState(0)

  const [mintInputValue, setMintInputValue] = useState("20")
  const [mintTotal, setMintTotal] = useState(null)
  const [newMint, setNewMint] = useState([])

  const handleInputChange = (input) => {
    if (!Number(input.value) && input.value !== "") return

    if (Number(input.value) < 0) {
      setMintInputValue("1")
    } else if (Number(input.value) > maxMint) {
      setMintInputValue(maxMint.toString())
    } else {
      setMintInputValue(input.value)
    }
  }

  useEffect(() => {
    const initApp = async () => {
      let mintMax = await getCurrentMaxMint()
      setMaxMint(mintMax)

      let supplyMax = await getMaxSupply()
      setMaxSupply(supplyMax)

      let currentSupplyMax = await getCurrentMaxSupply()
      setMaxCurrentSupply(currentSupplyMax)
    }

    initApp()
  }, [])

  useEffect(() => {
    const calculatePrice = async () => {
      let price = await getPrice(Number(mintInputValue))
      setMintTotal(price.toFixed(3))
    }

    calculatePrice()
  }, [mintInputValue])

  const getRandomIds = async () => {
    let customIds = []
    const baseIds = generateInitIds()
    const occupied = await getOccupiedIds()
    const diffIds = getDiffArray(baseIds, occupied)

    while (customIds.length < Number(mintInputValue)) {
      const id = Math.floor(Math.random() * diffIds.length)
      const index = diffIds[id]
      customIds.push(index)
    }

    return customIds
  }

  const onMintHandler = async () => {
    if (!!walletAddress) {
      setMintLoading(true)
      const randomIds = await getRandomIds()
      console.log(randomIds)

      const { _, state } = await mintNFT(
        walletAddress,
        setMintLoading,
        setNewMint,
        randomIds
      )

      console.log(state)
    }
  }

  return (
    <MainWrapper>
      {isLoading && <Loading />}
      <Intro />
      <Banner
        mintLoading={mintLoading}
        mintTotal={mintTotal}
        mintInputValue={mintInputValue}
        onMintHandler={onMintHandler}
        handleInputChange={handleInputChange}
      />
      <Featured />
      <Roadmap />
      <Team />
      <Faq />
      <Footer />
    </MainWrapper>
  )
}

const MainWrapper = styled.main``

export default HomePage
