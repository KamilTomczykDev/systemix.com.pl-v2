import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "../assets/systemix-logo.png";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <nav className="bg-grey-primary fixed z-20 flex h-[60px] w-full items-center justify-center sm:h-[80px]">
      <div className="flex w-full max-w-[1300px] items-center justify-between px-5 text-lg">
        <img
          src={Logo}
          className="h-[50px] cursor-pointer hover:opacity-70 sm:h-[70px]"
        />
        <ul className="hidden items-center gap-7 sm:flex">
          <li>Projekt UE</li>
          <li>Nowości</li>
          <li>Produkty</li>
          <li>Firma</li>
          <li>
            <button className="bg-brand-green hover:bg-brand-green-secondary rounded-md border-none px-6 py-2 text-white">
              Kontakt
            </button>
          </li>
        </ul>
        <div
          className="text-grey-secondary z-20 cursor-pointer sm:hidden"
          onClick={handleClick}
        >
          {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
        </div>

        <ul
          className={`bg-grey-primary absolute transition-all duration-500 ${
            nav ? "left-[0]" : "left-[-120%]"
          } top-[60px] z-[15] flex  h-screen w-screen flex-col justify-center gap-5 p-5 text-4xl sm:hidden`}
        >
          <li>Projekt UE</li>
          <li>Nowości</li>
          <li>Produkty</li>
          <li>Firma</li>
          <li>Kontakt</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
