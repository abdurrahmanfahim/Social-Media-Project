import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/login";

const LoggedIn = () => {
  const { userInfo } = useSelector((state) => state.registration);

  console.log(userInfo);
  return userInfo ? <Outlet /> : <Login />;
};

export default LoggedIn;
