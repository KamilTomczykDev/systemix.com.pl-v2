import { FaHouseUser } from "react-icons/fa";
import useLanguages from "../hooks/useLanguages";

import SectionTitle from "../ui/SectionTitle";
import companyImg from "../../assets/img/company-pic.jpg";
import companyImg2 from "../../assets/img/company-pic-2.jpg";
import companyImg3 from "../../assets/img/company-pic-3.png";
import companyImg4 from "../../assets/img/company-pic-4.png";
import Section from "../ui/Section";
import Footer from "../sections/Footer";
import ImageHeading from "../ui/ImageHeading";

function Company() {
  const {
    lang: {
      company: {
        title,
        topBody,
        middleBodyFirst,
        middleBodySecond,
        bottomBody,
      },
    },
  } = useLanguages();
  return (
    <>
      <Section name="company">
        <div className="flex flex-col items-center gap-10">
          <ImageHeading src="bg-company-heading">
            Inwestujemy w dekarbonizację
          </ImageHeading>
          <div className="flex max-w-secondary flex-col gap-10 p-4 sm:items-center md:p-10">
            <div className="flex flex-col xs:items-center xs:gap-4">
              <SectionTitle>
                <FaHouseUser />
                <span className="mr-8">{title}</span>
              </SectionTitle>
              <p className="text-md max-w-[600px] tracking-tight text-grey-secondary xs:text-lg">
                {topBody}
              </p>
            </div>

            <div className="flex grid-cols-2 flex-col items-center gap-5 sm:grid sm:gap-10">
              <img
                src={companyImg}
                alt="Systemix's Headquarters"
                className="w-full rounded-2xl sm:w-[400px]"
              />

              <span className="text-md max-w-[400px] tracking-tight text-stone-800 xs:text-center xs:text-lg md:text-left md:text-2xl md:font-semibold">
                {middleBodyFirst}
              </span>
            </div>
            <div className="flex grid-cols-2 flex-col items-center gap-5 sm:grid sm:gap-10">
              <span className="text-md max-w-[400px] tracking-tight text-stone-800 xs:text-center xs:text-lg md:text-left md:text-2xl md:font-semibold">
                {middleBodySecond}
              </span>
              <img
                src={companyImg2}
                alt="Systemix's Headquarters"
                className="w-full rounded-2xl sm:w-[400px]"
              />
            </div>
            <p className="max-w-[1000px] text-xl font-semibold tracking-wide text-grey-secondary  xs:text-3xl">
              {bottomBody}
            </p>
            <div className="flex grid-cols-2 flex-col items-center gap-5 sm:grid sm:gap-10">
              <img
                src={companyImg3}
                alt="Headquaters interior"
                className="w-full rounded-2xl sm:w-[400px]"
              />
              <img
                src={companyImg4}
                alt="Headquaters interior"
                className="w-full rounded-2xl sm:w-[400px]"
              />
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}

export default Company;
