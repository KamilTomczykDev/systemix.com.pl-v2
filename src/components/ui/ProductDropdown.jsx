import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

function ProductDropdown({ title, render }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex w-full flex-col items-center rounded-xl bg-gray-400">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer items-center justify-between p-6"
      >
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        {!isOpen ? (
          <FaAngleDown />
        ) : (
          <FaAngleUp onClick={() => setIsOpen(!isOpen)} />
        )}
      </div>
      {isOpen && <div className="flex flex-wrap gap-5 p-4">{render}</div>}
    </div>
  );
}

export default ProductDropdown;
