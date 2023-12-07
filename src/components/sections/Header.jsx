import BgImage from "../../assets/img/slider6.jpg";
import EuImage from "../../assets/img/znak-eu-white.png";
import EuImage2 from "../../assets/img/znak-eu-white-2.png";
import { useInView } from "react-intersection-observer";
// import LogoRP from "../assets/logoRP.png";

function Header() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  return (
    <div ref={ref} className="h-screen w-full">
      <img src={BgImage} className="h-full w-full object-cover" />
      <div className="max-w-main absolute left-[50%] top-[50%] w-full translate-x-[-50%] translate-y-[-50%] ">
        <div className="relative top-[60px] flex w-full max-w-[600px] justify-center sm:left-0 sm:top-[80px] sm:translate-x-0 sm:px-10">
          <div
            className={`${
              inView ? "" : "translate-y-10 opacity-0"
            } z-10 flex flex-col gap-3 p-5 transition delay-300 duration-1000 sm:items-start sm:justify-center`}
          >
            <h1 className="text-3xl font-bold text-white md:text-4xl xl:text-6xl">
              Inwestujemy w dekarbonizację
            </h1>
            <h2 className="max-w-[400px] text-white md:max-w-[500px] md:text-lg xl:text-xl">
              Rozwijamy technologię cynkowo-powietrzną do zasilania urządzeń
              mobilnych
            </h2>
            <button className="rounded-md border-none bg-brand-green px-6 py-2 text-white hover:bg-brand-green-secondary xl:px-8 xl:py-3 xl:text-xl">
              Nowości
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
