import React from "react";
import TasksCol from "../TasksCol/TasksCol";
import TopBar from "../TopBar/TopBar";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./MainSection.scss";
import { ModifyDiffCol, ModifySameCol } from "../../store/actions";

function MainSection() {
  let colsData = useSelector((state) => state.tasksReducer);
  const dispatch = useDispatch();

  const OnDragEnd = ({ source, destination }) => {
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }
    if (source.droppableId !== destination.droppableId) {
      dispatch(ModifyDiffCol({ source, destination }));
    } else if (source.droppableId === destination.droppableId) {
      dispatch(ModifySameCol({ source, destination }));
    }
  };

  return (
    <main className="main_section">
      <TopBar />
      <div className="info">
        Click <span className="new">+ New</span> To create new list and wait for
        project manager card.
        <br />
        Don't Create a card by yourself to manage a good colaboration.
      </div>
      <div className="taskscols">
        <DragDropContext onDragEnd={(result) => OnDragEnd(result)}>
          {Object.entries(colsData).map(([colId, colData]) => (
            <TasksCol
              key={colId}
              id={colId}
              colName={colData.colName}
              tasks={colData.tasks}
            />
          ))}
        </DragDropContext>
      </div>
    </main>
  );
}

export default MainSection;
