import React from "react";

import molly_bj from "../../img/molly01ibj.png";
import molly from "../../img/mol02obj.png";

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";


// gsap.registerPlugin(ScrollTrigger);

const SectionTwo = () => {

  // const molleft = useRef();

  // useLayoutEffect(() => {

  //   gsap.from(molleft.current, { x: "-200px" })

  //   const anim = gsap.to(molleft.current, { x: "70px", paused: true });


  //   ScrollTrigger.create({
  //     trigger: molleft.current,
  //     start: "center 70%",
  //     onEnter: () => anim.play()
  //   });

  //   ScrollTrigger.create({
  //     trigger: molleft.current,
  //     start: "top bottom",
  //     onLeaveBack: () => anim.pause(0)
  //   });

  // gsap.to(molleft.current, {
  //   x: -200,
  //   scrollTrigger: {
  //     trigger: molleft.current,
  //     start: 'left center',
  //     end: 'center center',
  //     scrub: true
  //   }
  // });

  // gsap.to(molleft.current, {
  //   x: "50%",
  //   scrollTrigger: {
  //     trigger: molleft.current,
  //     start: 'center center',
  //     end: 'center left',
  //     scrub: true
  //   }




  // });

  // }, []);


  return (
    <div className=" w-full flex flex-col z-10 mt-[50px] overflow-hidden ">
      <div className=" w-full z-10 mt-[50px] ">
        <h1 className="text-[40px] text-[#fff0a4] font-alf capitalize text-center ">
          The Story of Molly
        </h1>
      </div>
      <div className="w-full md:flex md:flex-row z-10 px-[5px] md:px-[50px] mt-[-100px] md:mt-[100px]">
        <div className=" w-full xl:w-[20%] xl:ml-[100px] mt-[150px] mb-[20px] xl:mb-0" >
          <img
            loading="lazy"
            className=" w-[200px] mx-auto"
            src={molly_bj}
            width={630}
            height={1055}
            alt="background3"
          />
        </div>
        <div
          id="header"
          className="w-[95%] mb-[100px] mx-auto xl:w-[60%] xl:mr-[100px] xl:ml-[50px] px-[20px] sm:px-[50px] py-[25px] flex flex-col justify-center "
        >
          <h1 className="font-alf text-[26px] sm:text-[27px] text-white ">
            About
          </h1>
          <hr id="divi" className="w-[150px] mt-[10px] " />
          <p className="text-[18px] font-sans mt-[25px] leading-loose text-white ">
            Molly is for the ones who can’t catch a break. The ones who ape tops
            and sell bottoms and like to invest in rug pull scams. Look no
            further anon, Pleb is now your home, your calling. The token was
            made to be completely safe for all plebs, which is why there is 0
            tax and liquidity has been burnt. Molly get reky no more.
          </p>
        </div>
      </div>
      <div id="lor2" className="relative xl:visible invisible ">
        <img
          loading="lazy"
          className="w-[150px] absolute bottom-[-310px] "
          src={molly}
          width={3000}
          height={2000}
          alt="molly"
        />
      </div>
      <div className="z-10 bg-[#ffc038] py-[10px] flex flex-row justify-center shadow xl:mt-[300px] ">
        <p
          id="lor"
          className="text-[13px] font-alf text-black text-center w-full "
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

export default SectionTwo;
