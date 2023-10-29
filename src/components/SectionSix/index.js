import React, { useRef, useLayoutEffect, Link } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import vec7 from "../../img/Vector 7.png";
import vec8 from "../../img/Vector 8.png";
import vec9 from "../../img/Vector 9.png";
import vec10 from "../../img/Vector 10.png";

gsap.registerPlugin(ScrollTrigger);

const SectionSix = () => {
  // gsap animation
  const exited = useRef();

  useLayoutEffect(() => {
    gsap.from(exited.current, { bottom: "-100%" });

    const anim = gsap.to(exited.current, {
      bottom: "10px",
      duration: 1,
      paused: true,
    });

    ScrollTrigger.create({
      trigger: exited.current,
      start: "bottom center",
      onEnter: () => anim.play(),
    });

    ScrollTrigger.create({
      trigger: exited.current,
      start: "center bottom",
      onLeaveBack: () => anim.pause(0),
    });
  }, []);

  return (
    <div className=" w-full flex flex-col z-10 mt-[100px] ">
      <div className=" w-full z-10 ">
        <h1
          id="story"
          className="text-[50px] mt-[15px] md:text-[60px] text-[#FCDA6C] md:text-[#873016] drop-shadow font-alf uppercase text-center "
        >
          Road Map
        </h1>
      </div>
      <div className="px-[25px] ">
        <div className="w-full z-10 hover:z-50 grid xl:grid-cols-2 gap-[50px] mt-[75px] mb-[25px] px-[10px] md:px-[50px]">
          <div
            id="header"
            className=" flex flex-col justify-center h-auto xl:h-[250px] mb-[40px] lg:mb-0 py-[15px] px-[10px] lg:hover:scale-[1.1] transition ease-in-out duration-1000 "
          >
            <h1 id="phase">Phase 1</h1>
            <p className=" mt-[15px] font-alf text-center text-[17px] md:text-[20px] xl:mx-[50px] tracking-wide text-white leading-loose ">
              Token Launch Build Community of 1000 Molly CoinMarketCap &
              Coingecko listings Meme competitions Molly Meme War Chest
            </p>
          </div>
          <div className=" hidden xl:flex justify-center items-center ">
            <img className="w-[400px] h-[200px] " src={vec7} />
          </div>
        </div>
        <div className="w-full z-10 hover:z-50 grid xl:grid-cols-2 gap-[50px] px-[10px] mb-[25px] md:px-[50px]">
          <div className=" justify-center items-center hidden xl:flex ">
            <img className="w-[500px] h-[200px] " src={vec8} />
          </div>
          <div
            id="header"
            className=" flex flex-col justify-center h-auto xl:h-[250px] mb-[40px] lg:mb-0 py-[15px] px-[10px] lg:hover:scale-[1.1] transition ease-in-out duration-1000 "
          >
            <h1 id="phase">Phase 2</h1>
            <p className=" mt-[15px] font-alf text-center text-[17px] md:text-[20px] xl:mx-[50px] tracking-wide text-white leading-loose ">
              Molly in the news Web3 Molly forum 10,000 holders Tier 2 CEX
              listings
            </p>
          </div>
        </div>
        <div className="w-full z-10 hover:z-50 grid xl:grid-cols-2 gap-[50px] px-[10px] mb-[25px] md:px-[50px]">
          <div
            id="header"
            className=" flex flex-col justify-center h-auto xl:h-[250px] mb-[40px] lg:mb-0 py-[15px] px-[10px] lg:hover:scale-[1.1] transition ease-in-out duration-1000 "
          >
            <h1 id="phase">Phase 3</h1>
            <p className=" mt-[15px] font-alf text-center text-[17px] md:text-[20px] tracking-wide text-white leading-loose ">
              Molly Labs IncorporationTier 1 CEX listingsPleb MerchandiseIRL
              Events & Molly meetupNo.1 memecoin
            </p>
          </div>
          <div className=" justify-center items-center hidden xl:flex  ">
            <img className="w-[500px] h-[200px] " src={vec9} />
          </div>
        </div>
        <div className="w-full z-10 hover:z-50 grid xl:grid-cols-2 gap-[50px] justify-end px-[10px] mb-[25px] md:px-[50px]">
          <div className=" justify-center items-center hidden xl:flex ">
            <img className="w-[500px] h-[200px] " src={vec10} />
          </div>
          <div
            id="header"
            className=" flex flex-col justify-center h-auto xl:h-[250px] mb-[40px] lg:mb-0 py-[15px] px-[10px] lg:hover:scale-[1.1] transition ease-in-out duration-1000 "
          >
            <h1 id="phase">Phase 4</h1>
            <p className=" mt-[15px] font-alf text-center text-[17px] md:text-[20px] xl:mx-[50px] tracking-wide text-white leading-loose ">
              Molly in the news Web3 Molly forum 10,000 holders Tier 2 CEX
              listings Molly in the news Web3 Molly forum 10,000 holders Tier 2
              CEX listings
            </p>
          </div>
        </div>
      </div>
      <section
        className="flex flex-row justify-center sticky bottom-[10px] z-50"
        ref={exited}
      >
        <div className=" w-full xl:w-[50%] h-[75px] md:h-[100px] flex flex-row justify-between items-center px-[10px] md:px-[50px] rounded-3xl bg-amber-500 shadow-lg ">
          <h1 className="text-center text-white font-alf text-[15px] md:text-[25px] uppercase h-fit ">
            You are not <span className="text-orange-700 ">excited</span> yet !
          </h1>
          <a
            href="#sec02"
            id="btnext"
            className=" bg-white hover:bg-yellow-500 text-orange-700 hover:text-black uppercase text-center text-[13px] md:text-[16px] font-sans font-bold tracking-wide px-[15px] md:px-[25px] py-[10px] md:py-[15px] rounded-xl shadow-lg hover:scale-[1.1] transition duration-500 "
          >
            Explore more
          </a>
        </div>
      </section>
      <div className="z-10 bg-[#9b8520] py-[10px] flex flex-row justify-center shadow xl:mt-[25px] overflow-hidden ">
        <p
          id="lor"
          className="text-[13px] font-alf text-white text-center w-full "
        >
          MOLLY. MOLLY. MOLLY. MOLLY. MOLLY. MOLLY. MOLLY. MOLLY. MOLLY. MOLLY.
          MOLLY. MOLLY. MOLLY. MOLLY. MOLLY. MOLLY. MOLLY. MOLLY. MOLLY. MOLLY.
          MOLLY. MOLLY. MOLLY. MOLLY. MOLLY. MOLLY. MOLLY. MOLLY. MOLLY. MOLLY.
          MOLLY. MOLLY. MOLLY. MOLLY. MOLLY. MOLLY. MOLLY. MOLLY. MOLLY. MOLLY.
        </p>
      </div>
    </div>
  );
};

export default SectionSix;
