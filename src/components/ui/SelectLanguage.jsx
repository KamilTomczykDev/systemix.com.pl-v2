import { deutsch, english, polski } from "../../data/languages";
import useLanguages from "../hooks/useLanguages";

export let lang = "polski";

function SelectLanguage() {
  const { setLang } = useLanguages();

  function handleChange(value) {
    lang = value;

    if (lang === "polski") setLang(polski);
    if (lang === "english") setLang(english);
    if (lang === "deutsch") setLang(deutsch);
  }

  return (
    <select
      onChange={(e) => handleChange(e.target.value)}
      className="cursor-pointer font-semibold text-brand-green hover:opacity-80"
    >
      <option value="polski">Polski</option>
      <option value="english">English</option>
      <option value="deutsch">Deutsch</option>
    </select>
  );
}

export default SelectLanguage;
