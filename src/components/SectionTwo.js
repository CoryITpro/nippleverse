import React from "react";
import gif from "../assets/images/gif.gif";
import line1 from "../assets/images/line1.png";
import line2 from "../assets/images/line2.png";
import line3 from "../assets/images/line3.png";
import line4 from "../assets/images/line4.png";
import line5 from "../assets/images/line5.png";
import line6 from "../assets/images/line6.png";
import line7 from "../assets/images/line7.png";
import line8 from "../assets/images/line8.png";
import line9 from "../assets/images/line9.png";
import line10 from "../assets/images/line10.png";

const SectionTwo = () => {
  return (
    <div className="featured-wrapper">
      <div className="animated-lines">
        <img src={line1} alt="line-img" className="line1 " />
        <img src={line2} alt="line-img" className="line2 " />
        <img src={line3} alt="line-img" className="line3 " />
        <img src={line4} alt="line-img" className="line4 " />
        <img src={line5} alt="line-img" className="line5 " />
        <img src={line6} alt="line-img" className="line6 " />
        <img src={line7} alt="line-img" className="line7 " />
        <img src={line8} alt="line-img" className="line8 " />
        <img src={line9} alt="line-img" className="line9 " />
        <img src={line10} alt="line-img" className="line10" />
      </div>
      <div className="featured-space" id="Featured">
        <h6 className="heading-featured">FEATURED</h6>
        <img src={gif} alt="gif" className="img-fluid" />
      </div>
      {/* <div className="building-image"></div> */}
    </div>
  );
};

export default SectionTwo;
