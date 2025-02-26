import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import "./Consultant.scss";
const Consultant = () => {
return (
<div>
  <div className="consultant">
    <div className="consultant-header">
      <Header />
    </div>

    <div className="consultant-content">
      <Outlet />

    </div>
  </div>

</div>
);
};

export default Consultant;