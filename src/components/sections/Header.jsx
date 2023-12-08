import bgImage from "../../assets/img/slider6.jpg";
import bgImage2 from "../../assets/img/slider5.jpg";
import bgImage3 from "../../assets/img/slider4.jpg";
import bgImage4 from "../../assets/img/slider3.jpg";
import bgImage5 from "../../assets/img/slider7.jpg";

import EuImage from "../../assets/img/znak-eu-white.png";
import EuImage2 from "../../assets/img/znak-eu-white-2.png";
import { useInView } from "react-intersection-observer";
import useLanguages from "../hooks/useLanguages";
import { useEffect, useState } from "react";
// import { useState } from "react";
// import LogoRP from "../assets/logoRP.png";

function Header() {
  const [slideNum, setSlideNum] = useState(0);
  // const images = [bgImage, bgImage2, bgImage3, bgImage4];
  // console.log(images);
  useEffect(
    function () {
      const timer = setInterval(function () {
        if (slideNum < 4) setSlideNum(slideNum + 1);
        if (slideNum === 4) setSlideNum(0);
        console.log(slideNum);
      }, 8000);

      return () => clearInterval(timer);
    },
    [slideNum],
  );

  const {
    lang: {
      header: { main, side, button },
    },
  } = useLanguages();

  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  return (
    <div ref={ref} className="h-screen w-full">
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
      <div className="max-w-main absolute left-[50%] top-[50%] w-full translate-x-[-50%] translate-y-[-50%] ">
        <div className="relative top-[60px] flex w-full max-w-[600px] justify-center sm:left-0 sm:top-[80px] sm:translate-x-0 sm:px-10 xl:max-w-[700px]">
          <div
            className={`${
              inView ? "" : "translate-y-10 opacity-0"
            } z-10 flex flex-col gap-3 p-5 transition delay-300 duration-1000 sm:items-start sm:justify-center`}
          >
            <h1 className="text-3xl font-bold text-white md:text-4xl xl:text-6xl">
              {main}
            </h1>
            <h2 className="max-w-[400px] text-white md:max-w-[500px] md:text-lg xl:text-xl">
              {side}
            </h2>
            <button className="rounded-md border-none bg-brand-green px-6 py-2 text-white hover:bg-brand-green-secondary xl:px-8 xl:py-3 xl:text-xl">
              {button}
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-[50%] grid w-[100%] max-w-[300px] translate-x-[-50%] grid-cols-2 items-center justify-center gap-5 xl:max-w-[400px]">
        <img src={EuImage} className="w-full" />
        <img src={EuImage2} className="w-full" />
        {/* <img src={LogoRP} className="w-full" /> */}
      </div>
    </div>
  );
}

export default Header;
