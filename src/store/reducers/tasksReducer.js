import { v4 as uuidv4 } from "uuid";
import { DIFF_COL, SAME_COL } from "../actionTypes";

const initialState = {
  [uuidv4()]: {
    colName: "Next Up",
    tasks: [
      {
        id: uuidv4(),
        title: "Memoji",
        desc: "Create Prototype Mobile for Get Notification in Principle",
        dateColor: "#FC892F",
      },
      {
        id: uuidv4(),
        title: "OWW",
        desc: "Draw & animate illustration for OWW 4th anniversary",
        dateColor: "#34A479",
      },
      {
        id: uuidv4(),
        title: "Metaco",
        desc: "Create draft design for User Journey earning coin on Apps",
        dateColor: "#34A479",
      },
    ],
  },
  [uuidv4()]: {
    colName: "In Progress",
    tasks: [
      {
        id: uuidv4(),
        title: "Lux",
        desc: "Design Lux Pet Shop Product Page Responsive Website",
        dateColor: "#34A479",
      },
      {
        id: uuidv4(),
        title: "OWW",
        desc: "Learn SVGator for Creating OWW Animation Part 2",
        dateColor: "#FC892F",
      },
    ],
  },
  [uuidv4()]: {
    colName: "Complete",
    tasks: [
      {
        id: uuidv4(),
        title: "OWW",
        desc: "Learn SVGator for Creating OWW Animation Part 1",
        dateColor: "#DADADA",
      },
      {
        id: uuidv4(),
        title: "Metaco",
        desc: "Benchmark Mobile Legend on Earning Diamond",
        dateColor: "#FC3637",
      },
    ],
  },
};

const taskReducer = (state = initialState, action) => {
  const source = action.payload?.source;
  const destination = action.payload?.destination;
  switch (action.type) {
    case DIFF_COL:
      const srcCol = state[source.droppableId];
      const destCol = state[destination.droppableId];
      const srcTasks = srcCol.tasks;
      const destTasks = destCol.tasks;
      const [removedTask] = srcTasks.splice(source.index, 1);
      destTasks.splice(destination.index, 0, removedTask);
      const newState = {
        ...state,
        [source.droppableId]: { ...srcCol, tasks: srcTasks },
        [destination.droppableId]: { ...destCol, tasks: destTasks },
      };
      return newState;

    case SAME_COL:
      const col = state[source.droppableId];
      const tasks = col.tasks;
      const [removedTask2] = tasks.splice(source.index, 1);
      tasks.splice(destination.index, 0, removedTask2);
      const newState2 = {
        ...state,
        [source.droppableId]: { ...col, tasks },
      };
      return newState2;
    default:
      return state;
  }
};

export default taskReducer;
