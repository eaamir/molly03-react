import React from "react";
import coin from "../../img/coinmol.png";
import eth from "../../img/eth.png";
import swp from "../../img/un.png";
import etmol from "../../img/etmol.png";

const SectionFive = () => {
  return (
    <div className=" w-full flex flex-col z-10 ">
      <div className=" w-full z-10 mt-[150px] ">
        <h1
          id="story"
          className="text-[60px] md:text-[50px] text-[#873016] md:text-[#FCDA6C] font-alf uppercase text-center "
        >
          How to Buy ...
        </h1>
      </div>
      <div className="w-full z-10 flex flex-row justify-center mt-[75px]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[35px]">
          <div
            id="header"
            className="w-[310px] h-[400px] p-[25px] flex flex-col justify-center col hover:scale-[1.1] transition ease-in-out duration-1000"
          >
            <img
            loading="lazy"
              className="w-[100px] mx-auto "
              src={coin}
              width={150}
              height={150}
              alt="Logo-coin"
            />
            <h1
              id="tt"
              className="text-center text-[23px] font-alf uppercase text-[#410E12] mt-[25px] "
            >
              1. create wallet
            </h1>
            <p
              id="tt"
              className="mt-[20px] mx-[5px] font-alf text-[19px] text-white text-center leading-relaxed "
            >
              Download and install a pleb friendly wallet like Metamask on your
              browser, or if on mobile from the App Store or Google Play Store.
            </p>
          </div>
          <div
            id="header"
            className="w-[310px] h-[450px] p-[25px] flex flex-col hover:scale-[1.1] transition ease-in-out duration-1000 "
          >
            <img
            loading="lazy"
              className="w-[75px] mx-auto "
              src={eth}
              width={150}
              height={150}
              alt="eth-coin"
            />
            <h1
              id="tt"
              className="text-center text-[23px] font-alf uppercase text-[#410E12] mt-[25px] "
            >
              2. get some eth
            </h1>
            <p
              id="tt"
              className="mt-[20px] mx-[5px] font-alf text-[19px] text-white text-center leading-relaxed "
            >
              Molly lives on the ethereum blockchain so you need eth to buy. You
              can purchase eth inside most pleb friendly wallets or deposit from
              an exchange.
            </p>
          </div>
          <div
            id="header"
            className="w-[310px] h-[400px] p-[25px] flex flex-col hover:scale-[1.1] transition ease-in-out duration-1000 "
          >
            <img
            loading="lazy"
              className="w-[100px] mx-auto "
              src={swp}
              width={150}
              height={150}
              alt="Logo-coin"
            />
            <h1
              id="tt"
              className="text-center text-[23px] font-alf uppercase text-[#410E12] mt-[25px] "
            >
              3. go to uniswap
            </h1>
            <p
              id="tt"
              className="mt-[20px] mx-[5px] font-alf text-[19px] text-white text-center leading-relaxed "
            >
              Go to app.uniswap.org and connect your wallet. Paste the pleb
              contract into the bottom box and click ‘I understand’.
            </p>
          </div>
          <div
            id="header"
            className="w-[310px] h-[450px] p-[25px] flex flex-col hover:scale-[1.1] transition ease-in-out duration-1000 "
          >
            <img
            loading="lazy"
              className="w-[115px] mx-auto "
              src={etmol}
              width={150}
              height={150}
              alt="eth-coin"
            />
            <h1
              id="tt"
              className="text-center text-[23px] font-alf uppercase text-[#410E12] mt-[25px] "
            >
              4. swap eth for molly
            </h1>
            <p
              id="tt"
              className="mt-[20px] mx-[5px] font-alf text-[19px] text-center text-white leading-relaxed "
            >
              Download and install a Molly friendly wallet like Metamask on your
              browser, or if on mobile from the App Store or Google Play Store.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
