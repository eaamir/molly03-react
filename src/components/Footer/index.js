import React from "react";

import evoLogo from "../../img/evo-trans.png";

const Footer = () => {
  return (
    <div className="flex flex-col pt-[50px] z-20 overflow-hidden bottom-0 left-0 right-0 ">
      <div className="flex flex-row z-10 justify-end pr-[25px] ">
        <a
          className="w-fit h-fit "
          href="https://theevostudio.com"
          target="_black"
        >
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
