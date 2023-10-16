import React from "react";

import molly_bj from "../../img/molly01ibj.png";
import molly from "../../img/mol02obj.png";

const SectionTwo = () => {
  return (
    <div className=" w-full flex flex-col z-10 mt-[50px] overflow-hidden ">
      <div className=" w-full z-10 mt-[50px] ">
        <h1 className="text-[40px] text-[#fff0a4] font-alf capitalize text-center ">
          The Story of Molly
        </h1>
      </div>
      <div className="w-full md:flex md:flex-row z-10 px-[5px] md:px-[50px] mt-[85px]">
        <div className=" w-[50%] md:w-[20%] ml-[100px] mt-[150px] ">
          <img
            className=" w-[200px] "
            src={molly_bj}
            width={630}
            height={1055}
            alt="background3"
          />
        </div>
        <div
          id="header"
          className="w-[95%] mb-[100px] mx-auto md:w-[60%] md:mr-[100px] md:ml-[50px] px-[20px] sm:px-[50px] py-[25px] flex flex-col justify-center "
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
          className="w-[150px] absolute bottom-[-310px] "
          src={molly}
          width={3000}
          height={2000}
          alt="molly"
        />
      </div>
      <div className="z-10 bg-[#7e2b40] py-[25px] flex flex-row justify-center shadow mt-[300px] ">
        <p
          id="lor"
          className="text-[15px] font-alf text-white text-center w-full "
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
