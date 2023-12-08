import { createContext, useState } from "react";
import { polski } from "../../data/languages.js";

const LanguageContext = createContext();

// const initialState = {
//   lang: "pl",
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "change":
//       return {
//         ...state,
//         lang: action.payload,
//       };
//     default:
//       throw new Error("Unknown action type");
//   }
// }

function LanguageProvider({ children }) {
  //   const [{ lang }, dispatch] = useReducer(reducer, initialState);
  const [lang, setLang] = useState(polski);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageProvider, LanguageContext };
