import React from "react";
import Chat from "../Chat/Chat";
import ChatOptions from "../ChatOptions/ChatOptions";
import Member from "../Member/Member";
import "./RightBox.scss";

function RightBox() {
  return (
    <div className="rightbox">
      <Member />
      <Chat />
      <ChatOptions />
    </div>
  );
}

export default RightBox;
