import { FaInfoCircle } from "react-icons/fa";
import { slimProducts } from "../../data/products";
import useLanguages from "../hooks/useLanguages";

import ImageHeading from "../ui/ImageHeading";
import BodyText from "../ui/BodyText";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import ProductItem from "../ui/ProductItem";
import Image4R25 from "../../assets/img/4R25.png";
import Folder1 from "../../assets/img/folder-002.png";
import Folder2 from "../../assets/img/folder-003.png";
import Folder3 from "../../assets/img/folder-004.png";
import Diagram from "../../assets/img/diagram-1.png";
import Diagram2 from "../../assets/img/diagram-2.png";

function NewArrivals() {
  const {
    lang: {
      newArrivals: { header, title, topBody, bottomBody, bottomTitle },
    },
  } = useLanguages();

  return (
    <>
      <ImageHeading src={"bg-new-arrivals"}>{header}</ImageHeading>
      <Section name="new-arrivals">
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
              src={Image4R25}
            ></img>
          </div>
          {/* <img className="w-[300px]" src={Image6SX12}></img> */}
          <img className="newarrival-image mt-10" src={Folder1}></img>
          <img src={Diagram} className="newarrival-image" />
          <img className="newarrival-image" src={Folder2}></img>
          <img src={Diagram2} className="newarrival-image" />
          <img className="newarrival-image" src={Folder3}></img>
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
      </Section>
    </>
  );
}

export default NewArrivals;
