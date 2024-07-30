import { useInView } from "react-intersection-observer";
import useLanguages from "../hooks/useLanguages";
import { lang } from "../ui/SelectLanguage";

import euImagePl from "../../assets/img/eu-signs-header-pl.png";
import euImageEng from "../../assets/img/eu-signs-header-eng.png";
import { Link } from "react-router-dom";
import ImageSlider from "../ui/ImageSlider";

function Header() {
  const {
    lang: {
      header: { main, side },
    },
  } = useLanguages();

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="h-screen w-full">
      <ImageSlider />
      <div className="absolute left-[50%] top-[50%] w-full max-w-main translate-x-[-50%] translate-y-[-50%] ">
        <div className="relative top-[60px] flex w-full max-w-[600px] justify-center sm:left-0 sm:top-[80px] sm:translate-x-0 sm:px-10 xl:max-w-[700px]">
          <div
            className={`${
              inView ? "" : "translate-y-10 opacity-0"
            } z-10 flex flex-col gap-3 p-5 transition delay-300 duration-1000 sm:items-start sm:justify-center`}
          >
            <h1 className="text-3xl font-bold tracking-wide text-white md:text-4xl xl:text-6xl">
              {main}
            </h1>
            <h2 className="max-w-[400px] tracking-tight text-white md:max-w-[500px] md:text-lg xl:text-xl">
              {side}
            </h2>
            <div className="flex gap-2">
              <Link to="/produkty">
                <button className="rounded-md border-2 border-green-700 bg-brand-green px-6 py-2 text-white transition hover:bg-brand-green-secondary xl:px-8 xl:py-3 xl:text-xl">
                  Produkty
                </button>
              </Link>
              <Link to="/kontakt">
                <button className="border-white-700 rounded-md border-2  px-6 py-2 text-white transition hover:bg-white hover:text-brand-green  xl:px-8 xl:py-3 xl:text-xl">
                  Kontakt
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-[50%] w-[100%] max-w-[300px] translate-x-[-50%] grid-cols-2 xl:max-w-[400px]">
        <img
          alt="UE symbols"
          src={lang === "polski" ? euImagePl : euImageEng}
          className="w-full"
        />
        {/* <img src={EuImage2} className="w-full" /> */}
        {/* <img src={LogoRP} className="w-full" /> */}
      </div>
    </div>
  );
}

export default Header;
