import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import useMountTransition from "../hooks/useMountTransition";

function ProductDropdown({ title, render }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasTransitionedIn = useMountTransition(isOpen, 0);
  return (
    <>
      <div className="flex w-full flex-col items-center rounded-md bg-stone-700 transition duration-200 hover:bg-stone-600 md:rounded-xl">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full cursor-pointer items-center justify-between p-2 sm:p-6"
        >
          <h3 className="text-sm font-semibold text-white sm:text-2xl">
            {title}
          </h3>
          {!isOpen ? (
            <FaAngleDown size={25} color={"white"} />
          ) : (
            <FaAngleUp size={25} color={"white"} />
          )}
        </div>
      </div>
      {(isOpen || hasTransitionedIn) && (
        <div
          className={`flex flex-wrap ${
            hasTransitionedIn && isOpen ? "" : "translate-y-5 opacity-0"
          } items-center justify-center gap-2 p-2 transition-all duration-500 sm:gap-5`}
        >
          {render}
        </div>
      )}
    </>
  );
}

export default ProductDropdown;
