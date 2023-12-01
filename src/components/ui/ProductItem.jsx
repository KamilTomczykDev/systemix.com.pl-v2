function ProductItem({ product }) {
  return (
    <div className="grid-rows-product grid w-[175px] items-center justify-center rounded-md border-[1px] border-stone-400 transition-all duration-200 hover:shadow-xl">
      <div className="bg-grey-primary font-fugaz text-brand-green z-[-1] w-full rounded-t border-b border-stone-400 text-center text-lg font-bold">
        {product.name}
      </div>
      <img src={product.img} className="" />
      <div className="bg-grey-primary flex flex-col justify-end gap-2 rounded-b border-t border-stone-400 p-2">
        <button className="bg-brand-green hover:bg-brand-green-secondary z-10 rounded py-1 text-[12px] text-white">
          Karta produktu
        </button>
        <button className="border-grey-secondary rounded border-[1px] py-1 text-[12px] hover:bg-stone-200">
          Karta bezpieczeństwa
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
