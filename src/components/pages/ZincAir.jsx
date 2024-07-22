import { FaBolt } from "react-icons/fa6";

import BodyText from "../ui/BodyText";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import ProductItem from "../ui/ProductItem";
import ProductDropdown from "../ui/ProductDropdown";

import { largeProducts, smallProducts } from "../../data/products";
import useLanguages from "../hooks/useLanguages";

function ZincAir() {
  const {
    lang: {
      products: { title, subTitle, body, dropdownFirst, dropdownSecond },
    },
  } = useLanguages();
  return (
    <Section name="products">
      <div className="flex w-full max-w-secondary flex-col items-center justify-start gap-6 p-4">
        <div className="flex flex-col gap-4 xs:items-center">
          <SectionTitle>
            <FaBolt /> <span className="mr-8">{title}</span>
          </SectionTitle>
          <h2 className="text-xl font-semibold leading-[25px] tracking-wide  text-stone-800 xs:text-center sm:max-w-[600px] sm:text-5xl sm:leading-[55px] xl:max-w-[1000px] xl:text-6xl xl:leading-[70px]">
            {subTitle}
          </h2>
          <BodyText>
            <span className="max-w-[500px] xs:text-center 4xl:max-w-[700px]">
              {body}
            </span>
          </BodyText>
        </div>

        <div className="flex w-full flex-col items-center gap-5 md:gap-10">
          <ProductDropdown
            title={dropdownFirst}
            render={smallProducts.map((product) => (
              <ProductItem product={product} key={product.name} />
            ))}
          />
          <ProductDropdown
            title={dropdownSecond}
            render={largeProducts.map((product) => (
              <ProductItem product={product} key={product.name} />
            ))}
          />
        </div>
      </div>
    </Section>
  );
}

export default ZincAir;
