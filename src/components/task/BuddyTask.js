import React, { useState, useEffect } from "react";
import "../../style/BuddyTask.css";
import moment from 'moment';
import Alert from "./Alert";
import editIcon from '../../assets/yellow-pill.png';  // Path to the yellow pill image
import panadolImage from '../../assets/panadol.png';  // Path to the panadol image

export const BuddyTask = () => {
  const username = "Janice Rolland";

  const [tasks, setTasks] = useState([
    { id: 1, name: "Janice Rolland", task: "Eat Breakfast", time: "10 AM" },
    { id: 2, name: "Ken Junior", task:"Take Medication" , time: "10:30 AM" },
    { id: 3, name: "Mandy Brooklyn", task: "Login for work", time: "11 AM" },
  ]);

  const [task, setTask] = useState({task:'', time:''});
  const [dateSelected, onDateChange] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertList, setAlertList] = useState(["I am an alert and I can be dismissed!"]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const handleEdit = (id) => {
    const selectedTask = tasks.find(todo => todo.id === id);
    setTask(selectedTask);
    onDateChange(selectedTask.time);
    setIsModalOpen(true);  // Open the modal when the edit icon is clicked
  }

  const handleChange = (ev) => {
    if (!ev.target['validity'].valid) return;
    const dt = ev.target['value'] + ':00Z';
    const time = moment(dt).format("hh:mm");
    setTask({...task, time, dt});
    onDateChange(dt);
  }

  const handleChangeTask = (e) => {
    setTask({...task, task: e.target.value});
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
      const date = dateSelected;
      const newTask = {
        id: task.dt,
        name: username,
        task: task.task,
        time: task.time
      }
      setTasks([...tasks, newTask]);
      setTask('');
      onDateChange('');
    };
  }

  const showAlert = () => {
    setAlertList(["New alert message!"]);
    setAlertVisible(true);
  }

  return (
    <div>
      <Alert color="info" visible={alertVisible} setVisible={setAlertVisible} contents={alertList}/>
      <div className="user-page-container">
        <div className="user-list-container">
          <h2>My Schedule</h2>
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.id} className="task-item">
                <span className="col-3">{task.time}</span>
                <span className="col-6">{task.task}</span>
                <img
                  src={editIcon}
                  alt="Edit"
                  className="edit-icon"
                  onClick={() => handleEdit(task.id)}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="add-task-container">
          <h2>Add Task</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Task</label>
              <input type="text" id="task" name="task" required onChange={handleChangeTask} autoComplete="off"/>
              <input type="datetime-local" required onChange={handleChange} />
            </div>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={() => setIsModalOpen(false)}>&times;</span>
            <div className="modal-body">
              <div className="modal-image-container">
                <img src={panadolImage} alt="Panadol" className="modal-image" />
              </div>
              <div className="modal-description">
                <h3>Description</h3>
                <p>This is a description for the Panadol image.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
