import React from "react";
import RightFriends from "./RightFriends";
import Stories from "./stories";

const RightHome = () => {
  return (
    <div className="w-full max-w-xs">
      <div>
      <RightFriends />
      </div>
      <div className="mt-10">
        <Stories />
      </div>
    </div>
  );
};

export default RightHome;
