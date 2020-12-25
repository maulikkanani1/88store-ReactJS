import React from "react";
import SideBar from "../Container/SideBar";

export default function Container(props) {
  return (
    <div className="hold-transition sidebar-mini layout-fixed">
      <div className="wrapper">
        <SideBar />
        <div className="content-wrapper">
          <div className="content">
            <div className="container-fluid" style={{ padding: "10px" }}>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
