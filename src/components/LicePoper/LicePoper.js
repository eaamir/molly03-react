import React, { useEffect, useState, useRef } from "react";
import mollylg from "../../img/MOLLY.png";
import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";
import MollyToken from "../matns/mollyToken";
import Features from "../matns/Features";
import WhyMolly from "../matns/whyMolly";
import MollyFarming from "../matns/mollyFarming";
import Nft from "../matns/mollyNft";
import MollyMerch from "../matns/mollyMerch";
import Tokenomics from "../matns/tokenomics";
import RoadMap from "../matns/roadMap";

const LicePoper = () => {
  //header drop down
  const dropMenu = useRef(null);

  const closeOpenMenu = (e) => {
    if (dropMenu.current && open && !dropMenu.current.contains(e.target)) {
      setOpen(false);
    }
  };

  document.addEventListener("mousedown", closeOpenMenu);

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   const handleWindowResize = () => {
  //     setWindowSize([window.innerWidth, window.innerHeight]);
  //   };

  //   window.addEventListener("resize", handleWindowResize);
  // }, []);

  //preloader
  const [loading, setLoading] = useState(true);
  const [textLoading, setTextLoading] = useState(true);
  const [loadText, setLoadText] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setTextLoading(false);
    }, 500);
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "visible";
    }, 3000);
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

  const [tab, setTab] = useState(1);

  return (
    <>
      {loading ? (
        <div
          id="preload"
          className="h-full w-full absolute z-50 bg-black text-white text-[40px]"
        >
          <div className="absolute top-[50%] left-[50%] mt-[-20px] ml-[-120px] flex items-center">
            <img
              className="animate-spin"
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
      ) : (
        <main
          id="preload02"
          className="min-h-screen bg-[#fbcd37] pt-[25px] xl:px-[25px] "
        >
          <div
            id="header"
            className=" mx-[25px] px-[25px] xl:px-[50px] py-[10px] grid grid-cols-2 xl:grid-cols-3 items-center z-[50] "
          >
            <div className="xl:flex flex-row justify-start gap-[13px] hidden ">
              <Link to="/" className="w-fit">
                <h1 className="bg-[#ffed76] font-alf w-fit h-fit px-[15px] py-[15px] rounded-lg uppercase text-white hover:bg-[#f1de5f] hover:text-[#f5490b] transition ">
                  About
                </h1>
              </Link>
              <Link to="/" className="w-fit">
                <h1 className="bg-[#ffed76] font-alf w-fit h-fit px-[15px] py-[15px] rounded-lg uppercase text-white hover:bg-[#f1de5f] hover:text-[#f5490b] transition">
                  Tokenomics
                </h1>
              </Link>
              <Link to="/" className="w-fit">
                <h1 className="bg-[#ffed76] font-alf w-fit h-fit px-[15px] py-[15px] rounded-lg uppercase text-white hover:bg-[#f1de5f] hover:text-[#f5490b] transition">
                  Roadmap
                </h1>
              </Link>
            </div>
            <div className="flex justify-start xl:justify-center ">
              <Link className="" to="/">
                <img
                  src={mollylg}
                  width={75}
                  height={75}
                  className="hover:rotate-[360deg] duration-[2s] ease-in-out w-[60px] xl:w-[75px] "
                />
              </Link>
            </div>
            {windowSize[0] <= 768 ? (
              <div
                className="text-[30px] text-right"
                onClick={() => setOpen(!open)}
                ref={dropMenu}
              >
                <i
                  style={{ color: "#ffffff" }}
                  className="fa-solid fa-bars"
                ></i>
              </div>
            ) : (
              <div className="xl:hidden justify-center justify-self-end items-center w-fit px-[50px] flex ">
                <div className=" flex justify-center border-r-2 border-[#ffffff] z-20 hover:scale-[1.1] transition ease-in-out ">
                  <a href="#" className="w-fit z-20 mx-[15px] ">
                    <i
                      className="fa-brands fa-telegram fa-3x"
                      style={{ color: "#873016" }}
                    ></i>
                  </a>
                </div>
                <div className="border-r-2 border-[#ffffff] z-20 hover:scale-[1.1] transition ease-in-out">
                  <a href="#" className="w-fit z-20 mx-[15px] ">
                    <i
                      className="fa-brands fa-square-x-twitter fa-3x"
                      style={{ color: "#873016" }}
                    ></i>
                  </a>
                </div>
                <div className=" z-20 hover:scale-[1.1] transition ease-in-out ">
                  <a href="#" className="w-fit z-20 mx-[15px] ">
                    <i
                      className="fa-brands fa-youtube fa-3x"
                      style={{ color: "#873016" }}
                    ></i>
                  </a>
                </div>
              </div>
            )}
            {open && (
              <div className=" ">
                <ul className="text-white text-[17px] z-[50] flex gap-[10px] text-center my-[15px] ">
                  <li className="border-2 border-white rounded-full p-[5px]">
                    <a href="/">About</a>
                  </li>
                  <li className="border-2 border-white rounded-full p-[5px]">
                    <a href="/">Tokenomics</a>
                  </li>
                  <li className="border-2 border-white rounded-full p-[5px]">
                    <a href="/">Roadmap</a>
                  </li>
                </ul>
              </div>
            )}
            <div className="xl:flex justify-center justify-self-end items-center w-fit px-[50px] hidden ">
              <div className=" flex justify-center border-r-2 border-[#ffffff] z-20 hover:scale-[1.1] transition ease-in-out ">
                <a href="#" className="w-fit z-20 mx-[15px] ">
                  <i
                    className="fa-brands fa-telegram fa-3x"
                    style={{ color: "#873016" }}
                  ></i>
                </a>
              </div>
              <div className="border-r-2 border-[#ffffff] z-20 hover:scale-[1.1] transition ease-in-out">
                <a href="#" className="w-fit z-20 mx-[15px] ">
                  <i
                    className="fa-brands fa-square-x-twitter fa-3x"
                    style={{ color: "#873016" }}
                  ></i>
                </a>
              </div>
              <div className=" z-20 hover:scale-[1.1] transition ease-in-out ">
                <a href="#" className="w-fit z-20 mx-[15px] ">
                  <i
                    className="fa-brands fa-youtube fa-3x"
                    style={{ color: "#873016" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row mx-[25px] gap-[25px] xl;gap-[50px] py-[25px] ">
            <div
              id="header"
              className="xl:w-[30%] w-full h-fit py-[25px] flex justify-center xl:justify-start items-center "
            >
              <ul className=" xl:border-l-2 xl:pl-[25px] w-full grid grid-cols-2 xl:flex xl:flex-col gap-[15px] mx-[15px] xl:mx-[50px] font-alf text-center text-[17px] xl:text-[20px] capitalize items-center xl:items-start justify-items-center ">
                <Link onClick={() => setTab(1)} to="/licepoper/mollytoken">
                  <li
                    id="shadow"
                    className={`rounded-3xl py-[10px] px-[15px] w-fit  transition active:bg-[#f5490b] ${
                      tab === 1
                        ? "bg-[#f5490b]"
                        : "hover:bg-[#ffc859] bg-[#f59e0b]"
                    }`}
                  >
                    molly token
                  </li>
                </Link>
                <Link onClick={() => setTab(2)} to="/licepoper/whymolly">
                  <li
                    id="shadow"
                    className={`rounded-3xl py-[10px] px-[15px] w-fit  transition active:bg-[#f5490b] ${
                      tab === 2
                        ? "bg-[#f5490b]"
                        : "hover:bg-[#ffc859] bg-[#f59e0b]"
                    }`}
                  >
                    why molly
                  </li>
                </Link>
                <Link onClick={() => setTab(3)} to="/licepoper/features">
                  <li
                    id="shadow"
                    className={`rounded-3xl py-[10px] px-[15px] w-fit  transition active:bg-[#f5490b] ${
                      tab === 3
                        ? "bg-[#f5490b]"
                        : "hover:bg-[#ffc859] bg-[#f59e0b]"
                    }`}
                  >
                    features
                  </li>
                </Link>
                <Link onClick={() => setTab(4)} to="/licepoper/mollyfarming">
                  <li
                    id="shadow"
                    className={`rounded-3xl py-[10px] px-[15px] w-fit  transition active:bg-[#f5490b] ${
                      tab === 4
                        ? "bg-[#f5490b]"
                        : "hover:bg-[#ffc859] bg-[#f59e0b]"
                    }`}
                  >
                    $molly farming
                  </li>
                </Link>
                <Link onClick={() => setTab(5)} to="/licepoper/mollymerch">
                  <li
                    id="shadow"
                    className={`rounded-3xl py-[10px] px-[15px] w-fit  transition active:bg-[#f5490b]  ${
                      tab === 5
                        ? "bg-[#f5490b]"
                        : "hover:bg-[#ffc859] bg-[#f59e0b]"
                    }`}
                  >
                    $molly merch
                  </li>
                </Link>

                <Link onClick={() => setTab(6)} to="/licepoper/mollynft">
                  <li
                    id="shadow"
                    className={`rounded-3xl py-[10px] px-[15px] w-fit transition active:bg-[#f5490b] ${
                      tab === 6
                        ? "bg-[#f5490b]"
                        : "hover:bg-[#ffc859]  bg-[#f59e0b]"
                    }`}
                  >
                    $molly NFT
                  </li>
                </Link>
                <Link onClick={() => setTab(7)} to="/licepoper/tokenomics">
                  <li
                    id="shadow"
                    className={`rounded-3xl py-[10px] px-[15px] w-fit transition active:bg-[#f5490b] ${
                      tab === 7
                        ? "bg-[#f5490b]"
                        : "hover:bg-[#ffc859]  bg-[#f59e0b]"
                    }`}
                  >
                    tokenomics
                  </li>
                </Link>
                <Link onClick={() => setTab(8)} to="/licepoper/roadmap">
                  <li
                    id="shadow"
                    className={`rounded-3xl py-[10px] px-[15px] w-fit  transition active:bg-[#f5490b] ${
                      tab === 8
                        ? " bg-[#f5490b]"
                        : "hover:bg-[#ffc859] bg-[#f59e0b]"
                    }`}
                  >
                    roadmap
                  </li>
                </Link>
              </ul>
            </div>
            <div id="header" className="xl:w-[70%] w-full ">
              <Routes>
                <Route path="/features" element={<Features />} />
                <Route path="/whymolly" element={<WhyMolly />} />
                <Route path="/mollyfarming" element={<MollyFarming />} />
                <Route path="/mollymerch" element={<MollyMerch />} />
                <Route path="/mollynft" element={<Nft />} />
                <Route path="/tokenomics" element={<Tokenomics />} />
                <Route path="/roadmap" element={<RoadMap />} />
                <Route path="/mollytoken" element={<MollyToken />} />
                <Route
                  path="/*"
                  element={<Navigate to="/licepoper/mollytoken" />}
                />
              </Routes>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default LicePoper;
