import React from "react";
// import { useState } from "react";
// import { AddTask } from "./AddTask";
// import { ShowTask } from "./ShowTask";
import "../../style/BuddyTask.css";

export const BuddyTask = () => {
  const users = [
    { id: 1, name: "Janice Rolland", tasks: ['12:00pm: Eat Lunch', '1:00pm: Eat Medication']  },
    { id: 2, name: "Ken Junior", tasks: ['10:00am: Go to Work', '10:30am: Scrum Meeting'] },
  ];

  return (
    <div className="buddy-page-container">
      <div className="user-list-container">
        <h2>Users You Are Buddy With</h2>
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id} className="user-item">
              <h3>{user.name}</h3>
              <ul className="task-list">
                {user.tasks.map((task, index) => (
                  <li key={index} className="task-item">{task}</li>
                ))}
              </ul>
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
