import React from "react";
import "../../style/UserTask.css";

export const UserTask = () => {
  var tasks = [
    { id: 1, name: "Janice Rolland" },
    { id: 2, name: "Ken Junior" },
    { id: 3, name: "Mandy Brooklyn" },
  ];

  return (
    <div className="user-page-container">
      <div className="user-list-container">
        <h2>My Schedule</h2>
        <ul className="user-list">
          {tasks.map((task) => (
            <li key={task.id} className="user-item">
              {task.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="add-task-container">
        <h2>Add Task</h2>
        <form>
          <div className="form-group">
            <label htmlFor="task">Task</label>
            <input type="text" id="task" name="task" required />
          </div>
          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  );
};
