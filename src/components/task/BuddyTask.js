import React from "react";
import { useState } from "react";
import { AddTask } from "./AddTask";
import { ShowTask } from "./ShowTask";
import "../../style/BuddyTask.css";

export const BuddyTask = () => {
  const [tasklist, setTasklist] = useState([]);
  const [task, setTask] = useState({});
  return (
    <div class="task-container">
      <AddTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
    </div>
  );
};
