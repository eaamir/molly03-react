import React from "react";

import moll10 from "../../img/moll10.png";
import molly05 from "../../img/moll05.png";

const SectionThree = () => {
  return (
    <div className=" w-full flex flex-col z-10 mt-[100px] overflow-hidden ">
      <div className=" w-full z-10  ">
        <h1 className="text-[40px] text-[#fff0a4] font-alf capitalize text-center ">
          Brief and useful
        </h1>
      </div>
      <div className="w-full overflow-hidden xl:flex xl:flex-row-reverse z-[10] px-[20px] mt-[-50px] xl:mt-[150px]  ">
        <div className="xl:w-[20%] w-[50%] mr-[100px] pt-[100px] xl:block mx-auto">
          <img
            id="smile"
            className=" w-[183px] "
            loading="lazy"
            src={moll10}
            width={630}
            height={1055}
            alt="background3"
          />
        </div>
        <div
          id="header"
          className="w-full mt-[50px] xl:mt-0 xl:w-[80%] mr-0 ml-0 xl:mr-[100px] mb-[50px] xl:ml-[150px] px-[20px] sm:px-[50px] py-[25px] flex flex-col justify-center "
        >
          <h1 className="font-alf text-left text-[27px] sm:text-[27px] text-white ">
            Molly-friendly tokenomics
          </h1>
          <hr id="divi" className="w-[150px] mt-[10px] " />
          <p className="text-[18px] font-sans mt-[25px] leading-relaxed text-white ">
            94% of the supply were sent to the uniswap liquidity pool. LP tokens
            were burnt forever and the contract is renounced so plebs can enjoy
            the ride safely. The other 6% of the supply is reserved in the
            plebcex.eth wallet for CEX listings and giveaways so pleb can grow
            and more plebs can join us. pleb is Molly-friendly and has zero
            taxes!
          </p>
        </div>
      </div>
      <div id="lor3" className="relative xl:visible invisible ">
        <img
          className="w-[150px] absolute bottom-[-310px] "
          src={molly05}
          width={3000}
          height={2000}
          alt="molly"
        />
      </div>
      <div className="z-10 bg-[#b6420a] py-[10px] flex flex-row justify-center shadow xl:mt-[300px] ">
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

export default SectionThree;
