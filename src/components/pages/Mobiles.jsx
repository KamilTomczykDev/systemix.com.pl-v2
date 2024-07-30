import Footer from "../sections/Footer";
import PageContainer from "../ui/PageContainer";
import Section from "../ui/Section";
import BodyText from "../ui/BodyText";
// import Image from "../../assets/img/mobile-gradient.png";
import KempingImage from "../../assets/img/mobiles-kemping.png";
import ConstructionImage from "../../assets/img/mobiles-construction.png";
import FishermanImage from "../../assets/img/mobiles-fisherman.png";

function Mobiles() {
  return (
    <PageContainer>
      <Section>
        <div className="flex w-full max-w-[1300px] items-center justify-center p-4">
          <div className="flex w-full flex-col items-center gap-10">
            {/* <div className="h-[300px] w-full xl:w-[60%]">
              <img
                className="h-full w-full rounded-2xl object-cover"
                src={Image}
              />
            </div> */}
            <div className="flex max-w-[800px] items-start justify-start">
              <h2 className="text-5xl font-semibold text-brand-green ">
                Przenośne magazyny energii
              </h2>
            </div>
            <div className="flex w-full items-center">
              <div className="flex h-[400px] w-full flex-wrap gap-6">
                <img
                  src={KempingImage}
                  className="w-[30%] rounded-l-xl bg-red-500 object-cover"
                />
                <img
                  src={FishermanImage}
                  className="w-[30%] bg-red-500 object-cover object-right"
                />
                <img
                  src={ConstructionImage}
                  className="w-[30%] rounded-r-xl bg-red-500 object-cover"
                />
              </div>
            </div>

            <BodyText>
              Nasze mobilne magazyny energii to wszechstronne rozwiązania,
              idealne do zapewnienia zasilania awaryjnego w domu lub biurze, na
              kempingach, wyprawach outdoorowych i wydarzeniach plenerowych. Są
              niezastąpione na placach budowy, w operacjach ratunkowych, do
              ładowania pojazdów elektrycznych, a także wspierają systemy
              fotowoltaiczne. Dzięki nim zawsze masz dostęp do niezawodnego
              zasilania, gdziekolwiek jesteś.
            </BodyText>

            <div className="flex flex-col gap-10">
              <BodyText>
                Czas pracy naszych mobilnych magazynów energii zależy od
                obciążenia i rodzaju urządzeń. Przy lżejszym użytkowaniu mogą
                dostarczać zasilanie przez kilka godzin, natomiast w przypadku
                bardziej wymagających zastosowań czas pracy może być krótszy.
                Idealne na krótkoterminowe potrzeby energetyczne.
              </BodyText>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </PageContainer>
  );
}

export default Mobiles;
