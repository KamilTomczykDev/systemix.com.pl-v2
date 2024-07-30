import { Link } from "react-router-dom";
import useLanguages from "../hooks/useLanguages";
import { useState } from "react";

import { MdOutlineNewReleases } from "react-icons/md";

function DesktopNav() {
  const [dropdown, setDropdown] = useState(false);

  const {
    lang: {
      nav: { home, products, company, contact },
    },
  } = useLanguages();

  return (
    <ul className="hidden items-center gap-7 lg:flex">
      <li>
        <Link to="/">{home}</Link>
      </li>
      <li
        className="text-orange-500"
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
      >
        <Link to="produkty">{products}</Link>
        {dropdown && (
          <ul className="absolute bottom-[-150px] border-[2px] border-stone-400 bg-white">
            <Link to="/baterie-typu-slim">
              <li className="dropdown-item text-orange-500">
                Baterie typu slim <MdOutlineNewReleases />
              </li>
            </Link>
            <Link to="/przenosne-magazyny-energii">
              <li className="dropdown-item text-orange-500">
                Mobilne Magazyny Energii <MdOutlineNewReleases />
              </li>
            </Link>
            <Link to="/stacjonarne-magazyny-energii">
              <li className="dropdown-item text-orange-500">
                Stacjonarne Magazyny Energii <MdOutlineNewReleases />
              </li>
            </Link>
            <Link to="/baterie-cynkowo-powietrzne">
              <li className="dropdown-item ">Baterie Cynkowo-Powietrzne</li>
            </Link>
          </ul>
        )}
      </li>

      <li>
        <Link to="firma">{company}</Link>
      </li>
      <li>
        <Link to="kontakt">
          <button className="rounded-md border-2 border-green-700 bg-brand-green px-6 py-2 text-white hover:bg-brand-green-secondary">
            {contact}
          </button>
        </Link>
      </li>
    </ul>
  );
}

export default DesktopNav;
