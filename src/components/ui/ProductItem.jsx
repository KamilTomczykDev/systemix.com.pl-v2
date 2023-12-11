import { useState } from "react";
import Modal from "./Modal";
import useLanguages from "../hooks/useLanguages";

function ProductItem({ product }) {
  const {
    lang: {
      products: { buttonFirst, buttonSecond },
    },
  } = useLanguages();
  const [isModal, setIsModal] = useState(false);

  function handleClick() {
    setIsModal(!isModal);
  }

  return (
    <div className="grid w-[125px] grid-rows-product items-center justify-center rounded-md border-[1px] border-grey-secondary bg-white transition-all duration-100 hover:shadow-medium hover:shadow-black sm:w-[175px]">
      <div className="flex h-full w-full items-center justify-center rounded-t border-b border-stone-800 bg-grey-primary text-center font-fugaz text-2xl font-bold text-brand-green">
        {product.name}
      </div>
      <img
        src={product.img}
        onClick={handleClick}
        className="cursor-zoom-in hover:opacity-80"
      />
      {isModal && (
        <Modal onClose={handleClick}>
          <img
            src={product.img}
            className="max-w-[300px] xl:max-w-[600px] 4xl:max-w-[850px]"
          />
        </Modal>
      )}
      <div className="flex flex-col items-center justify-end gap-2 rounded-b border-t border-stone-800 bg-grey-primary p-2">
        <a
          className="w-full"
          href={`/src/assets/pdf/${product.name}.pdf`}
          download
        >
          <button className="w-full rounded bg-brand-green py-1 text-[8px] text-white hover:bg-brand-green-secondary sm:text-[12px]">
            {buttonFirst}
          </button>
        </a>
        <a
          className="w-full"
          href={`/src/assets/pdf/${product.name}_safety.pdf`}
          download
        >
          <button className="w-full rounded border-[1px] border-grey-secondary py-1 text-[8px] hover:bg-stone-200 sm:text-[12px]">
            {buttonSecond}
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProductItem;
