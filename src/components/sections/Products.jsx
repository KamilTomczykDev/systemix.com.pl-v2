import { FaBolt } from "react-icons/fa6";

import BodyText from "../ui/BodyText";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import ProductItem from "../ui/ProductItem";
import ProductDropdown from "../ui/ProductDropdown";

import { largeProducts, smallProducts } from "../../data/products";

function Products() {
  return (
    <Section>
      <div className="flex w-full max-w-[1300px] flex-col items-center justify-start gap-6 p-4">
        <div className="flex flex-col items-center gap-4">
          <SectionTitle>
            <FaBolt /> <span className="mr-8">Produkty</span>
          </SectionTitle>
          <h2 className="text-xl font-semibold leading-[25px] tracking-wide  text-stone-800 xs:text-center sm:max-w-[600px] sm:text-5xl sm:leading-[55px] xl:max-w-[1000px] xl:text-6xl xl:leading-[70px]">
            Oferujemy szeroką gamę baterii cynkowo-powietrznych
          </h2>
          <BodyText>
            <p className="max-w-[500px] xs:text-center 4xl:max-w-[700px]">
              Technologia ich wytwarzania uwzględnia niskoemisyjność, troskę o
              ochronę planety i przyszłych pokoleń.
            </p>
          </BodyText>
        </div>

        <div className="flex w-full flex-col items-center gap-5 md:gap-10">
          <ProductDropdown
            title="Baterie do urządzeń drogowych"
            render={smallProducts.map((product) => (
              <ProductItem product={product} key={product.name} />
            ))}
          />
          <ProductDropdown
            title="Baterie do elektrozatorów"
            render={largeProducts.map((product) => (
              <ProductItem product={product} key={product.name} />
            ))}
          />
        </div>
      </div>
    </Section>
  );
}

export default Products;
