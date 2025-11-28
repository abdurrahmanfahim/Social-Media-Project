import React, { useRef, useState } from "react";
import Search from "../../../svg/Search";
import SearchBox from "./SearchBox";
import useClickOutSide from "../../../functions/clicks";

const Header = () => {
  const clickRef = useRef(null)
  const [showModal, setShowModal] = useState(false);
  useClickOutSide(clickRef, () => {
    setShowModal(false)
  })
  return (
    <div className="flex justify-between ">
      <div>
        <h4>Feed</h4>
      </div>
      <div className="w-[30%] relative ">
        <div className="flex items-center gap-3 text-secondary cursor-pointer border border-secondary py-2.5 px-4 rounded-full text-base "
        onClick={()=> setShowModal(true)}>
          <div>
            <Search />
          </div>
          <div>
            <input
              className="bg-transparent focus:outline-none  "
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-[365px] z-50 "
        ref={clickRef}>
          {showModal && <SearchBox />}
        </div>
      </div>
    </div>
  );
};

export default Header;
