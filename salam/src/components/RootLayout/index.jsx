import { Outlet } from "react-router-dom";
import LeftPart from "../homeComponents/lettPart";
import Header from "../homeComponents/PostHome/header";
import RightHome from "../homeComponents/rightPart";

const RootLayout = () => {
  return (
    <div className="mx-5 3xl:mx-20 grid grid-cols-1 lg:grid-cols-[70px_1fr] xl:grid-cols-[100px_3fr_1fr] 2xl:grid-cols-[1fr_3fr_1fr] mt-5 xl:mt-10 gap-x-10 font-gilroy">
      <div className="hidden lg:block">
        <LeftPart />
      </div>
      <div className="">
        <div className="">
          <Header />
        </div>
        <Outlet />
      </div>
      <div className="hidden xl:block">
        <RightHome />
      </div>
    </div>
  );
};

export default RootLayout;
