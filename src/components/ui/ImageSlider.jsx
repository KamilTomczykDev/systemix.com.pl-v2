import { useEffect, useState } from "react";

import bgImage from "../../assets/img/slider1.png";
import bgImage2 from "../../assets/img/slider2.png";
// import bgImage3 from "../../assets/img/slider4.jpg";
// import bgImage4 from "../../assets/img/slider3.jpg";
// import bgImage5 from "../../assets/img/slider7.jpg";

function ImageSlider() {
  const [slideNum, setSlideNum] = useState(0);

  useEffect(
    function () {
      const timer = setInterval(function () {
        if (slideNum < 1) setSlideNum(slideNum + 1);
        if (slideNum === 1) setSlideNum(0);
      }, 8000);

      return () => clearInterval(timer);
    },
    [slideNum],
  );

  return (
    <>
      <img
        src={bgImage}
        alt="Header image"
        className={`absolute h-full w-full transition duration-[2000ms] ${
          slideNum === 0 ? "" : "opacity-0"
        } object-cover`}
      />
      <img
        src={bgImage2}
        alt="Header image"
        className={`absolute h-full w-full transition duration-[2000ms] ${
          slideNum === 1 ? "" : "opacity-0"
        } object-cover`}
      />
      {/* <img
        alt="Header image"
        src={bgImage3}
        className={`absolute h-full w-full transition duration-[2000ms] ${
          slideNum === 2 ? "" : "opacity-0"
        } object-cover`}
      />
      <img
        alt="Header image"
        src={bgImage4}
        className={`absolute h-full w-full transition duration-[2000ms] ${
          slideNum === 3 ? "" : "opacity-0"
        } object-cover`}
      />
      <img
        alt="Header image"
        src={bgImage5}
        className={`absolute h-full w-full transition duration-[2000ms] ${
          slideNum === 4 ? "" : "opacity-0"
        } object-cover`}
      /> */}
    </>
  );
}

export default ImageSlider;
