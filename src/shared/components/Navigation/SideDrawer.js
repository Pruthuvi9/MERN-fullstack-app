import React from "react";
import ReactDOM from "react-dom";

import "./SideDrawer.css";

const SideDrawer = (props) => {
    const content = <aside className="side-drawer">{props.children}</aside>;
    const element = document.getElementById("drawer-hook");

    return ReactDOM.createPortal(content, element);
};

export default SideDrawer;
