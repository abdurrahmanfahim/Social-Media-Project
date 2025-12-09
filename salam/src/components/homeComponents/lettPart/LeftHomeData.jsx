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

  return (
    <>
      <NavLink
        to={data.to || undefined}
        onClick={() =>
          data.title === "Settings" && setShowSettings(!showSettings)
        }
        className="size-10 2xl:size-auto flex justify-center 2xl:justify-normal items-center 2xl:gap-x-4 lg:mb-5 2xl:mb-7 hover:bg-black 2xl:py-3 2xl:px-6 rounded-full cursor-pointer group transition-all ease-linear duration-100 relative "
      >
        <div className="group-hover:text-white transition-all ease-linear duration-100 ">
          <ItemIcon />
        </div>
        <div className="hidden 2xl:block text-black group-hover:text-white transition-all ease-linear duration-100 ">
          <p className="text-base 3xl:text-lg">{data.title}</p>
        </div>
        <div className="absolute top-16 right-0 lg:left-0 " ref={outSideClick}>
          {showSettings && <SettingsOptions />}
        </div>
      </NavLink>
    </>
  );
};

export default LeftHomeData;
