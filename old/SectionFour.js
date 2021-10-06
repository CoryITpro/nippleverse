import React from "react";
import moto from "../assets/images/lap1.png";
import moto1 from "../assets/images/lab2.png";

const SectionFour = () => {
  return (
    <div id="Roadmap" className="blue-wrap-sec">
      <img
        src={moto1}
        className="timeline-road  img-fluid w-100"
        alt="timeline2"
      />
      <img
        src={moto}
        className="timeline-road lab2 img-fluid w-100"
        alt="timeline"
      />
    </div>
  );
};

export default SectionFour;
