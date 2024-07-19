
// import React from 'react';
// import { useState } from "react";
// import { AddTask } from "./AddTask";
// import { ShowTask } from "./ShowTask";
// import Alert from "./Alert";
// import {Button} from "reactstrap";

// export const Task = () => {

//   const [tasklist, setTasklist] = useState([]);
//   const [task, setTask] = useState({});
//   const [dateSelected, onDateChange] = useState(new Date());
//   let [visible, setVisible] = useState(false);
//   const [alertList, setAlertList] = useState(["I am an alert and I can be dismissed!"]);

// const handleEdit = (id) => {
//     const selectedTask = tasklist.find(todo => todo.id === id);
//     setTask(selectedTask);
//     onDateChange(selectedTask.time);
// }

// const handleAlert = () => {
//   console.log("Inside alert");
//   setVisible(true);
// }


// return (
//     <div>
//         <Alert color="info" visible={visible} setVisible={setVisible} contents={alertList}/>
//         <Button color="primary" onClick={handleAlert}>Alert</Button>
//         <AddTask
//         tasklist={tasklist}
//         setTasklist={setTasklist}
//         task={task}
//         setTask={setTask}
//         dateSelected ={dateSelected}
//         onDateChange ={onDateChange}
//         />
//         <ShowTask
//         tasklist={tasklist}
//         setTasklist={setTasklist}
//         handleEdit={handleEdit}
//         />
//         </div>);
// }