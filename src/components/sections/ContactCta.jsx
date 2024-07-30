import Section from "../ui/Section";
import ContactImg from "../../assets/img/stationaries-header.png";
import { Link } from "react-router-dom";
import BodyText from "../ui/BodyText";

function ContactCta() {
  return (
    <Section>
      <div className="mt-[-100px] flex max-w-[700px] flex-col gap-10 p-4 sm:flex-row md:max-w-[1300px]">
        <img className="w-full rounded-xl sm:w-[50%]" src={ContactImg} />
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-bold text-brand-green">
            Skontaktuj się z nami!
          </h3>
          <BodyText>
            Jesteśmy otwarci na współpracę i zawsze chętni, by odpowiedzieć na
            wszystkie pytania dotyczące naszych produktów i usług. Jeśli masz
            jakiekolwiek wątpliwości lub potrzebujesz dodatkowych informacji,
            zapraszamy do skorzystania z formularza kontaktowego. Nasz zespół
            jest gotowy, aby pomóc i udzielić szczegółowych odpowiedzi.
          </BodyText>
          <Link to="/kontakt">
            <button className="rounded-md border-2 border-green-700 bg-brand-green px-6 py-2 text-white transition hover:bg-brand-green-secondary xl:px-8 xl:py-3 xl:text-xl">
              Kontakt
            </button>
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default ContactCta;
