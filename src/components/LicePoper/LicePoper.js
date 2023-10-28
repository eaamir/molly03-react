import React, { useEffect, useState } from "react";
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

  const [active, setActive] = useState(true);
  return (
    <>
      {loading ? (
        <div
          id="preload"
          className="h-full w-full absolute z-50 bg-black text-white text-[40px]"
        >
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
      ) : (
        <main
          id="preload02"
          className="min-h-screen bg-[#fbcd37] pt-[25px] px-[25px] "
        >
          <div
            id="header"
            className=" mx-[25px] px-[50px] py-[10px] grid grid-cols-3 items-center "
          >
            <div className="flex flex-row justify-start gap-[13px] ">
              <Link className="w-fit">
                <h1 className="bg-[#ffed76] font-alf w-fit h-fit px-[15px] py-[15px] rounded-lg uppercase text-white ">
                  About
                </h1>
              </Link>
              <Link className="w-fit">
                <h1 className="bg-[#ffed76] font-alf w-fit h-fit px-[15px] py-[15px] rounded-lg uppercase text-white">
                  Tokenomics
                </h1>
              </Link>
              <Link className="w-fit">
                <h1 className="bg-[#ffed76] font-alf w-fit h-fit px-[15px] py-[15px] rounded-lg uppercase text-white">
                  Roadmap
                </h1>
              </Link>
            </div>
            <div className="flex justify-center ">
              <img src={mollylg} width={75} height={75} />
            </div>
            <div className="flex justify-center justify-self-end items-center w-fit px-[50px] ">
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
          <div className="flex mx-[25px] gap-[50px] py-[25px] ">
            <div
              id="header"
              className="w-[30%] h-fit py-[25px] flex justify-start items-center "
            >
              <ul className=" border-l-2 pl-[25px] w-full flex flex-col gap-[15px] mx-[50px] font-alf text-center text-[20px] capitalize ">
                <Link
                  onClick={() => setActive(true)}
                  to="/licepoper/mollytoken"
                >
                  <li
                    id="shadow"
                    className={` ${
                      active
                        ? "bg-[#f5490b] rounded-3xl py-[10px] px-[15px] w-fit hover:bg-[#ffc859] transition"
                        : "bg-[#f59e0b] rounded-3xl py-[10px] px-[15px] w-fit hover:bg-[#ffc859] transition"
                    }`}
                  >
                    molly token
                  </li>
                </Link>
                <Link to="/licepoper/whymolly">
                  <li
                    id="shadow"
                    className="bg-[#f59e0b] rounded-3xl py-[10px] px-[15px] w-fit hover:bg-[#ffc859] active:bg-[#f58c0b]  "
                  >
                    why molly
                  </li>
                </Link>
                <Link to="/licepoper/features">
                  <li
                    id="shadow"
                    className="bg-[#f59e0b] rounded-3xl py-[10px] px-[15px] w-fit hover:bg-[#ffc859] active:bg-[#f58c0b]  "
                  >
                    features
                  </li>
                </Link>
                <Link to="/licepoper/mollyfarming">
                  <li
                    id="shadow"
                    className=" bg-[#f59e0b] rounded-3xl py-[10px] px-[15px] w-fit hover:bg-[#ffc859] active:bg-[#f58c0b]"
                  >
                    $molly farming
                  </li>
                </Link>
                <Link to="/licepoper/mollymerch">
                  <li
                    id="shadow"
                    className=" bg-[#f59e0b] rounded-3xl py-[10px] px-[15px] w-fit hover:bg-[#ffc859] active:bg-[#f58c0b]"
                  >
                    $molly merch
                  </li>
                </Link>

                <Link to="/licepoper/mollynft">
                  <li
                    id="shadow"
                    className=" bg-[#f59e0b] rounded-3xl py-[10px] px-[15px] w-fit hover:bg-[#ffc859] active:bg-[#f58c0b]"
                  >
                    $molly NFT
                  </li>
                </Link>
                <Link to="/licepoper/tokenomics">
                  <li
                    id="shadow"
                    className=" bg-[#f59e0b] rounded-3xl py-[10px] px-[15px] w-fit hover:bg-[#ffc859] active:bg-[#f58c0b]"
                  >
                    tokenomics
                  </li>
                </Link>
                <Link to="/licepoper/roadmap">
                  <li
                    id="shadow"
                    className=" bg-[#f59e0b] rounded-3xl py-[10px] px-[15px] w-fit hover:bg-[#ffc859] active:bg-[#f58c0b]"
                  >
                    roadmap
                  </li>
                </Link>
              </ul>
            </div>
            <div id="header" className="w-[70%]">
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
