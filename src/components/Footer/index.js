import React from "react";

import evoLogo from "../../img/evo-trans.png";

const Footer = () => {
  return (
    <div className="flex flex-col lg:mt-[25px] pt-[50px] z-20 overflow-hidden bottom-0 left-0 right-0 ">
      <div className="flex flex-row z-10 justify-end pr-[25px] ">
        <a
          className="w-fit h-fit "
          href="https://theevostudio.com"
          target="_black"
        >
          <div className=" flex flex-row align-middle gap-[7px] w-fit pb-[25px] mb-[-15px] pt-[10px] px-[20px] rounded-t-xl shadow z-10 bg-[#ffed76] hover:translate-y-[-10px] ease-in-out duration-500  hover:bg-orange-500  ">
            <p className="font-alf text-[13px] text-black ">Design By</p>
            <img
              className="w-[52px] p-[3px]  "
              src={evoLogo}
              width={1000}
              height={1000}
              alt="evologo"
            />
          </div>
        </a>
      </div>

      <div className="z-10 bg-[#ffed76] py-[10px] flex flex-row justify-center shadow ">
        <p
          id="lor"
          className="text-[15px] font-alf text-[#410e12] text-center w-full "
        >
          desktop publishing software like Aldus PageMaker including versions of
          Lorem Ipsum. desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default Footer;
