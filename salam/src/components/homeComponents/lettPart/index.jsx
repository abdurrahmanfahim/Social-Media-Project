import React from "react";
import LeftProfile from "./LeftProfile";
import LeftHomeData from "./LeftHomeData";
import { leftData } from "./data";

const LeftPart = () => {
  console.log(leftData);
  return (
    <aside>
      <div className="mb-10">
        <LeftProfile />
      </div>
      <div className="mt-10 w-3/4 mx-auto ">
        {leftData.map((data, index) => (
          <LeftHomeData key={data + index} data={data} />
        ))}
      </div>
    </aside>
  );
};

export default LeftPart;
