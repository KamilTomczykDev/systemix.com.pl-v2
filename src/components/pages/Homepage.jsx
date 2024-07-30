import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Project from "../sections/Project";
import NewArrivals from "../sections/NewArrivals";
import ContactCta from "../sections/ContactCta";
import CompanyCta from "../sections/CompanyCta";

function Homepage() {
  return (
    <>
      <Header />
      <Project />
      <NewArrivals />
      <CompanyCta />
      <ContactCta />
      <Footer />
    </>
  );
}

export default Homepage;
