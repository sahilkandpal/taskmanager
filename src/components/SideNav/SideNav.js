import React from "react";
import rightarrow from "../../svg/right-arrow.svg";
import "./SideNav.scss";
import {
  ChartSquareBarIcon,
  CogIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import { TrendingUpIcon } from "@heroicons/react/solid";

function SideNav() {
  let categories = [
    "âï¸Daily Task",
    "ð¤ Meetings Summary",
    "ð Resources",
    "ð Availability",
    "ð All projects",
    "ð¥ Archive",
    "ð§  Brainstorming",
  ];
  return (
    <aside className="sidenav">
      <div className="logo">
        <img
          src="https://owwstudio.com/wp-content/themes/owwstudio-v3/images/logo.svg"
          alt="logo"
        />
        <h4>OWW Studio</h4>
      </div>
      <div className="options">
        <div className="navlink">
          <ChartSquareBarIcon width="24" />
          <span>Dashboard</span>
        </div>
        <div className="navlink">
          <CogIcon width="24" />
          <span>Settings</span>
        </div>
        <div className="navlink">
          <TrendingUpIcon width="24" />
          <span>All Activity</span>
        </div>
      </div>
      <div className="categories">
        {categories.map((category, index) => (
          <div
            className="category"
            key={index}
            style={{ backgroundColor: index === 0 ? "#fff" : null }}
          >
            <img src={rightarrow} className="right_arrow" alt="" />
            {category}
          </div>
        ))}
      </div>
      <div className="add_project_btn">
        <PlusIcon width="24" />
        <span>New Project</span>
      </div>
    </aside>
  );
}

export default SideNav;
