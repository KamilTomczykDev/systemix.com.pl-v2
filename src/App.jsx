import Company from "./components/sections/Company";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Navbar from "./components/sections/Navbar";
import NewArrivals from "./components/sections/NewArrivals";
import Products from "./components/sections/Products";
import Project from "./components/sections/Project";

import { LanguageProvider } from "./components/contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Header />
      <Project />
      <NewArrivals />
      <Products />
      <Company />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
