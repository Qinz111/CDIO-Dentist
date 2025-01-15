import React from "react";
import "./Content.scss";
import GroupInforUser from "./GroupInforUser/GroupInforUser";

const Content = () => {
  return (
    <div className="content-wrapper">
      <div className="container">
        <div className="content">
          <GroupInforUser />
        </div>
        <div className="content">content</div>
        <div className="content">content</div>
        <div className="content">content</div>
        <div className="content">content</div>
        <div className="content">content</div>
        <div className="content">content</div>
        <div className="content">content</div>
        <div className="content">content</div>
        <div className="content">content</div>
      </div>
    </div>
  );
};

export default Content;
