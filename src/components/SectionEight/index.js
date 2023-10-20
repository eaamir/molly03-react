import React from "react";

import mollie from "../../img/mollyie.png";

const SectionEight = () => {
  return (
    <div className="flex flex-col z-10 mx-auto p-[20px] rounded-lg overflow-hidden mt-[25px] ">
      <div className=" w-full z-10 mt-[50px] ">
        <h1
          id="story"
          className="text-[47px] md:text-[50px] text-[#FCDA6C] font-alf uppercase text-center "
        >
          Social media ...
        </h1>
      </div>
      <div className="flex flex-row justify-center w-full mt-[100px] xl:mt-[150px] ">
        <img
          loading="lazy"
          className="w-[175px] "
          src={mollie}
          width={2000}
          height={2000}
          alt="mollyzz"
        />
      </div>
      <div id="header" className="xl:mx-[200px] ">
        <div className=" w-full z-10 mt-[15px] ">
          <h1 className="text-[24px] md:text-[29px] text-white lg:bg-transparent font-alf capitalize text-center md:w-[80%] lg:w-full mx-auto xl:p-[20px] rounded-md">
            Follow Us on <span className="text-[#873016] ">social media</span>{" "}
            and connect with us ...
          </h1>
        </div>
        <hr id="divi" className="w-full mt-[5px] mb-[5px] " />
        <div className="w-full z-10 flex flex-row justify-center">
          <div className="flex flex-row justify-center z-20 mt-[20px] mb-[30px] ">
            <div className="pr-[20px] border-r-2 border-[#ffffff] z-20 hover:scale-[1.1] transition ease-in-out ">
              <a href="#" className="w-fit z-20 ">
                <i
                  className="fa-brands fa-telegram fa-3x"
                  style={{ color: "#873016" }}
                ></i>
              </a>
            </div>
            <div className="pl-[20px] pr-[20px] border-r-2 border-[#ffffff] z-20 hover:scale-[1.1] transition ease-in-out">
              <a href="#" className="w-fit z-20 ">
                <i
                  className="fa-brands fa-square-x-twitter fa-3x"
                  style={{ color: "#873016" }}
                ></i>
              </a>
            </div>
            <div className="pr-[20px] pl-[20px] border-r-2 border-[#ffffff] z-20 hover:scale-[1.1] transition ease-in-out ">
              <a href="#" className="w-fit z-20 ">
                <i
                  className="fa-brands fa-youtube fa-3x"
                  style={{ color: "#873016" }}
                ></i>
              </a>
            </div>
            <div className="pl-[20px]  z-20 hover:scale-[1.1] transition ease-in-out">
              <a href="#" className="w-fit z-20 ">
                <i
                  className="fa-brands fa-facebook fa-3x"
                  style={{ color: "#873016" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionEight;
