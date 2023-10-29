import React from "react";

import last from "../../img/circmol02.png";

const SectionSeven = () => {
  return (
    <div className="z-50 flex flex-col justify-center md:mt-[50px] overflow-hidden ">
      <div className="z-50 mt-[100px] xl:mt-[150px] ">
        <h1 className="z-50 font-alf text-[40px] uppercase text-center text-[#fff0a4] ">
          Molly chart
        </h1>
      </div>
      <div className="w-full overflow-hidden xl:flex xl:flex-row z-[10] px-[20px] mt-[50px] xl:mt-[150px]  ">
        <div className="xl:w-[50%] flex flex-row justify-center items-center ">
          <img
            loading="lazy"
            id="chartmolly"
            className=" w-[400px] "
            src={last}
            width={2000}
            height={2000}
            alt="background3"
          />
          <div className="bg-gradient-to-t from-[#f5490b] to-[#f59e0b] rounded-full w-[450px] h-[450px] animate-spin absolute z-[-1] justify-self-center hidden xl:flex "></div>
        </div>
        <div
          id="header"
          className="xl:w-[50%] px-[25px] py-[50px] h-fit flex flex-col justify-center my-auto xl:mr-[100px] mt-[20px] xl:mt-0"
        >
          <h1 className="font-alf text-center text-[27px] sm:text-[27px] text-white ">
            Molly-friendly tokenomics
          </h1>
          <p className="text-[18px] text-center font-sans mt-[25px] leading-relaxed text-white ">
            94% of the supply were sent to the uniswap liquidity pool. LP tokens
            were burnt forever and the contract is renounced so plebs can enjoy
            the ride safely. The other 6% of the supply is reserved in the
            plebcex.eth wallet for CEX listings and giveaways so pleb can grow
            and more plebs can join us. pleb is Molly-friendly and has zero
            taxes!
          </p>
        </div>
      </div>
      <div className="z-10 bg-[#ffc743] py-[10px] flex flex-row justify-center shadow mt-[50px] xl:mt-[150px] ">
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

export default SectionSeven;
