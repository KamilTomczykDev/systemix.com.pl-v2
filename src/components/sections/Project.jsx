import BodyText from "../ui/BodyText";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import TextHighlight from "../ui/TextHighlight";

import EuImage from "../../assets/img/EUsign.png";
import EuImage2 from "../../assets/img/EUsign_2.png";
import LogoRP from "../../assets/img/logoRP.png";

import { FaPencil } from "react-icons/fa6";
import useLanguages from "../hooks/useLanguages";

function Project() {
  const {
    lang: {
      project: { title, topBody, middleTitle, bottomTitle, bottomBody },
    },
  } = useLanguages();
  return (
    <Section name="project">
      <div className="max-w-secondary flex w-full flex-col justify-center gap-8 px-4 text-left sm:items-center sm:text-center">
        <SectionTitle>
          <FaPencil />
          {title}
        </SectionTitle>
        <div className="grid w-full max-w-[600px] grid-cols-3 items-center xl:w-[50%]">
          <img src={EuImage2} className="w-full" />
          <img src={LogoRP} className="w-full" />
          <img src={EuImage} className="w-full" />
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
