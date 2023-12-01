import BodyText from "../ui/BodyText";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import { FaBolt } from "react-icons/fa6";

import Image4R25 from "../../assets/4R25.png";
// import Image6SX12 from "../../assets/6SX12-two.png";
import Folder1 from "../../assets/folder-002.png";
import Folder2 from "../../assets/folder-003.png";
import Folder3 from "../../assets/folder-004.png";
import Diagram from "../../assets/diagram-1.png";
import Diagram2 from "../../assets/diagram-2.png";
import { products } from "../../data/products";
import ProductItem from "../ui/ProductItem";

function NewArrivals() {
  return (
    <Section>
      <div className="flex max-w-[1000px] flex-col gap-6 px-4">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex flex-col gap-2">
            <SectionTitle>
              <FaBolt /> Baterie typu slim
            </SectionTitle>
            <BodyText>
              Czas na zmiany w zasilaniu drogowych lamp ostrzegawczych i
              podobnych urządzeń. Opracowano nową grupę produktową baterii
              cynkowo-powietrznych zastępującą tradycyjne baterie 4R25.
            </BodyText>
          </div>

          <img
            className="border-brand-red-secondary w-[200px] rounded-full border-[15px] p-4 sm:w-[200px]"
            src={Image4R25}
          ></img>
        </div>
        {/* <img className="w-[300px]" src={Image6SX12}></img> */}
        <img className="mt-10" src={Folder1}></img>
        <img src={Diagram} />
        <img className="" src={Folder2}></img>
        <img src={Diagram2} />
        <img className="" src={Folder3}></img>
        <h3 className="text-brand-red text-center text-3xl font-bold">
          Dostępne wersje baterii typu slim:
        </h3>
        <div>
          {products.map((product) => (
            <ProductItem key={product.name} product={product} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default NewArrivals;
