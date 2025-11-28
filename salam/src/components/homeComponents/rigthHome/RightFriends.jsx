import React from "react";
import { Link } from "react-router-dom";
import TickIcon from "../../../svg/TickIcon";
import CloseIcon from "../../../svg/CloseIcon";
import { useReduceText } from "../../../functions/ReduceText";

const RightFriends = () => {
  const originalName = "Md Fahim Ahmad Tamim";
  const reduceText = useReduceText(originalName, 14);
  console.log(reduceText)
  return (
    <div>
      <div className="flex items-center justify-between mb-10 ">
        <div>
          <h4 className="font-bold text-lg text-black">Friends Request</h4>
        </div>
        <div>
          <Link
            to={"Friends"}
            className="text-base font-medium py-2 px-4 border border-black text-black hover:bg-black hover:text-white rounded-full transition-all ease-linear duration-75 "
          >
            See All
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-x-3 ">
            <div className="size-10 bg-secondary rounded-full "></div>
            <div className="max-w-7/10 ">
              <h5 className="font-bold text-sm text-black leading-none overflow-ellipsis ">
                {reduceText}
              </h5>
              <span className="font-light text-xs text-secondary">
                2 hours ago
              </span>
            </div>
          </div>
          <div className="flex items-center gap-x-2 ">
            <button className="px-3 py-2 border border-red hover:bg-red  hover:text-white rounded-3xl text-red ease-linear duration-50 ">
              <CloseIcon />
            </button>
            <button className="px-3 py-2 border border-green-700 hover:bg-green-700  hover:text-white rounded-3xl text-green-700 ease-linear duration-50 ">
              <TickIcon />
            </button>
          </div>
        </div>

        {/* copy */}
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-x-3 ">
            <div className="size-10 bg-secondary rounded-full "></div>
            <div className="max-w-7/10 ">
              <h5 className="font-bold text-sm text-black leading-none overflow-ellipsis ">
                Rick Show
              </h5>
              <span className="font-light text-xs text-secondary">
                2 hours ago
              </span>
            </div>
          </div>
          <div className="flex items-center gap-x-2 ">
            <button className="px-3 py-2 border border-red hover:bg-red  hover:text-white rounded-3xl text-red ease-linear duration-50 ">
              <CloseIcon />
            </button>
            <button className="px-3 py-2 border border-green-700 hover:bg-green-700  hover:text-white rounded-3xl text-green-700 ease-linear duration-50 ">
              <TickIcon />
            </button>
          </div>
        </div>

        {/* copy end */}
      </div>
    </div>
  );
};

export default RightFriends;
