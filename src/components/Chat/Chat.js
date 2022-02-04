import React from "react";
import "./Chat.scss";
function Chat() {
  const chatData = [
    { text: "Selamat pagi", user: "xyz" },
    { text: "Paji Mas Piko", user: "abc" },
    { text: "Paji Mas Piko, Langsung saja Ada apa gerangan mas?", user: "def" },
    { text: "Sekuttt", user: "ijk" },
    { text: "Selamat pagi, Mas!", user: "mno" },
  ];
  return (
    <div className="chat">
      <h4 className="chat_heading">Group Chat</h4>
      <div className="chat_content">
        {chatData.map((chat, index) => (
          <div className="content" key={index}>
            <div
              className={`content_top ${
                chat.user === "abc" ? "mycontent_top" : ""
              }`}
            >
              <img
                src={`https://i.pravatar.cc/20?img=${index}`}
                alt="avatar"
                className="avatar"
              ></img>
              <div className="text">{chat.text}</div>
            </div>
            <div
              className={`content_bottom ${
                chat.user === "abc" ? "mycontent_bottom" : ""
              }`}
            >
              <div className="time">08:00 AM</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
