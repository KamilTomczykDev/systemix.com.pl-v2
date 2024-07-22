import useLanguages from "../hooks/useLanguages";
import ImageHeading from "../ui/ImageHeading";

function Temp() {
  const {
    lang: {
      products: { header },
    },
  } = useLanguages();

  return <ImageHeading src={"bg-we-take-care"}>{header}</ImageHeading>;
}

export default Temp;
