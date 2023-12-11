import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import Logo from "../../assets/img/systemix-logo.png";
import useLanguages from "../hooks/useLanguages";
import SelectLanguage from "../ui/SelectLanguage";

function Navbar() {
  const {
    lang: {
      nav: { project, newArrivals, products, company, contact },
    },
  } = useLanguages();

  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed z-20 flex h-[60px] w-full items-center justify-center border-b-[1px] bg-white md:h-[80px]">
      <nav className="flex w-full max-w-main items-center justify-between px-5 text-lg">
        <div className="flex items-center gap-4 xl:gap-10">
          <img
            src={Logo}
            className="h-[50px] cursor-pointer hover:opacity-70 md:h-[70px]"
          />
          <SelectLanguage />
        </div>
        <ul className="hidden items-center gap-7 md:flex">
          <li tabIndex="0">
            <Link to="project" smooth={true} duration={1000}>
              {project}
            </Link>
          </li>
          <li>
            <Link to="new-arrivals" tabIndex="0" smooth={true} duration={1000}>
              {newArrivals}
            </Link>
          </li>
          <li tabIndex="0">
            <Link to="products" smooth={true} duration={1000}>
              {products}
            </Link>
          </li>
          <li tabIndex="0">
            <Link to="company" smooth={true} duration={1000}>
              {company}
            </Link>
          </li>
          <li tabIndex="0">
            <Link to="contact" smooth={true} duration={1000}>
              <button className="rounded-md border-2 border-green-700 bg-brand-green px-6 py-2 text-white hover:bg-brand-green-secondary">
                {contact}
              </button>
            </Link>
          </li>
        </ul>

        {/* mobile nav-bar */}
        <div
          className="z-20 cursor-pointer text-grey-secondary md:hidden"
          onClick={handleClick}
        >
          {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
        </div>

        {/* mobile nav-menu */}
        <ul
          className={`absolute bg-white transition-all duration-500 ${
            nav ? "left-[0]" : "left-[-120%]"
          } top-[60px] z-[15] flex h-screen w-screen flex-col p-10 text-3xl font-medium md:hidden`}
        >
          <Link
            to="project"
            smooth={true}
            onClick={handleClick}
            duration={1000}
          >
            <li className="mobile-li">{project}</li>
          </Link>
          <Link
            to="new-arrivals"
            onClick={handleClick}
            smooth={true}
            duration={1000}
          >
            <li className="mobile-li">{newArrivals}</li>
          </Link>
          <Link
            to="products"
            smooth={true}
            onClick={handleClick}
            duration={1000}
          >
            <li className="mobile-li">{products}</li>
          </Link>
          <Link
            to="company"
            onClick={handleClick}
            smooth={true}
            duration={1000}
          >
            <li className="mobile-li">{company}</li>
          </Link>
          <Link
            to="contact"
            onClick={handleClick}
            smooth={true}
            duration={1000}
          >
            <li className="mobile-li">{contact}</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
