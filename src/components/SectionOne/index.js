import React from "react";

const SectionOne = () => {
  return (
    <div className=" mt-[25px] overflow-hidden " load>
      <div className="flex flex-row justify-center ">
        <h1 className="font-alf text-[40px] capitalize text-white ">
          Hello i'm molly
        </h1>
      </div>
      <div className="flex flex-row justify-center ">
        <p className="font-sans text-[13px] capitalize text-white ">
          Let's have some fun
        </p>
      </div>
      <div className="sm:flex sm:flex-row sm:justify-center z-[1] sm:gap-[40px] mt-[400px] xl:mt-[350px]  mx-auto w-fit">
        <div
          id="btn1"
          className="w-[170px] h-[60px] z-20 shadow mb-[20px] sm:mb-0 hover:translate-y-1 duration-700  "
        >
          <a
            href="#"
            id="btntxt"
            type="button"
            className=" w-full h-full font-alf text-center text-[18px] uppercase z-20 flex flex-col justify-center"
          >
            Explore
          </a>
        </div>
        <div
          id="btn2"
          className="w-[170px] h-[60px] z-20 shadow hover:translate-y-1 duration-700 "
        >
          <a
            href="#"
            id="btntxt2"
            type="button"
            className=" w-full h-full flex flex-col justify-center font-alf text-center text-[18px] uppercase z-20 "
          >
            Buy Molly
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-center z-20 mt-[30px]">
        <div className="pr-[20px] border-r-2 z-20 hover:scale-[1.1] transition ease-in-out ">
          <a href="#" className="w-fit z-20 ">
            <i
              className="fa-brands fa-telegram fa-3x"
              style={{ color: "#ffffff" }}
            ></i>
          </a>
        </div>
        <div className="pl-[20px] z-20 hover:scale-[1.1] transition ease-in-out">
          <a href="#" className="w-fit z-20 ">
            <i
              className="fa-brands fa-square-x-twitter fa-3x"
              style={{ color: "#ffffff" }}
            ></i>
          </a>
        </div>
      </div>
      <div className="z-10 bg-[#ffbf70] py-[10px] flex flex-row justify-center shadow mt-[15px] md:mt-[45px]">
        <p
          id="lor"
          className="text-[13px] font-alf text-[#410e12] text-center w-full"
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

export default SectionOne;
