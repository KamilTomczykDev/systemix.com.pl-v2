import { FaBolt } from "react-icons/fa6";

import BodyText from "../ui/BodyText";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import { slimProducts } from "../../data/products";
import ProductItem from "../ui/ProductItem";

import Image4R25 from "../../assets/img/4R25.png";
// import Image6SX12 from "../../assets/6SX12-two.png";
import Folder1 from "../../assets/img/folder-002.png";
import Folder2 from "../../assets/img/folder-003.png";
import Folder3 from "../../assets/img/folder-004.png";
import Diagram from "../../assets/img/diagram-1.png";
import Diagram2 from "../../assets/img/diagram-2.png";

function NewArrivals() {
  return (
    <Section>
      <div className="flex max-w-[1000px] flex-col items-center gap-6 px-4">
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
        <img className="newarrival-image mt-10" src={Folder1}></img>
        <img src={Diagram} className="newarrival-image" />
        <img className="newarrival-image" src={Folder2}></img>
        <img src={Diagram2} className="newarrival-image" />
        <img className="newarrival-image" src={Folder3}></img>
        <BodyText>
          Oferujemy nowe baterie pasujące do każdej lampy które są lżejsze oraz
          wydajniejsze energetycznie. Technologia ich wytwarzania uwzględnia
          niskoemisyjność, troskę o ochronę planety i przyszłych pokoleń.
        </BodyText>
        <h3 className="text-brand-red text-center text-3xl font-bold">
          Dostępne wersje baterii typu slim:
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {slimProducts.map((product) => (
            <ProductItem key={product.name} product={product} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default NewArrivals;
