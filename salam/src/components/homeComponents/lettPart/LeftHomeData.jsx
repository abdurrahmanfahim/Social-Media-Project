import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import SettingsOptions from "./SettingsOptions";
import useClickOutSide from "../../../functions/clicks";

const LeftHomeData = ({ data }) => {
  const [showSettings, setShowSettings] = useState(false);
  const outSideClick = useRef(null);
  useClickOutSide(outSideClick, () => {
    setShowSettings(false);
  });

  if (!data || !data.icon) {
    return null;
  }

  const ItemIcon = data.icon;
  const settingSeparation = data.title === "Settings" && (
    <>
      <div className="relative">
        <div
          className="flex items-center gap-x-4 mb-4 hover:bg-black py-3 px-6 rounded-full cursor-pointer group transition-all ease-linear duration-100  "
          onClick={() => setShowSettings(!showSettings)}
        >
          <div className="group-hover:text-white transition-all ease-linear duration-100 ">
            <span>
              <ItemIcon />
            </span>
          </div>
          <div className="text-black group-hover:text-white transition-all ease-linear duration-100 ">
            <p className="text-lg">{data.title}</p>
          </div>
        </div>
        <div className="absolute top-16 left-0 " ref={outSideClick}>
          {showSettings && <SettingsOptions />}
        </div>
      </div>
    </>
  );

  return (
    <>
      {settingSeparation ? (
        settingSeparation
      ) : (
        <NavLink
          to={data.to}
          className="flex items-center gap-x-4 mb-4 hover:bg-black py-3 px-6 rounded-full cursor-pointer group transition-all ease-linear duration-100  "
        >
          <div className="group-hover:text-white transition-all ease-linear duration-100 ">
            <span>
              <ItemIcon />
            </span>
          </div>
          <div className="text-black group-hover:text-white transition-all ease-linear duration-100 ">
            <p className="text-lg">{data.title}</p>
          </div>
        </NavLink>
      )}
    </>
  );
};

export default LeftHomeData;
