import { lang } from "../ui/SelectLanguage";
import useLanguages from "../hooks/useLanguages";
import { FaPencil } from "react-icons/fa6";

import BodyText from "../ui/BodyText";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import TextHighlight from "../ui/TextHighlight";
import euSignsPl from "../../assets/img/eu-signs-project-pl.png";
import euSignsEng from "../../assets/img/eu-signs-project-eng.png";

function Project() {
  const {
    lang: {
      project: { title, topBody, middleTitle, bottomTitle, bottomBody },
    },
  } = useLanguages();
  return (
    <Section name="project">
      <div className="flex w-full max-w-secondary flex-col justify-center gap-8 px-4 text-left sm:items-center sm:text-center">
        <SectionTitle>
          <FaPencil />
          {title}
        </SectionTitle>
        <div className="w-full max-w-[600px]  xl:w-[50%]">
          <img
            src={lang === "polski" ? euSignsPl : euSignsEng}
            className="w-full"
          />
        </div>
        <BodyText>{topBody}</BodyText>
        <BodyText>
          <TextHighlight color="brand-green">{middleTitle}</TextHighlight>
          POIR.03.02.02-00-1926/20
        </BodyText>
        <BodyText>
          <TextHighlight color="brand-green">{bottomTitle}</TextHighlight>
          {bottomBody}
        </BodyText>
      </div>
    </Section>
  );
}

export default Project;
