import React from "react";
import { SearchIcon, BellIcon } from "@heroicons/react/outline";

import "./TopBar.scss";
function TopBar() {
  return (
    <div className="topbar">
      <h1 className="heading">✔️ Daily Task</h1>
      <div className="options">
        <div className="option">
          <SearchIcon width="24" />
        </div>
        <div className="option">
          <BellIcon width="24" />
        </div>
        <div className="option_3">
          <img src="https://i.pravatar.cc/30?img=3" alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
