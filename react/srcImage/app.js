import React from "react";
import sampleImage from "./Images/sample1.jpg";

const SrcImage = () => {
  return (
    <div>
      <h2>Image from Src Folder</h2>
      <img src={sampleImage} alt="Src Folder" width="300" />
    </div>
  );
};

export default SrcImage;
