import React from "react";
import LeftPart from "../homeComponents/lettPart";
import { Outlet } from "react-router-dom";
import Header from "../homeComponents/PostHome/Header";
import RightHome from "../homeComponents/rigthHome";

const RootLayout = () => {
  return (
    <div className="mx-20 grid grid-cols-5 mt-10 gap-x-7 font-gilroy">
      <div className="col-span-1 ">
        <LeftPart />
      </div>
      <div className="col-span-3">
        <div className="">
          <Header />
        </div>
        <Outlet />
      </div>
      <div className="col-span-1">
        <RightHome />
      </div>
    </div>
  );
};

export default RootLayout;
