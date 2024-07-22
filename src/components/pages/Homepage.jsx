import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Products from "./Products";
import Project from "../sections/Project";
import NewArrivals from "../sections/NewArrivals";

function Homepage() {
  return (
    <>
      <Header />
      <Project />
      <NewArrivals />
      <Products />
      <Footer />
    </>
  );
}

export default Homepage;
