import Section from "../ui/Section";
import CompanyImg from "../../assets/img/mobiles-kemping.png";
import { Link } from "react-router-dom";
import BodyText from "../ui/BodyText";

function CompanyCta() {
  return (
    <Section>
      <div className=" flex max-w-[700px] flex-col items-center gap-10 p-4 sm:flex-row-reverse md:max-w-[1300px]">
        <img className="w-full rounded-xl sm:w-[50%]" src={CompanyImg} />
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-bold text-brand-green">Poznaj nas!</h3>
          <BodyText>
            Modernizujemy nasze procesy produkcyjne, wprowadzając robotyzację i
            automatyzację, co pozwala nam znacząco zmniejszyć energochłonność i
            materiałochłonność naszych produktów. Dzięki temu nie tylko
            zwiększamy efektywność, ale także przyczyniamy się do ochrony
            środowiska poprzez bardziej zrównoważone wykorzystanie zasobów.
          </BodyText>
          <Link to="/kontakt">
            <button className="rounded-md border-2 border-green-700 bg-brand-green px-6 py-2 text-white transition hover:bg-brand-green-secondary xl:px-8 xl:py-3 xl:text-xl">
              Dowiedz się więcej
            </button>
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default CompanyCta;
