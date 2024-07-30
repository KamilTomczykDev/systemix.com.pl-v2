import Footer from "../sections/Footer";
import ImageHeading from "../ui/ImageHeading";
import Section from "../ui/Section";

function Stationaries() {
  return (
    <>
      <Section>
        <div className="flex w-full flex-col items-center justify-center p-4 sm:max-w-[600px] xl:max-w-[1300px]">
          <h2 className="text-xl font-semibold leading-[25px]  text-stone-800  sm:text-5xl sm:leading-[55px]  xl:text-5xl xl:leading-[70px]">
            Nasza oferta stacjonarnych magazynów energii oraz inwerterów jest
            skierowana do klientów, którzy szukają nowoczesnych i efektywnych
            rozwiązań w zakresie zarządzania energią.
          </h2>
          <ImageHeading src="bg-stationaries">
            Stacjonarne źródła energii
          </ImageHeading>
        </div>
      </Section>
      <Footer />
    </>
  );
}

export default Stationaries;
