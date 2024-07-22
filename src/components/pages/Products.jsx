import Product from "../ui/Product";

import Slim from "../../assets/img/12ah.svg";
import Mobile from "../../assets/img/mobile.svg";
import Storage from "../../assets/img/storage.svg";
import Section from "../ui/Section";

function Products() {
  return (
    <>
      <Section>
        <div className="flex w-full flex-wrap items-center justify-between gap-2">
          <Product title={"Baterie typu slim"} src={Slim} to="slim"></Product>
          <Product
            title={"Przenośne magazyny energii"}
            src={Mobile}
            to="przenośne-magazyny-energii"
          ></Product>
          <Product
            title={"Stacjonarne magazyny energii"}
            src={Storage}
            to="stacjonarne-magazyny-energii"
          ></Product>
          <Product
            title={"Baterie Cynkowo Powietrzne"}
            src={Storage}
            to="stacjonarne-magazyny-energii"
          ></Product>
        </div>
      </Section>
    </>
  );
}

export default Products;
