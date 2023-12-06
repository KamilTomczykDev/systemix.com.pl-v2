import { useState } from "react";
import Modal from "./Modal";

function ProductItem({ product }) {
  const [isModal, setIsModal] = useState(false);

  function handleClick() {
    setIsModal(!isModal);
  }

  return (
    <div className="hover:shadow-medium grid w-[125px] grid-rows-product items-center justify-center rounded-md border-[1px] border-grey-secondary bg-white transition-all duration-100 hover:shadow-black sm:w-[175px]">
      <div className="flex h-full w-full items-center justify-center rounded-t border-b border-stone-800 bg-grey-primary text-center font-fugaz text-2xl font-bold text-brand-green">
        {product.name}
      </div>
      <img src={product.img} onClick={handleClick} className="cursor-zoom-in" />
      {isModal && (
        <Modal onClose={handleClick}>
          <img src={product.img} className="" />
        </Modal>
      )}
      <div className="flex flex-col justify-end gap-2 rounded-b border-t border-stone-800 bg-grey-primary p-2">
        <button className="rounded bg-brand-green py-1 text-[8px] text-white hover:bg-brand-green-secondary sm:text-[12px]">
          Karta produktu
        </button>
        <button className="rounded border-[1px] border-grey-secondary py-1 text-[8px] hover:bg-stone-200 sm:text-[12px]">
          Karta bezpieczeństwa
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
