import React from "react";
import { MicrophoneIcon, DotsHorizontalIcon } from "@heroicons/react/outline";
import "./ChatOptions.scss";
function ChatOptions() {
  return (
    <div className="chat_options">
      <input
        className="chatbox"
        name="chatbox"
        type="text"
        placeholder="Write here..."
        autoComplete="off"
      />
      <div className="option">
        <MicrophoneIcon width="20" />
      </div>
      <div className="option">
        <DotsHorizontalIcon width="20" />
      </div>
    </div>
  );
}

export default ChatOptions;
