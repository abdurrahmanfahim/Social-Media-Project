import React from "react";
import { Helmet } from "react-helmet-async";
import LeftPart from "../../components/homeComponents/lettPart";
import PostHome from "../../components/homeComponents/PostHome";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Salam</title>
      </Helmet>
      <PostHome />
    </>
  );
};

export default Home;
