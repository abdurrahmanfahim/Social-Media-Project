import React, { useEffect, useRef, useState } from "react";
import Search from "../../../svg/Search";

const SearchBox = () => {
  const [iconVisible, setIconVisible] = useState(true);

  const inputBox = useRef(null);
  useEffect(() => {
    inputBox.current.focus();
  }, []);

  return (
    <div className="p-7 box-border min-h-[400px] max-h-[70vh] bg-white shadow-md rounded-lg ">
      <div
        className="flex items-center gap-3 text-secondary cursor-pointer border border-secondary w py-2.5 px-4 rounded-full text-base "
        onClick={() => inputBox.current.focus()}
      >
        {iconVisible && (
          <div>
            <Search />
          </div>
        )}
        <div className="">
          <input
            onFocus={() => setIconVisible(false)}
            onBlur={() => setIconVisible(true)}
            ref={inputBox}
            className="bg-transparent focus:outline-none  "
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="mt-4">
        <h6 className="font-semibold text-base  text-black  ">Recent Searches</h6>
      </div>
    </div>
  );
};

export default SearchBox;
