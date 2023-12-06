import { FaHouseUser } from "react-icons/fa";

import BodyText from "../ui/BodyText";
import SectionTitle from "../ui/SectionTitle";

import CompanyImg from "../../assets/img/company-pic.jpg";
import Section from "../ui/Section";

function Company() {
  return (
    <Section>
      <div className="max-w-secondary flex flex-col gap-0 p-4 md:p-10">
        <SectionTitle>
          <FaHouseUser />
          <span className="mr-8">Firma</span>
        </SectionTitle>
        <div className="flex grid-cols-2 flex-col gap-5 md:grid md:items-center">
          <BodyText>
            <span className="text-left text-xl tracking-tight">
              Systemix sp. z o.o. to producent bezobsługowych długodziałających
              źródeł prądu stałego - baterii przemysłowych.
            </span>
          </BodyText>
          <img src={CompanyImg} className="w-full xs:px-5 md:pl-10" />
        </div>
      </div>
    </Section>
  );
}

export default Company;
