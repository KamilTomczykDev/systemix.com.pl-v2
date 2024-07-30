import { Link } from "react-router-dom";

import Logo from "../../assets/img/systemix-logo.png";
import SelectLanguage from "../ui/SelectLanguage";
import DesktopNav from "../ui/DesktopNav";
import MobileNav from "../ui/MobileNav";

function Navbar() {
  return (
    <div className="fixed z-20 flex h-[60px] w-full items-center justify-center border-b-[1px] bg-white lg:h-[80px]">
      <nav className="flex w-full max-w-main items-center justify-between px-5 text-lg">
        <div className="flex items-center gap-4 xl:gap-10">
          <Link to="/">
            <img
              alt="Logo"
              src={Logo}
              className="h-[50px] cursor-pointer hover:opacity-70 lg:h-[70px]"
            />
          </Link>
          <SelectLanguage />
        </div>
        <DesktopNav />

        {/* mobile nav-bar */}
        <MobileNav />
      </nav>
    </div>
  );
}

export default Navbar;
