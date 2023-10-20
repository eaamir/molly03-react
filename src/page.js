import { useEffect, useState } from "react";
import mollylg from "./img/MOLLY.png";

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
  const [loading, setLoading] = useState(true);
  const [textLoading, setTextLoading] = useState(true);
  const [loadText, setLoadText] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setTextLoading(false);
    }, 2000);
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "visible";
    }, 5000);
    if (textLoading === false) {
      if (loadText === "") {
        setLoadText("M");
      }
      setTimeout(() => {
        if (loadText === "M") {
          setLoadText("MO");
        }
      }, 400);
      setTimeout(() => {
        if (loadText === "MO") {
          setLoadText("MOL");
        }
      }, 400);
      setTimeout(() => {
        if (loadText === "MOL") {
          setLoadText("MOLL");
        }
      }, 400);
      setTimeout(() => {
        if (loadText === "MOLL") {
          setLoadText("MOLLY");
        }
      }, 400);
    }
  }, [loadText, textLoading]);

  return (
    <>
      {loading && (
        <div className="h-full w-full absolute z-50 bg-black text-white text-[40px]">
          <div className="absolute top-[50%] left-[50%] mt-[-20px] ml-[-120px] flex items-center">
            <img
              loading="lazy"
              src={mollylg}
              width={65}
              height={65}
              alt="logo of molly website"
              style={{ marginRight: "10px" }}
            />
            {loadText}
          </div>
        </div>
      )}
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
