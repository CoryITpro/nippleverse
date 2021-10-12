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
import { getOccupiedIds } from "helpers/contract"

const HomePage = ({ walletAddress }) => {
  const { isLoading } = useAppContext()

  const [mintLoading, setMintLoading] = useState(false)
  const [mintInputValue, setMintInputValue] = useState("20")
  const [mintTotal, setMintTotal] = useState(null)
  const [newMint, setNewMint] = useState([])

  const handleInputChange = (input) => {
    if (!Number(input.value) && input.value !== "") return

    if (Number(input.value) < 0) {
      setMintInputValue("1")
    } else if (Number(input.value) > 20) {
      setMintInputValue("20")
    } else {
      setMintInputValue(input.value)
    }
  }

  useEffect(() => {
    setMintTotal(Number(Number(mintInputValue) * nftPrice).toFixed(3))
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
