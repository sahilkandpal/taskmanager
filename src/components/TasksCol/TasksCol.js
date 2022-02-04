import React from "react";
import TaskBox from "../TaskBox/TaskBox";
import "./TasksCol.scss";
import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";

function TasksCol({ id, colName, tasks }) {
  const colData = useSelector((state) => state.tasksReducer);
  return (
    <div className="taskscol">
      <div className="col_top">
        <div className="col_title">{colName}</div>
        <div className="total_tasks">{colData[id].tasks.length}</div>
      </div>
      <Droppable droppableId={id.toString()}>
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="tasks"
            >
              {tasks.map((task, index) => (
                <TaskBox key={task.id} task={task} id={task.id} index={index} />
              ))}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
}

export default TasksCol;
