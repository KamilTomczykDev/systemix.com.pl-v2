import Product from "../ui/Product";
import Section from "../ui/Section";

import Slim from "../../assets/img/12ah.svg";
import Mobile from "../../assets/img/mobile.svg";
import Storage from "../../assets/img/storage.svg";
import Zink from "../../assets/img/zink.svg";
import { Link } from "react-router-dom";
import SectionTitle from "../ui/SectionTitle";
import { FaBolt } from "react-icons/fa";
import useLanguages from "../hooks/useLanguages";
import BodyText from "../ui/BodyText";
import Footer from "../sections/Footer";
import PageContainer from "../ui/PageContainer";

function Products() {
  const {
    lang: {
      products: { title },
    },
  } = useLanguages();

  return (
    <PageContainer>
      <Section>
        <div className="flex w-full max-w-main flex-col items-center gap-6 p-4">
          <div className="flex flex-col gap-4 xs:items-center">
            <SectionTitle>
              <FaBolt /> <span className="mr-8">{title}</span>
            </SectionTitle>
            <h2 className="text-xl font-semibold leading-[25px] tracking-wide  text-stone-800 xs:text-center sm:max-w-[600px] sm:text-5xl sm:leading-[55px] xl:max-w-[1000px] xl:text-6xl xl:leading-[70px]">
              Nowoczesne Rozwiązania Energetyczne
            </h2>
            <BodyText>
              <span className="w-full text-center">
                W naszej firmie oferujemy szeroki asortyment innowacyjnych
                produktów energetycznych, dostosowanych do różnych potrzeb i
                zastosowań. Zapewniamy rozwiązania, które łączą w sobie
                nowoczesną technologię, wydajność i niezawodność.
              </span>
            </BodyText>
          </div>
          <div className="flex w-full max-w-[700px] flex-col flex-wrap justify-between gap-2 xl:max-w-main xl:flex-row xl:items-center">
            <Product
              title={"Baterie typu slim"}
              src={Slim}
              to="/baterie-typu-slim"
            ></Product>
            <Product
              title={"Przenośne magazyny energii"}
              src={Mobile}
              to="/przenosne-magazyny-energii"
            ></Product>
            <Product
              title={"Stacjonarne magazyny energii"}
              src={Storage}
              to="/stacjonarne-magazyny-energii"
            ></Product>
            <Link to="/baterie-cynkowo-powietrzne">
              <div>
                <div className="flex w-full cursor-pointer justify-between rounded-2xl bg-brand-green p-5 text-xl font-semibold text-white transition hover:bg-brand-green-secondary sm:text-3xl xl:h-[400px] xl:max-w-[300px] xl:flex-col xl:items-end ">
                  <div className="flex items-center ">
                    <span className="max-w-[230px]">
                      Baterie Cynkowo-Powietrzne
                    </span>
                  </div>
                  <img
                    className="w-[125px] sm:w-[230px] xl:w-[200px]"
                    src={Zink}
                  ></img>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Section>
      <Footer />
    </PageContainer>
  );
}

export default Products;
