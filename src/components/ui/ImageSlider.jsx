import { useEffect, useState } from "react";

import bgImage from "../../assets/img/slider6.jpg";
import bgImage2 from "../../assets/img/slider5.jpg";
import bgImage3 from "../../assets/img/slider4.jpg";
import bgImage4 from "../../assets/img/slider3.jpg";
import bgImage5 from "../../assets/img/slider7.jpg";

function ImageSlider() {
  const [slideNum, setSlideNum] = useState(0);

  useEffect(
    function () {
      const timer = setInterval(function () {
        if (slideNum < 4) setSlideNum(slideNum + 1);
        if (slideNum === 4) setSlideNum(0);
      }, 8000);

      return () => clearInterval(timer);
    },
    [slideNum],
  );

  return (
    <>
      <img
        src={bgImage}
        className={`absolute h-full w-full transition duration-[2000ms] ${
          slideNum === 0 ? "" : "opacity-0"
        } object-cover`}
      />
      <img
        src={bgImage2}
        className={`absolute h-full w-full transition duration-[2000ms] ${
          slideNum === 1 ? "" : "opacity-0"
        } object-cover`}
      />
      <img
        src={bgImage3}
        className={`absolute h-full w-full transition duration-[2000ms] ${
          slideNum === 2 ? "" : "opacity-0"
        } object-cover`}
      />
      <img
        src={bgImage4}
        className={`absolute h-full w-full transition duration-[2000ms] ${
          slideNum === 3 ? "" : "opacity-0"
        } object-cover`}
      />
      <img
        src={bgImage5}
        className={`absolute h-full w-full transition duration-[2000ms] ${
          slideNum === 4 ? "" : "opacity-0"
        } object-cover`}
      />
    </>
  );
}

export default ImageSlider;
