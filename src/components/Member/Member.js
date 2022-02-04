import React from "react";
import "./Member.scss";
function Member() {
  return (
    <div className="member">
      <div className="member_header">
        <h4 className="heading">
          Member <span className="count">(25)</span>
        </h4>
        <div className="view">View All</div>
      </div>
      <div className="member_list">
        <img src="https://i.pravatar.cc/30?img=1" alt="avatar" />
        <img src="https://i.pravatar.cc/30?img=2" alt="avatar" />
        <img src="https://i.pravatar.cc/30?img=3" alt="avatar" />
        <img src="https://i.pravatar.cc/30?img=4" alt="avatar" />
        <img src="https://i.pravatar.cc/30?img=5" alt="avatar" />
        <img src="https://i.pravatar.cc/30?img=6" alt="avatar" />
      </div>
    </div>
  );
}

export default Member;
