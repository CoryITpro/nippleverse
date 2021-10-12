import React from "react"
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

const HomePage = () => {
  const { isLoading } = useAppContext()

  return (
    <MainWrapper>
      {isLoading && <Loading />}
      <Intro />
      <Banner />
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
