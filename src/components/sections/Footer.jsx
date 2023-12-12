import { IoMdPin } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import useLanguages from "../hooks/useLanguages";

function Footer() {
  const {
    lang: {
      footer: { adress, contact, copyright },
    },
  } = useLanguages();
  return (
    <div
      name="contact"
      className="flex w-full flex-col items-center justify-between bg-stone-800 text-white"
    >
      <div className="mb-10 flex w-full max-w-main flex-col gap-[75px] p-10 sm:flex-row sm:justify-center">
        <div className="flex flex-col">
          <h3 className="flex items-center text-xl font-semibold ">
            <IoMdPin />
            {adress}
          </h3>
          <h4>SYSTEMIX sp. z o.o.</h4>
          <h4>ul. Lubichowska 176A</h4>
          <h4>83-200 Starogard Gdański</h4>
        </div>
        <div className="flex flex-col">
          <h3 className="flex items-center gap-2 text-xl font-semibold">
            <FaPhone size={20} />
            {contact}
          </h3>
          <h4>+48 58/561 48 13</h4>
          <h4>+48 58/561 48 14</h4>
          <h4>biuro@systemix.com.pl</h4>
        </div>
      </div>
      <div className="flex h-[80px] w-full items-center justify-center border-t-[1px] border-stone-600 bg-stone-900 p-4 text-center text-xs xs:text-sm">
        {copyright} Systemix sp. z o.o. ©2024
      </div>
    </div>
  );
}

export default Footer;
