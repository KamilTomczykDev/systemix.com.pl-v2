import { FaInfoCircle } from "react-icons/fa";
// import { slimProducts } from "../../data/products";
import useLanguages from "../hooks/useLanguages";
// import { lang } from "../ui/SelectLanguage";

import ImageHeading from "../ui/ImageHeading";
import Section from "../ui/Section";

import Slim from "../../assets/img/12ah.svg";
import Mobile from "../../assets/img/mobile.svg";
import Storage from "../../assets/img/storage.svg";

import Product from "../ui/Product";

import BodyText from "../ui/BodyText";
// import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
// import ProductItem from "../ui/ProductItem";
// import Image4R25 from "../../assets/img/4R25.png";
// import folder1 from "../../assets/img/folder-002.png";
// import folderEng1 from "../../assets/img/folder-002-en.png";
// import folderDe1 from "../../assets/img/folder-002-de.png";
// import folder2 from "../../assets/img/folder-003.png";
// import folderEng2 from "../../assets/img/folder-003-en.png";
// import folderDe2 from "../../assets/img/folder-003-de.png";
// import folder3 from "../../assets/img/folder-004.png";
// import folderEng3 from "../../assets/img/folder-004-en.png";
// import folderDe3 from "../../assets/img/folder-004-de.png";

// import diagram from "../../assets/img/diagram-1.png";
// import diagramEng from "../../assets/img/diagram-1-en.png";
// import diagramDe from "../../assets/img/diagram-1-de.png";
// import diagram2 from "../../assets/img/diagram-2.png";
// import diagramEng2 from "../../assets/img/diagram-2-en.png";
// import diagramDe2 from "../../assets/img/diagram-2-de.png";

function NewArrivals() {
  // const {
  //   lang: {
  //     newArrivals: { header, title, topBody, bottomBody, bottomTitle },
  //   },
  // } = useLanguages();

  const {
    lang: {
      newArrivals: { header },
    },
  } = useLanguages();

  return (
    <>
      <ImageHeading src={"bg-new-arrivals"}>{header}</ImageHeading>
      <Section>
        <div className="flex flex-col gap-10 p-4">
          <div className="flex flex-col gap-2">
            <SectionTitle>
              <FaInfoCircle /> Nowości w świecie energii
            </SectionTitle>
            <BodyText>
              W naszej firmie z dumą oferujemy nowoczesne rozwiązania w zakresie
              produkcji baterii oraz sprzedaży magazynów energii. Naszym celem
              jest ciągły rozwój i dostosowywanie się do dynamicznie
              zmieniających się potrzeb rynku, aby dostarczać naszym klientom
              najnowocześniejsze i najbardziej wydajne produkty
            </BodyText>
          </div>
          <div className="flex w-full max-w-main flex-col justify-between gap-10 xl:flex-row">
            <Product
              title={"Baterie typu slim"}
              src={Slim}
              to="baterie-typu-slim"
            ></Product>
            <Product
              title={"Przenośne magazyny energii"}
              src={Mobile}
              to="przenosne-magazyny-energii"
            ></Product>
            <Product
              title={"Stacjonarne magazyny energii"}
              src={Storage}
              to="stacjonarne-magazyny-energii"
            ></Product>
          </div>
        </div>
      </Section>
      {/* <Section name="new-arrivals">
        <div className="flex max-w-[1000px] flex-col items-center gap-6 px-4">
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
            <div className="flex flex-col gap-2">
              <SectionTitle>
                <FaInfoCircle /> {title}
              </SectionTitle>
              <BodyText>{topBody}</BodyText>
            </div>

            <img
              className="w-[200px] rounded-full border-[15px] border-brand-red-secondary p-4 sm:w-[200px]"
              alt="Crossed 4R25 battery"
              src={Image4R25}
            ></img>
          </div>
          
          <img
            className="newarrival-image mt-10"
            alt="Folder picture"
            src={
              lang === "polski"
                ? folder1
                : lang === "english"
                  ? folderEng1
                  : folderDe1
            }
          ></img>
          <img
            alt="Folder picture"
            src={
              lang === "polski"
                ? diagram
                : lang === "english"
                  ? diagramEng
                  : diagramDe
            }
            className="newarrival-image"
          />
          <img
            className="newarrival-image"
            alt="Folder image"
            src={
              lang === "polski"
                ? folder2
                : lang === "english"
                  ? folderEng2
                  : folderDe2
            }
          ></img>
          <img
          alt="Diagram"
            src={
              lang === "polski"
                ? diagram2
                : lang === "english"
                  ? diagramEng2
                  : diagramDe2
            }
            className="newarrival-image"
          />
          <img
          alt="Diagram"
            className="newarrival-image"
            src={
              lang === "polski"
                ? folder3
                : lang === "english"
                  ? folderEng3
                  : folderDe3
            }
          ></img>
          <BodyText>{bottomBody}</BodyText>
          <h3 className="text-center text-3xl font-bold text-brand-red">
            {bottomTitle}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {slimProducts.map((product) => (
              <ProductItem key={product.name} product={product} />
            ))}
          </div>
        </div>
      </Section> */}
    </>
  );
}

export default NewArrivals;
