import Company from "./components/sections/Company";
import Header from "./components/sections/Header";
import Navbar from "./components/sections/Navbar";
import NewArrivals from "./components/sections/NewArrivals";
import Products from "./components/sections/Products";
import Project from "./components/sections/Project";
import ImageHeading from "./components/ui/ImageHeading";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Project />
      <ImageHeading src={"bg-new-arrivals"}>Nowości</ImageHeading>
      <NewArrivals />
      <ImageHeading src={"bg-we-take-care"}>Dbamy o przyszłość</ImageHeading>
      <Products />
      <Company />
    </>
  );
}

export default App;
