import { FaBolt } from "react-icons/fa6";

import BodyText from "../ui/BodyText";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import ProductItem from "../ui/ProductItem";
import ProductDropdown from "../ui/ProductDropdown";

import { smallProducts } from "../../data/products";

function Products() {
  return (
    <Section>
      <div className="flex w-full max-w-[1300px] flex-col justify-start gap-6 p-4">
        <div>
          <SectionTitle>
            <FaBolt />
            Produkty
          </SectionTitle>
          <BodyText>
            Oferujemy szeroką gamę baterii cynkowo-powietrznych
          </BodyText>
        </div>

        <div className="flex flex-col gap-5 md:gap-10">
          <ProductDropdown
            title="Baterie do urządzeń drogowych"
            render={smallProducts.map((product) => (
              <ProductItem product={product} key={product.name} />
            ))}
          />
          <ProductDropdown
            title="Baterie do elektrozatorów"
            render={smallProducts.map((product) => (
              <ProductItem product={product} key={product.name} />
            ))}
          />
        </div>
      </div>
    </Section>
  );
}

export default Products;
