import React, { useState, useEffect } from "react";
import "../../style/UserTask.css";

export const UserTask = () => {
  // var tasks = [
  //   { id: 1, name: "Janice Rolland" },
  //   { id: 2, name: "Ken Junior" },
  //   { id: 3, name: "Mandy Brooklyn" },
  // ];

  const username = "Janice Rolland";

  

  const [tasks, setTasks] = useState([
    { id: 1, name: "Janice Rolland", task: "Eat Breakfast", time: "10 AM" },
    { id: 2, name: "Ken Junior", task:"Dring Water" , time: "10:30 AM" },
    { id: 3, name: "Mandy Brooklyn", task: "Login for work", time: "11 AM" },
  ]);
  const [task, setTask] = useState({});
  useEffect(() => {
    console.log(tasks);
  },[tasks]);
  const [dateSelected, onDateChange] = useState(new Date());
  let [visible, setVisible] = useState(false);
  const [alertList, setAlertList] = useState(["I am an alert and I can be dismissed!"]);

  const handleEdit = (id) => {
    const selectedTask = tasks.find(todo => todo.id === id);
    setTask(selectedTask);
    onDateChange(selectedTask.time);
  }

  const handleAlert = () => {
    setVisible(true);
  }

  const handleChange = (ev) => {
    if (!ev.target['validity'].valid) return;
    const dt = ev.target['value'] + ':00Z';
    onDateChange(dt);
  }

  const handleChangeTask = (e) => {
    setTask(e.target.value);
  }

  const handleSubmit = (props, e) => {
    // e.preventDefault();
    if (props.task.id) {
      const date = dateSelected;
      const updateTask = tasks.map((todo) => (
        todo.id === task.id ? { id: task.id, name: e.target.task.value, time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}` } : todo
      ))

      setTasks(updateTask);

    } else {
      console.log(e);
      const date = dateSelected;
      const newTask = {
        // id: tasks.size+1,
        id: 5,
        name: username,
        task: task.task,
        time: task.date
      }
      console.log(newTask);
      setTasks([...tasks, newTask]);
      setTask('');
      onDateChange('');
      console.log(tasks);
    };

  }

  return (
    <div className="user-page-container">
      <div className="user-list-container">
        <h2>My Schedule</h2>
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className="user-item">
              <span className="left">{task.time}</span>
              {task.task}
            </li>
          ))}
        </ul>
      </div>
      <div className="add-task-container">
        <h2>Add Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="task">Task</label>
            <input type="text" id="task" name="task" required onChange={handleChangeTask}
                    autoComplete="off"/>
            <input type="datetime-local" required={true}
              value={(dateSelected || new Date()).toString().substring(0, 16)}
              onChange={handleChange} />
          </div>
          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  );
};
