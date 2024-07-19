import React, { useState, useEffect } from "react";
import "../../style/UserTask.css";
import moment from 'moment';
import Alert from "./Alert";

export const UserTask = () => {
  
  const username = "Janice Rolland";

  const [tasks, setTasks] = useState([
    { id: 1, name: "Janice Rolland", task: "Eat Breakfast", time: "10 AM" },
    { id: 2, name: "Ken Junior", task:"Dring Water" , time: "10:30 AM" },
    { id: 3, name: "Mandy Brooklyn", task: "Login for work", time: "11 AM" },
  ]);


  const [task, setTask] = useState({task:'', time:''});
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
    const time = moment(dt).format("hh:mm");
    setTask({...task, time, dt});
    onDateChange(dt);
  }

  const handleChangeTask = (e) => {
    const d = moment().format("YYYY-MM-DDThh:mm");
    setTask({...task,task: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      const date = dateSelected;
      const updateTask = tasks.map((todo) => (
        todo.id === task.id ? { id: task.id, name: e.target.task.value, time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}` } : todo
      ))

      setTasks(updateTask);

    } else {
      console.log(e);
      const date = dateSelected;
      const newTask = {
        id: task.dt,
        name: username,
        task: task.task,
        time: task.time
      }
      console.log(newTask);
      setTasks([...tasks, newTask]);
      setTask('');
      onDateChange('');
      console.log(tasks);
    };

  }

  return (
    <div>
    <Alert color="info" visible={visible} setVisible={setVisible} contents={alertList}/>
    <div className="user-page-container">
      <div className="user-list-container">
        <h2>My Schedule</h2>
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className="user-item">
              <span className="col-3">{task.time}</span>
              <span className="col-9">{task.task}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="add-task-container">
        <h2>Add Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label >Task</label>
            <input type="text" id="task" name="task" required onChange={handleChangeTask}
                    autoComplete="off"/>
            <input type="datetime-local" required={true}
              //value={(dateSelected || new Date()).toString().substring(0, 16)}
              onChange={handleChange} />
          </div>
          <button type="submit" >Add Task</button>
        </form>
      </div>
    </div>
    </div>
  );
};
