import React from "react"
import styled from "styled-components"
import {
  roadmapBg,
  roadmapBgBottom,
  RoadmapBg1,
  RoadmapBg2,
  phase1Line,
  phase2Line,
  phase3Line,
  phase4Line,
  phase1Bg,
  phase2Bg,
  phase3Bg,
  phase4Bg,
  phase5Bg,
} from "../assets"

const Roadmap = () => {
  return (
    <Wrapper>
      <div className="roadmap-background">
        <div className="bg-container">
          <img src={roadmapBg} alt="RoadMap Background" />
          <img src={roadmapBgBottom} alt="RoadMap Background Bottom" />
        </div>
      </div>
      <div id="roadmap" className="container">
        <h1>RoadMap</h1>
        <p className="roadmap-text">
          10% of all funds collected will be contributed to a charity (With
          Onchain Proof), so you will get a cool nipple that with the power of
          the community and NFN(Non-Fungiblenomics)retains its value and you
          will also aid to a good cause.
        </p>
        <div className="roadmap-steps">
          <div className="roadmap-steps-background">
            <RoadmapBg1 className="first-row" />
            <RoadmapBg2 className="second-row" />
          </div>

          <div className="phase-container">
            <div className="phase phase-1">
              <p>
                Phase <span>1</span>
              </p>
            </div>

            <div className="glass-background item">
              <p className="title">
                0% - The journey begins, welcome to the Nippleverse
              </p>
              <ul className="text">
                <li>
                  The minting process begins with 0.08008 Eth(boobs lol) as a
                  minting price
                </li>
                <li>
                  A private discord channel gets unlocked(Only for Nipple
                  owners)
                </li>
                <li>Release of 1/1 Halloween Nipple</li>
                <li>One airdropped nipple to the first 69 buyers</li>
                <li>
                  Owners get a special seat in what will appear next in the
                  multiverse
                </li>
                <li>1ETH giveaway to the first 100 buyers</li>
              </ul>
            </div>
          </div>

          <div className="phase-container">
            <div className="phase phase-2">
              <p>
                Phase <span>2</span>
              </p>
            </div>

            <div className="glass-background item">
              <p className="title">25% - Expanding the Nipplevers</p>
              <ul className="text">
                <li>Rewards for active Discord members(Invite Contest)</li>
                <li>10% sales charity donation equal to aprox 32,000$</li>
                <li>1ETH + 1 Nipple community airdrop to random holders</li>
                <li>
                  Because rare traits aren’t the only beautiful thing, there
                  will be a weekly contest where the community can vote the best
                  looking nipple, winners will be displayed in a special gallery
                  named “Beauty lays in the nipple of the beholder”
                </li>
              </ul>
            </div>
          </div>

          <div className="phase-container">
            <div className="phase phase-3">
              <p>
                Phase <span>3</span>
              </p>
            </div>

            <div className="glass-background item">
              <p className="title">50% - 4th Wall break</p>
              <ul className="text">
                <li>Meme contest, the winner will receive 1ETH and 1 nipple</li>
                <li>
                  Retweet giveaway: A random person that retweets and follows
                  gets a nipple
                </li>
                <li>3ETH community airdrop to random holders</li>
                <li>
                  Nipples worth 32500$ will be bought and burned to lift the
                  floor price
                </li>
              </ul>
            </div>
          </div>

          <div className="phase-container">
            <div className="phase phase-4">
              <p>
                Phase <span>4</span>
              </p>
            </div>

            <div className="glass-background item">
              <p className="title">75% - Vincent van Nipple</p>
              <ul className="text">
                <li>
                  Nipple Art contest: Use nipples in the most creative ways and
                  post them on twitter with the #nippleverse hashtag, the winner
                  gets 1ETH
                </li>
                <li>5ETH community airdrop to random holders</li>
                <li>
                  Nipples worth 50,000$ will be bought and burned to lift the
                  floor price
                </li>
              </ul>
            </div>
          </div>

          <div className="phase-container">
            <div className="phase phase-5">
              <p>
                Phase <span>5</span>
              </p>
            </div>

            <div className="glass-background item">
              <p className="title">100% - The ETHernal nippleverse</p>
              <ul className="text">
                <li>
                  10% of royalty fees will get airdropped to holders as ETH
                  monthly
                </li>
                <li>7ETH community airdrop to random holders</li>
                <li>
                  Nipples worth 65000$ will be bought and burned to lift the
                  floor price
                </li>
                <li>
                  Special antimatter formula that can be used to enhance your
                  nipples in the future
                </li>
                <li>
                  50% of royalty fees will be used to buyback and burn nfts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  position: relative;
  padding: 6rem 0;
  text-align: center;
  /* overflow: hidden; */

  .roadmap-background {
    user-select: none;
    pointer-events: none;
    position: absolute;
    bottom: -35vw;
    left: 0;
    width: 100%;
    z-index: -1;
    overflow: visible;
    .bg-container {
      position: relative;
      &::after {
        content: "";
        background-image: linear-gradient(
          to bottom,
          rgba(45, 0, 103, 0),
          rgba(45, 0, 103, 0.7),
          #2d0067,
          rgba(45, 0, 103, 0.7),
          rgba(45, 0, 103, 0)
        );
        position: absolute;
        bottom: -400px;
        left: 0;
        width: 100%;
        height: 800px;
      }
    }

    img {
      display: block;
      object-fit: cover;
      width: 100%;
      /* max-height: 1600px; */

      &:last-of-type {
        position: absolute;
        bottom: 2.2%;
        z-index: -1;
      }
    }
  }

  .roadmap-text {
    max-width: 940px;
    margin: 0 auto;
    margin-bottom: 5rem;
  }

  .roadmap-steps {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 5rem 0;

    .phase {
      display: none;
      justify-content: center;
      align-items: center;
      color: #190044;
      width: 67px;
      height: 67px;
      background-color: #fff;
      border-radius: 50%;
      line-height: 1;
      font-size: 0.85rem;
      font-weight: 500;
      padding-top: 4px;

      span {
        font-weight: 600;
        display: block;
        font-size: 1rem;
        margin-top: 0.3rem;
      }

      &::before {
        content: "";
        position: absolute;
        top: -4px;
        left: -4px;
        width: calc(67px + 8px);
        height: calc(67px + 8px);
        z-index: -1;
      }

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 33.5px;
        top: 67px;
        width: 2px;
        height: calc(100% - 67px + 2rem);
        z-index: -1;
      }

      &.phase-1 {
        &::before {
          background-image: url(${phase1Bg});
        }
        &::after {
          background-image: url(${phase1Line});
        }
      }
      &.phase-2 {
        &::before {
          background-image: url(${phase2Bg});
        }
        &::after {
          background-image: url(${phase2Line});
        }
      }
      &.phase-3 {
        &::before {
          background-image: url(${phase3Bg});
        }
        &::after {
          background-image: url(${phase3Line});
        }
      }
      &.phase-4 {
        &::before {
          background-image: url(${phase4Bg});
        }
        &::after {
          background-image: url(${phase4Line});
        }
      }
      &.phase-5 {
        &::before {
          background-image: url(${phase5Bg});
        }
      }
    }

    .roadmap-steps-background {
      user-select: none;
      pointer-events: none;
      position: absolute;
      left: -3rem;
      top: 1rem;
      width: calc(100% + 6rem);
      height: 100%;
      z-index: -1;
      .first-row {
        width: 100%;
      }
      .second-row {
        position: absolute;
        left: 0;
        top: 52%;
        width: 82%;
      }
    }

    .phase-container {
      position: relative;
      width: calc(33.3333% - 1rem);
      &:nth-child(2) {
        margin-left: 0;
        margin-right: auto;
      }

      &:nth-child(3) {
        margin-bottom: 8rem;
      }
      &:nth-child(4) {
        margin-right: 0;
        margin-left: auto;
      }
      &:nth-child(5),
      &:nth-child(6) {
        margin: 0 0.5rem;
      }
    }

    .item {
      padding: 2rem;
      text-align: left;

      .title {
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 180%;
        margin-bottom: 1.5rem;
      }

      .text {
        color: #c9b7df;
        font-size: 1rem;

        li {
          &::before {
            content: "- ";
          }
        }
      }
    }
  }

  @media screen and (max-width: 1100px) {
    .roadmap-text {
      margin-bottom: 2rem;
    }
    .roadmap-steps {
      .roadmap-steps-background {
        top: 3rem;
        .second-row {
          top: 48%;
        }
      }
      .item {
        padding: 2rem 1rem;

        &:nth-child(3) {
          margin-bottom: 6rem;
        }

        .title {
          font-size: 1rem;
          line-height: 180%;
          margin-bottom: 1.5rem;
        }

        .text {
          font-size: 0.85rem;
          line-height: 170%;
        }
      }
    }
  }
  @media screen and (max-width: 820px) {
    padding-bottom: 0;
    .roadmap-steps {
      display: block;
      max-width: 450px;
      margin: 0 auto;
      padding: 0;
      .roadmap-steps-background {
        display: none;
      }

      .phase {
        display: flex;
      }

      .phase-container {
        display: flex;
        width: 100%;
        margin: 0 !important;
        margin-bottom: 2rem !important;

        &:last-of-type {
          margin-bottom: 0 !important;
        }
      }

      .item {
        padding: 1rem;
        flex: 1;
        margin-left: 1rem;
      }
    }
  }
`

export default Roadmap
