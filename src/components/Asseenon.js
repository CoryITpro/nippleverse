import React from "react"
import styled from "styled-components"
import { NFTCalendar, Hackernoon, NFTPlazas } from "assets"

const AsSeenOn = () => (
  <Wrapper>
    <div className="container">
      <h1>As Seen On</h1>
      <div className="sponsor-list">
        <a
          href="https://nftcalendar.io/event/free-the-nippleverse/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={NFTCalendar} alt="Sponsor 1" />
        </a>
        <a
          href="https://hackernoon.com/i-spy-pixelated-nipples-on-the-blockchain-freethenipple"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Hackernoon} alt="Sponsor 2" />
        </a>
        <a
          href="https://nftplazas.com/nippleverse-nft-collectibles/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={NFTPlazas} alt="Sponsor 3" />
        </a>
      </div>
    </div>
  </Wrapper>
)

const Wrapper = styled.article`
  position: relative;
  padding: 6rem 0;
  padding-top: 0;

  .sponsor-list {
    display: grid;
    grid-template: auto / 1fr 1fr 1fr 1fr;
    column-gap: 24px;
    align-items: center;
    margin-bottom: 4.5rem;

    @media (max-width: 768px) {
      grid-template: auto / 1fr 1fr;
    }

    & > a {
      width: 100%;

      & > img {
        width: 100%;
      }
    }
  }
`
export default AsSeenOn
