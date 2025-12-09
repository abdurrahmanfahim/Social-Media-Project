import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useClickOutSide from "../../../../functions/clicks";
import Search from "../../../../svg/Search";
import { leftData } from "../../lettPart/data";
import SearchBox from "./SearchBox";
import LeftHomeData from "../../lettPart/LeftHomeData";

const Header = () => {
  const clickRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  useClickOutSide(clickRef, () => {
    setShowModal(false);
  });
  return (
    <div className="flex justify-between ">
      <div className="w-auto md:w-2/10 flex items-center">
        <h4 className="text-2xl text-black font-bold hidden lg:block ">Feed</h4>
        <div className="lg:hidden  size-14 rounded-full bg-cyan-100 "></div>
      </div>

      <div className="w-auto md:w-1/2 lg:hidden flex shrink items-center sm:gap-x-10 justify-center  ">
        {leftData.map((data, index) => (
          <LeftHomeData key={index} data={data} />
        ))}
      </div>

      <div className="w-auto md:w-2/10 lg:w-3/10 sm:relative flex items-center justify-end ">
        <div
          className="flex size-10 lg:w-full lg:h-auto lg:min-w-56 max-w-[312px] items-center  gap-x-3 justify-center lg:justify-start text-secondary cursor-pointer border border-secondary lg:py-2.5 lg:px-4 rounded-full text-base "
          onClick={() => setShowModal(true)}
        >
          <div>
            <Search />
          </div>
          <div className="hidden lg:block ">
            <input
              className="w-full bg-transparent focus:outline-none  "
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div
          className="absolute top-0 sm:-top-7 sm:right-0 sm:translate-x-0 right-1/2 translate-x-1/2 w-[365px] z-50 "
          ref={clickRef}
        >
          {showModal && <SearchBox />}
        </div>
      </div>
    </div>
  );
};

export default Header;
