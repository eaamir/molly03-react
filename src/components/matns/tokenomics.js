import React from "react";

const Tokenomics = () => {
  return (
    <div className=" py-[25px] flex flex-col justify-center items-center px-[50px] gap-[25px] ">
      <h1 className="font-alf text-[27px] uppercase ">Tokenomics</h1>
      <hr id="divi" className="w-full " />
      <p className="text-[20px] text-center ">
        In the lucrative world of rice farming, you reap what you sow. That’s
        why all $FLICE holders will have the ability to stake their $FLICE to
        COMPOUND THEIR GRAINS! This mechanism is currently under development.
      </p>
      <div className="border-2 w-full grid-cols-3 grid ">
        <h2 className="border-2 col-span-1 p-[10px] w-full text-left text-[17px] break-all">
          lorem impusaasf
        </h2>
        <span className="border-2 col-span-2 flex gap-[25px] p-[10px] w-full text-left text-[17px]">
          <h2 className="underline underline-offset-4 break-all">
            06350fsdf00654fd3f54g0f32g065dfgdfg6540
          </h2>
          <button
            className=""
            onClick={() =>
              navigator.clipboard.writeText(
                "06350fsdf00654fd3f54g0f32g065dfgdfg6540"
              ) && alert("Copied To Clipboard")
            }
          >
            <i
              class="fa-regular fa-copy fa-lg "
              style={{ color: "#ffffff" }}
            ></i>
          </button>
        </span>{" "}
        <h2 className="border-2 col-span-1 p-[10px] w-full text-left text-[17px] break-all ">
          lorem impusaasf
        </h2>
        <span className="border-2 col-span-2 flex gap-[25px] p-[10px] w-full text-left text-[17px]">
          <h2 className="underline underline-offset-4 break-all">
            06350fsdf00654fd3f54g0f32g065dfgdfg6540
          </h2>
          <button
            className=""
            onClick={() =>
              navigator.clipboard.writeText(
                "06350fsdf00654fd3f54g0f32g065dfgdfg6540"
              ) && alert("Copied To Clipboard")
            }
          >
            <i
              class="fa-regular fa-copy fa-lg "
              style={{ color: "#ffffff" }}
            ></i>
          </button>
        </span>{" "}
        <h2 className=" bg-slate-600 border-2 col-span-1 p-[10px] w-full text-left text-[17px] break-all">
          lorem impusaasf
        </h2>
        <span className=" bg-slate-600 border-2 col-span-2 flex gap-[25px] p-[10px] w-full text-left text-[17px]">
          <h2 className="underline underline-offset-4 break-all">
            06350fsdf00654fd3f54g0f32g065dfgdfg6540
          </h2>
          <button
            className=""
            onClick={() =>
              navigator.clipboard.writeText(
                "06350fsdf00654fd3f54g0f32g065dfgdfg6540"
              ) && alert("Copied To Clipboard")
            }
          >
            <i
              class="fa-regular fa-copy fa-lg "
              style={{ color: "#ffffff" }}
            ></i>
          </button>
        </span>{" "}
        <h2 className="border-2 col-span-1 p-[10px] w-full text-left text-[17px] break-all ">
          lorem impusaasf
        </h2>
        <span className="border-2 col-span-2 flex gap-[25px] p-[10px] w-full text-left text-[17px]">
          <h2 className="break-all">
            TokenomicsTokenomicsTokenomicsTokenomicsTokenomics
          </h2>
        </span>
      </div>
      <p className="text-[20px] text-center ">
        In the lucrative world of rice farming, you reap what you sow. That’s
        why all $FLICE holders will have the ability to stake their $FLICE to
        COMPOUND THEIR GRAINS! This mechanism is currently under development.
      </p>
    </div>
  );
};

export default Tokenomics;
