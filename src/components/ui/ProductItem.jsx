function ProductItem({ product }) {
  return (
    <div className="grid-rows-product grid w-[125px] items-center justify-center rounded-md border-[1px] border-stone-400 bg-white transition-all duration-200 hover:shadow-xl sm:w-[175px]">
      <div className="bg-grey-primary font-fugaz text-brand-green flex h-full w-full items-center justify-center rounded-t border-b border-stone-400 text-center text-2xl font-bold">
        {product.name}
      </div>
      <img src={product.img} className="cursor-zoom-in" />
      <div className="bg-grey-primary flex flex-col justify-end gap-2 rounded-b border-t border-stone-400 p-2">
        <button className="bg-brand-green hover:bg-brand-green-secondary rounded py-1 text-[8px] text-white sm:text-[12px]">
          Karta produktu
        </button>
        <button className="border-grey-secondary rounded border-[1px] py-1 text-[8px] hover:bg-stone-200 sm:text-[12px]">
          Karta bezpieczeństwa
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
