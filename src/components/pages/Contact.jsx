// import { FaBolt } from "react-icons/fa";
import Section from "../ui/Section";
// import SectionTitle from "../ui/SectionTitle";
import BodyText from "../ui/BodyText";
import useLanguages from "../hooks/useLanguages";
import { IoMdPin } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import ContactForm from "../ui/ContactForm";
import Footer from "../sections/Footer";
import SectionTitle from "../ui/SectionTitle";
import PageContainer from "../ui/PageContainer";

function Contact() {
  const {
    lang: {
      footer: { adress, contact },
    },
  } = useLanguages();

  const mapStyle = {
    height: 350,
    width: "100%",
    borderRadius: 10,
    border: "solid",
    borderWidth: 2,
    borderColor: "",
    "@media (maxWidth: 700px):": {
      width: "100%",
    },
  };
  return (
    <PageContainer>
      <Section>
        <div className="flex flex-col gap-10 p-4">
          <div className="flex justify-center">
            <SectionTitle>
              <SiGooglemessages /> <span className="mr-8">Kontakt</span>
            </SectionTitle>
          </div>
          <h2 className="text-xl font-semibold leading-[25px] tracking-wide  text-stone-800 sm:max-w-[600px] sm:text-5xl sm:leading-[55px] xl:max-w-[1000px] xl:text-6xl xl:leading-[70px]">
            Chcesz dowiedzieć się więcej o naszych produktach? Masz pytania
            dotyczące oferty? Jesteśmy tutaj, aby pomóc!
          </h2>
          <BodyText>
            <span className="w-full text-center">
              W naszej firmie oferujemy szeroki asortyment innowacyjnych
              produktów energetycznych, dostosowanych do różnych potrzeb i
              zastosowań. Zapewniamy rozwiązania, które łączą w sobie nowoczesną
              technologię, wydajność i niezawodność.
            </span>
          </BodyText>
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="flex flex-col justify-between gap-10">
              <div className="flex  flex-col">
                <h3 className="flex items-center text-xl font-semibold ">
                  <IoMdPin />
                  {adress}
                </h3>
                <h4>SYSTEMIX sp. z o.o.</h4>
                <h4>ul. Lubichowska 176A</h4>
                <h4>83-200 Starogard Gdański</h4>
              </div>
              <div className="flex flex-col">
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <FaPhone size={20} />
                  {contact}
                </h3>
                <h4>+48 58/561 48 13</h4>
                <h4>+48 58/561 48 14</h4>
                <h4>biuro@systemix.com.pl</h4>
              </div>
            </div>
            <div className="w-full xl:w-[70%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2348.4531030328917!2d18.510998792580505!3d53.94145939484937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47029b1442b84449%3A0x3bf7c3289e1170a5!2sSystemix.%20Sp.%20z%20o.o.!5e0!3m2!1spl!2spl!4v1721652685279!5m2!1spl!2spl"
                style={mapStyle}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <ContactForm />
        </div>
      </Section>
      <Footer />
    </PageContainer>
  );
}

export default Contact;
