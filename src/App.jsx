import { LanguageProvider } from "./components/contexts/LanguageContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./components/ui/AppLayout";
import Homepage from "./components/pages/Homepage";
import Slim from "./components/pages/Slim";
import ScrollToTop from "./components/ui/ScrollToTop";
import Mobiles from "./components/pages/Mobiles";
import Stationaries from "./components/pages/Stationaries";
import Company from "./components/pages/Company";
import Products from "./components/pages/Products";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Homepage />} />
            <Route path="slim" element={<Slim />} />
            <Route path="przenośne-magazyny-energii" element={<Mobiles />} />
            <Route
              path="stacjonarne-magazyny-energii"
              element={<Stationaries />}
            />
            <Route path="Firma" element={<Company />} />
            <Route path="produkty" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
