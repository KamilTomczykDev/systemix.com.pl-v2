import { IoMdPin } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <div
      name="contact"
      className="flex w-full flex-col items-center justify-between bg-stone-800 text-white"
    >
      <div className="max-w-main mb-10 flex w-full flex-col gap-[75px] p-10 sm:flex-row sm:justify-center">
        <div className="flex flex-col">
          <h3 className="flex items-center text-xl font-semibold ">
            <IoMdPin />
            Adres
          </h3>
          <h4>SYSTEMIX sp. z o.o.</h4>
          <h4>ul. Lubichowska 176A</h4>
          <h4>83-200</h4>
        </div>
        <div className="flex flex-col">
          <h3 className="flex items-center gap-2 text-xl font-semibold">
            <FaPhone size={20} />
            Kontakt
          </h3>
          <h4>+48 58/561 48 13</h4>
          <h4>+48 58/561 48 14</h4>
          <h4>biuro@systemix.com.pl</h4>
        </div>
      </div>
      <div className="flex h-[80px] w-full items-center justify-center border-t-[1px] border-stone-600 bg-stone-900 p-4 text-center text-xs xs:text-sm">
        Wszystkie prawa zastrzerzone @ Systemix sp. z o.o.
      </div>
    </div>
  );
}

export default Footer;
