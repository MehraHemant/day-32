import React from "react";
import { SidebarData } from "./SidebarData";

const SideBar = () => {
  return (
    <div className={`sidebar`}>
      <ul className="sidebarList">
        {SidebarData.map((el, key) => {
          return (
            <li
              key={key}
              className="rowe"
              onClick={() => {
                window.location.pathname = el.link;
              }}
            >
              <div id="icon">{el.icon}</div>
              <div id="title">{el.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
