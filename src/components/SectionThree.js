import React from "react";
import soundGen from "../assets/images/SoundGen.png";
import disk from "../assets/images/RotatingDisk.png";
import diskEgg from "../assets/images/Diskholder.png";

const SectionThree = () => {
  return (
    <div className="Roadmap-wrapper">
      <div className="over-lap-div">
        <img src={soundGen} alt="music" className="music" />
        <img src={disk} alt="disc" className="disc" />
        <img src={diskEgg} alt="egg" className="egg" />
      </div>
    </div>
  );
};

export default SectionThree;
