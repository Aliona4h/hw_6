import React from "react";
import { Outlet } from "react-router-dom";

const HeroesLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default HeroesLayout;
