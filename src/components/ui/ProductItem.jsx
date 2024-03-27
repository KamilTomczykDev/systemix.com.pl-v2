import { useState } from "react";
import useLanguages from "../hooks/useLanguages";
import { lang } from "./SelectLanguage";
import Modal from "./Modal";

function ProductItem({ product }) {
  const {
    lang: {
      products: { buttonFirst, buttonSecond },
    },
  } = useLanguages();

  const [isModal, setIsModal] = useState(false);
  const safetySheetSource = `/pdf/${product.name}_safety${
    (lang === "deutsch" && product.name[0]) === "6" ? "_de" : ""
  }.pdf`;

  function handleClick() {
    setIsModal(!isModal);
  }

  return (
    <div className="grid w-[125px] grid-rows-product items-center justify-center rounded-md border-[1px] border-stone-400 bg-white transition-all duration-100 hover:shadow-black sm:w-[175px] hover:sm:shadow-medium">
      <div className="flex h-full w-full items-center justify-center rounded-t border-b border-stone-400 bg-grey-primary text-center font-fugaz text-2xl font-bold text-brand-green">
        {product.name}
      </div>
      <div className="flex items-center justify-center">
        <img
          src={product.img}
          alt="Battery"
          onClick={handleClick}
          className="h-full cursor-zoom-in hover:opacity-80"
        />
      </div>
      {isModal && (
        <Modal onClose={handleClick}>
          <img
            src={product.img}
            className="max-w-[300px] xl:max-w-[600px] 4xl:max-w-[850px]"
            alt="Battery"
          />
        </Modal>
      )}
      <div className="flex h-full flex-col items-center justify-between gap-1 rounded-b border-t border-stone-400 bg-grey-primary p-2 sm:justify-center sm:gap-2">
        <a className="flex w-full" href={`/pdf/${product.name}.pdf`} download>
          <button className="w-full rounded bg-brand-green py-1 text-[8px] text-white hover:bg-brand-green-secondary sm:text-[12px]">
            {buttonFirst}
          </button>
        </a>
        <a className="flex w-full" href={safetySheetSource} download>
          <button className="w-full rounded border-[1px] border-grey-secondary py-1 text-[8px] hover:bg-stone-200 sm:text-[12px]">
            {buttonSecond}
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProductItem;
