// import CompanyImage from "../../assets/img/company-pic.jpg";

function ContactForm() {
  return (
    <div className="flex flex-col xl:flex-row">
      <form className="flex flex-col gap-4 rounded-md border-[2px] border-stone-200 px-4 py-10">
        <h2 className="text-3xl font-semibold">
          Skontaktuj się z nami poprzez formularz:
        </h2>
        <div className="flex flex-col font-semibold">
          <label htmlFor="name">Imię i nazwisko</label>
          <input
            autoComplete="true"
            id="name"
            type="text"
            required
            className=" border-2 border-stone-200 bg-stone-100 p-2"
          />
        </div>
        <div className="flex flex-col font-semibold">
          <label htmlFor="name">E-mail</label>
          <input
            autoComplete="true"
            required
            id="email"
            type="email"
            className="border-2 border-stone-200 bg-stone-100 p-2"
          />
        </div>
        <div className="flex flex-col font-semibold">
          <label htmlFor="name">Treść</label>
          <textarea
            required
            id="message"
            rows="7"
            className="resize-none border-2 border-stone-200 bg-stone-100 p-2"
          ></textarea>
        </div>
        <button className="text-md rounded-md border-2 border-brand-green-secondary bg-brand-green py-2 text-white transition-all hover:bg-brand-green-secondary md:py-3 md:text-xl">
          Wyślij
        </button>
      </form>
      <div
        className={`my-10 hidden w-[40%] rounded-r-lg border-2 border-l-0 border-stone-200 bg-[url('/src/assets/img/company-pic.jpg')] bg-cover bg-center xl:block`}
      ></div>
      {/* <img src={CompanyImage} className="hidden bg-cover xl:block xl:w-[50%]" /> */}
    </div>
  );
}

export default ContactForm;
