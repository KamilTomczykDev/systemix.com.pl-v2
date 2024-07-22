// import { FaExternalLinkAlt } from "react-icons/fa";

import { Link } from "react-router-dom";

function NewArrivalProduct({ title, src, to }) {
  return (
    <Link to={to}>
      <div>
        <div className="flex w-full cursor-pointer justify-between rounded-2xl bg-orange-700 p-5 text-xl font-semibold text-white transition hover:bg-orange-500 sm:text-3xl lg:h-[400px] lg:max-w-[300px] lg:flex-col lg:items-end ">
          <div className="flex items-center ">
            <span className="max-w-[230px]">{title}</span>
            {/* <FaExternalLinkAlt size="30"></FaExternalLinkAlt> */}
          </div>
          <img className="w-[75px] sm:w-[100px] lg:w-[125px]" src={src}></img>
        </div>
      </div>
    </Link>
  );
}

export default NewArrivalProduct;
