import React, { useState } from "react";
import logo from "../assets/images/logo-nipple.png";
import text from "../assets/images/text.png";
import dash from "../assets/images/unknown.png";

const SectionOne = () => {
  const [state, setstate] = useState("");
  const [total, setTotal] = useState("");

  const result = () => {
    return setTotal(state * 0.05);
  };

  return (
    <>
      <div className="section-one" id="About">
        <img src={logo} alt="nipple-img" className="img-fluid logo-img" />
        <img src={text} alt="text-img" className="img-fluid text-img" />
      </div>
      <div className="min-sec-wrapper">
        <div className="left-section-wrap">
          <div className="content-wrapper">
            <span className="title">Mint</span>
            <span className="dec">
              Enter the amount of nipples you would like to buy (5 max):
            </span>
            <div className="input-wrapper">
              <input
                type="number"
                placeholder="0"
                value={state}
                onChange={(e) => setstate(e.target.value)}
              />
              <span className="btn-mint-action" onClick={result}>
                Mint
              </span>
              {total > 0 && (
                <span className="total-section">
                  Total: <span className="result-val">{total} ETN</span>
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="right-section-wrap">
          <img src={dash} alt="dash-img" className="img-fluid" />
        </div>
      </div>
    </>
  );
};

export default SectionOne;
