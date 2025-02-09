import React from "react";
import { Outlet } from "react-router-dom";

const DeshboardLayout = () => {
  return (
    <div>
      <div>Main Deshboard Layout</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DeshboardLayout;
