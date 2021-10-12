import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { BannerShape, mintBg, mintBgSmall } from "../assets"
import { nftPrice } from "../utils/constants"

const Banner = () => {
  const [mintTotal, setMintTotal] = useState(null)
  const [mintInputValue, setMintInputValue] = useState("5")

  const handleInputChange = (input) => {
    if (!Number(input.value) && input.value !== "") return
    setMintInputValue(input.value)
  }

  useEffect(() => {
    setMintTotal(Number(Number(mintInputValue) * nftPrice).toFixed(3))
  }, [mintInputValue])

  return (
    <Wrapper>
      <div className="container">
        <div className="mint-banner">
          <div className="background">
            {/* <MintBg /> */}
            <img src={mintBg} alt="Mint Section Background" />
          </div>
          <div className="background-small">
            {/* <MintBgSmall /> */}
            <img
              src={mintBgSmall}
              alt="Mint Section Background for Small Devices"
            />
          </div>

          <div className="mint-banner-text">
            <h2>Mint</h2>
            <p>Enter the amount of nipples you would like to buy ( 20 max ):</p>
            <form>
              <input
                type="text"
                id="mintInput"
                maxLength="2"
                value={mintInputValue}
                onChange={(e) => handleInputChange(e.target)}
              />
              <button type="submit">MINT</button>
              <p className="total-text">
                Total: <span id="totalValue">{mintTotal} Eth</span>
              </p>
            </form>
          </div>
          <BannerShape className="banner-shape" />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  padding: 3rem 0;

  .mint-banner {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    max-width: 1240px;
    margin: 0 auto;
    justify-content: space-between;
    padding: 4rem 7rem 5rem 4rem;
    color: #180134;

    .background,
    .background-small {
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .mint-banner-text {
      width: 60%;
      align-self: center;
      h2 {
        line-height: 1;
        margin-bottom: 1rem;
      }
      & > p {
        margin-bottom: 2rem;
      }

      form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      input {
        font-weight: 600;
        font-size: 1.5rem;
        padding: 1rem;
        width: 180px;
        text-align: center;
        background: linear-gradient(
            179.89deg,
            rgba(255, 255, 255, 0) 0.1%,
            #7a7ea9 161.67%
          ),
          linear-gradient(0deg, #f4f4f4, #f4f4f4), #f28f33;
        box-shadow: 0px 48.2439px 89.7561px rgba(35, 35, 35, 0.42);
        border-radius: 90px;
        margin-right: 0.5rem;
      }
      button {
        font-size: 1.65rem;
        letter-spacing: 2px;
        width: 180px;
        color: #fff;
        background: linear-gradient(
            180.38deg,
            rgba(255, 255, 255, 0) -106.48%,
            rgba(126, 0, 170, 0.45) 121.35%
          ),
          linear-gradient(0deg, #df1571, #df1571),
          linear-gradient(0deg, #f4f4f4, #f4f4f4), #f28f33;
        box-shadow: 0px 48.2439px 89.7561px rgba(35, 35, 35, 0.42);
        border-radius: 90px;
        margin-right: 1rem;
      }

      .total-text {
        flex: 1;
        font-weight: bold;
        align-self: center;
        word-break: break-all;
        span {
          color: #df1571;
        }
      }
    }

    .banner-shape {
      user-select: none;
      pointer-events: none;
      flex: 1;
      max-width: 305px;
      padding-left: 1rem;
    }
  }

  @media screen and (max-width: 1100px) {
    .mint-banner {
      padding: 6rem 4rem 5rem 3rem;
      .mint-banner-text {
        input {
          width: calc(50% - 0.25rem);
          margin-right: 0;
        }
        button {
          width: calc(50% - 0.25rem);
          margin-right: 0;
        }
        .total-text {
          text-align: center;
          margin-top: 2rem;
          flex: 0 1 auto;
          width: 100%;
          font-size: 1.8rem;
          font-weight: 500;
          span {
            color: #df1571;
          }
        }
      }
    }
  }

  @media screen and (max-width: 820px) {
    padding: 0;
    .mint-banner {
      max-width: 450px;
      padding: 3rem 2rem;
      .mint-banner-text {
        text-align: center;
        width: 100%;
        margin-bottom: 3rem;

        .total-text {
          font-size: 1.6rem;
        }
      }
      .banner-shape {
        max-width: 230px;
        margin: 0 auto;
      }
    }
  }
`

export default Banner
