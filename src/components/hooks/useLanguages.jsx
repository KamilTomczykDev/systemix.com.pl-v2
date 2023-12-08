import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

function useLanguages() {
  const context = useContext(LanguageContext);
  if (context === undefined) return new Error("Language Context");
  return context;
}

export default useLanguages;
