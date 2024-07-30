// import { FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlineNewReleases } from "react-icons/md";

import { Link } from "react-router-dom";

function Product({ title, src, to }) {
  return (
    <Link to={to}>
      <div className="flex w-full cursor-pointer justify-between rounded-2xl bg-orange-700 p-5 text-xl font-semibold text-white transition hover:bg-orange-500 sm:text-3xl xl:h-[400px] xl:max-w-[300px] xl:flex-col xl:items-end ">
        <div className="flex items-center xl:items-start ">
          <span className="flex max-w-[230px] gap-2">{title}</span>
          <div className="hidden xl:flex">
            <MdOutlineNewReleases />
          </div>
          {/* <FaExternalLinkAlt size="30"></FaExternalLinkAlt> */}
        </div>
        <img className="w-[75px] sm:w-[100px] xl:w-[125px]" src={src}></img>
      </div>
    </Link>
  );
}

export default Product;
