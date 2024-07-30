import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import useLanguages from "../hooks/useLanguages";
import { MdOutlineNewReleases } from "react-icons/md";

function MobileNav() {
  const {
    lang: {
      nav: { home, products, company, contact },
    },
  } = useLanguages();
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <>
      <div
        className="z-20 cursor-pointer text-grey-secondary lg:hidden"
        onClick={handleClick}
      >
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      {/* mobile nav-menu */}
      <ul
        className={`absolute bg-white transition-all duration-500 ${
          nav ? "left-[0]" : "left-[-120%]"
        } top-[60px] z-[15] flex h-screen w-screen flex-col p-10 text-3xl font-medium lg:hidden`}
      >
        <Link to="/" onClick={handleClick}>
          <li className="mobile-li">{home}</li>
        </Link>

        <Link to="produkty" onClick={handleClick}>
          <li className="mobile-li">{products}</li>
        </Link>
        <Link to="baterie-typu-slim" onClick={handleClick}>
          <li className="mobile-li-s text-orange-500">
            Baterie typu slim <MdOutlineNewReleases />
          </li>
        </Link>
        <Link to="przenosne-magazyny-energii" onClick={handleClick}>
          <li className="mobile-li-s text-orange-500">
            Przenośne magazyny energii <MdOutlineNewReleases />
          </li>
        </Link>
        <Link to="stacjonarne-magazyny-energii" onClick={handleClick}>
          <li className="mobile-li-s text-orange-500">
            Stacjonarne magazyny energii <MdOutlineNewReleases />
          </li>
        </Link>
        <Link to="baterie-cynkowo-powietrzne" onClick={handleClick}>
          <li className="mobile-li-s">Baterie cynkowo-powietrzne</li>
        </Link>
        <Link to="firma" onClick={handleClick}>
          <li className="mobile-li">{company}</li>
        </Link>
        <Link to="kontakt" onClick={handleClick}>
          <li className="mobile-li">{contact}</li>
        </Link>
      </ul>
    </>
  );
}

export default MobileNav;
