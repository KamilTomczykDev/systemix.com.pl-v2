import { FaHouseUser } from "react-icons/fa";

import SectionTitle from "../ui/SectionTitle";

import companyImg from "../../assets/img/company-pic.jpg";
import companyImg2 from "../../assets/img/company-pic-2.jpg";
import companyImg3 from "../../assets/img/company-pic-3.png";
import companyImg4 from "../../assets/img/company-pic-4.png";

import Section from "../ui/Section";

function Company() {
  return (
    <Section name="company">
      <div className="max-w-secondary flex flex-col gap-10 p-4 sm:items-center md:p-10">
        <div className="flex flex-col xs:items-center xs:gap-4">
          <SectionTitle>
            <FaHouseUser />
            <span className="mr-8">Firma</span>
          </SectionTitle>
          <p className="text-md max-w-[600px] tracking-tight text-grey-secondary xs:text-lg">
            Od 2003 roku systematycznie udoskonalamy swoje produkty i roszerzamy
            ofertę produkowanych wyrobów znajdujących zastosowanie w
            urządzeniach sygnalizacyjnych, elektryzatorach rolniczych i innych
            urządzeniach wymagających długiej bezingerencyjnej pracy.
          </p>
        </div>

        <div className="flex grid-cols-2 flex-col items-center gap-5 sm:grid sm:gap-10">
          <img src={companyImg} className="w-full rounded-2xl sm:w-[400px]" />

          <span className="text-md max-w-[400px] tracking-tight text-stone-800 xs:text-center xs:text-lg md:text-left md:text-2xl md:font-semibold">
            Systemix sp. z o.o. to producent bezobsługowych długodziałających
            źródeł prądu stałego - baterii przemysłowych.
          </span>
        </div>
        <div className="flex grid-cols-2 flex-col items-center gap-5 sm:grid sm:gap-10">
          <span className="text-md max-w-[400px] tracking-tight text-stone-800 xs:text-center xs:text-lg md:text-left md:text-2xl md:font-semibold">
            Wprowadzamy zmiany w funkcjonowaniu firmy i ofercie produktowej
            zmniejszające ślad węglowy.
          </span>
          <img src={companyImg2} className="w-full rounded-2xl sm:w-[400px]" />
        </div>
        <p className="max-w-[1000px] text-xl font-semibold tracking-wide text-grey-secondary  xs:text-3xl">
          Unowocześniamy, robotyzujemy i automatyzujemy procesy produkcyjne
          zmniejszając energochłoność i materiałochłonność produktów.
        </p>
        <div className="flex grid-cols-2 flex-col items-center gap-5 sm:grid sm:gap-10">
          <img src={companyImg3} className="w-full rounded-2xl sm:w-[400px]" />
          <img src={companyImg4} className="w-full rounded-2xl sm:w-[400px]" />
        </div>
      </div>
    </Section>
  );
}

export default Company;
