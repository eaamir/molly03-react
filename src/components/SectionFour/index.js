import React from "react";
import mollzz from "../../img/mollzz.png";

const SectionFour = () => {
  return (
    <div className="  flex flex-col z-10 mx-auto p-[20px] rounded-lg">
      <div className="flex flex-row justify-center w-full mt-[50px] ">
        <img
        loading="lazy"
          className="w-[185px] "
          src={mollzz}
          width={2000}
          height={2000}
          alt="mollyzz"
        />
      </div>
      <div className=" w-full z-10 mt-[25px] ">
        <h1
          id="story02"
          className="text-[24px] md:text-[30px] text-white lg:bg-transparent font-alf capitalize text-center w-[80%] lg:w-full mx-auto p-[20px] rounded-md"
        >
          Connect your OKX Wallet to be entered into a daily $250 worth of
          $Molly giveaway!
        </h1>
      </div>
      <div className="w-full z-10 flex flex-row justify-center">
        <div
          id="okx"
          className=" flex flex-col justify-center w-[250px] md:w-[350px] h-[80px] md:h-[100px] mt-[20px] md:mt-[25px] shadow-xl transition duration-1000 ease-in-out "
        >
          <button className="font-alf w-full h-full text-[16px] md:text-[20px] text-[#F89C20] hover:text-[#410e12] transition duration-500 ease-in-out   ">
            CONNECT VIA OKX
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
