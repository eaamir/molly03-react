import Footer from "./components/Footer";
import SectionEight from "./components/SectionEight";
import SectionFive from "./components/SectionFive";
import SectionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import SectionSeven from "./components/SectionSeven";
import SectionSix from "./components/SectionSix";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";
import Header from "./components/partials/Header";

const Home = () => {
  return (
    <>
      <main>
        <section id="sec01" className=" min-h-screen">
          <Header />
          <SectionOne />
        </section>
        <section id="sec02" className="min-h-screen ">
          <SectionTwo />
        </section>
        <section id="sec03" className="min-h-screen">
          <SectionThree />
        </section>
        <section id="sec04" className="min-h-screen">
          <SectionSeven />
        </section>
        <section id="sec06">
          <SectionFour />
        </section>
        <section id="sec05">
          <SectionFive />
          <SectionSix />
        </section>
        <section id="seclast">
          <SectionEight />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Home;
