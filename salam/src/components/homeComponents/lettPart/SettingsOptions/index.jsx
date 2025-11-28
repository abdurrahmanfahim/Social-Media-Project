import { useState } from "react";
import LogOutIcon from "../../../../svg/LogOutIcon";
import MoonIcon from "../../../../svg/MoonIcon";
import Themes from "./Themes";

const SettingsOptions = () => {
  const [visible, setVisible] = useState(false);

  if (visible) {
    return <Themes setVisible={setVisible} />;
  }
  return (
    <div className="w-[300px] bg-white border border-gray-100 shadow-sm rounded-lg p-5">
      <ul className="space-y-1">
        <li
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group"
          onClick={() => setVisible(!visible)}
        >
          <div className="size-10 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
            <MoonIcon />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">
              Display & Accessability
            </h4>
          </div>
        </li>
        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group">
          <div className="size-10 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
            <LogOutIcon />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">
              LogOut
            </h4>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SettingsOptions;
