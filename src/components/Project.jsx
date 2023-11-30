import EuImage from "../assets/EUsign.png";
import EuImage2 from "../assets/EUsign_2.png";
import LogoRP from "../assets/logoRP.png";

function Project() {
  return (
    <div className="flex w-full items-center justify-center py-[150px]">
      <div className="flex w-full max-w-[1300px] flex-col justify-center gap-8 px-4">
        <h2 className="text-brand-green text-3xl font-semibold">
          PROJEKT UNIJNY
        </h2>
        <div className="grid w-full grid-cols-3 items-center">
          <img src={EuImage2} className="w-full" />
          <img src={LogoRP} className="w-full" />
          <img src={EuImage} className="w-full" />
        </div>
        <p>
          Zakup współfinansowany ze środków Unii Europejsiej w ramach
          Europejskiego Funduszu Rozwoju Regionalnego
        </p>
        <p>
          {" "}
          <span className="text-brand-green font-semibold">Nr umowy: </span>
          POIR.03.02.02-00-1926/20
        </p>
        <p>
          <span className="text-brand-green font-semibold">
            Tytuł projektu:{" "}
          </span>
          {
            "Wdrożenie technologii produkcji nowej grupy produktowej - baterii przemysłowych cynkowo-powietrznych o elektrolicie alkalicznym"
          }
        </p>
      </div>
    </div>
  );
}

export default Project;
