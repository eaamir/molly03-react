import React, { useEffect, useRef, useState } from "react";
import mollylg from "../../../img/MOLLY.png";

const Header = () => {
  const dropMenu = useRef(null);

  const closeOpenMenu = (e) => {
    if (dropMenu.current && open && !dropMenu.current.contains(e.target)) {
      setOpen(false);
    }
  };

  document.addEventListener("mousedown", closeOpenMenu);

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="flex justify-center mx-[20px]">
      <div id="header" className="w-[940px] h-[75px] flex flex-row mt-[25px] ">
        <div className="basis-1/2 w-[65px] h-[65px] self-center ml-[45px] my-[15px]">
          <img
            src={mollylg}
            width={65}
            height={65}
            alt="logo of molly website"
          />
        </div>
        <div className="basis-1/2 self-center mr-[45px]">
          {windowSize[0] <= 768 ? (
            <div
              className="text-[30px] text-right"
              onClick={() => setOpen(!open)}
              ref={dropMenu}
            >
              <i class="fa-solid fa-bars"></i>
            </div>
          ) : (
            <ul
              id="lst"
              className="flex flex-row  justify-center gap-x-[75px] font-sans uppercase text-[15px]"
            >
              <li className="hover:translate-y-1 transition ease-in-out">
                <a href="/">Telegram</a>
              </li>
              <li className="hover:translate-y-1 transition ease-in-out">
                <a href="/">FaceBook</a>
              </li>
              <li className="hover:translate-y-1 transition ease-in-out">
                <a href="/">Twitter</a>
              </li>
            </ul>
          )}
          {open && (
            <div id="headerDropDown">
              <ul>
                <li>
                  <a href="/">Telegram</a>
                </li>
                <li>
                  <a href="/">FaceBook</a>
                </li>
                <li>
                  <a href="/">Twitter</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
