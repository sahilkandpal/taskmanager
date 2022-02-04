import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import "./TaskBox.scss";
function TaskBox({ task, id, index }) {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          className="taskbox"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={provided.draggableProps.style}
        >
          <div className="taskbox_top">
            <div className="emoji">🔥</div>
            <div className="menu">
              <DotsHorizontalIcon width="20" />
            </div>
          </div>
          <div className="taskbox_task">
            <span className="taskbox_task_title">[{task.title}] - </span>
            <span className="taskbox_task_desc">{task.desc}</span>
          </div>
          <div className="taskbox_bottom">
            <div className="date" style={{ backgroundColor: task.dateColor }}>
              Mar 26
            </div>
            <div className="people">
              <img src={`https://i.pravatar.cc/20?img=${index}`} alt="avatar" />
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default TaskBox;
