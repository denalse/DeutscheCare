// import React from 'react'

// export const AddTask = ({ tasklist, setTasklist, task, setTask, dateSelected, onDateChange }) => {

//     const handleChange = (ev) => {
//         if (!ev.target['validity'].valid) return;
//         const dt = ev.target['value'] + ':00Z';
//         onDateChange(dt);
//     }

//     const handleChangeTask = (e) => {
//         console.log("Here" + e.target.value);
//         setTask(e.target.value);
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (task.id) {
//             const date = dateSelected;
//             const updateTask = tasklist.map((todo) => (
//                 todo.id === task.id ? { id: task.id, name: e.target.task.value, time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}` } : todo
//             ))

//             setTasklist(updateTask);

//         } else {

//             const date = dateSelected;
//             const newTask = {
//                 id: date,
//                 name: e.target.task.value,
//                 time: date
//             }
//             setTasklist([...tasklist, newTask]);
//             setTask('');
//             onDateChange('');
//         };

//     }
//     return (
//         <section className="addTask">

//             <form onSubmit={handleSubmit}>

//                 <input type="text" name="task" value={task.name}
//                     onChange={handleChangeTask}
//                     autoComplete="off" placeholder='add Task'
//                     required={true} />
//                 {/* <DateTimePicker onChange={onDateChange} value={dateSelected}/> */}
//                 {/* <input aria-label="Date and time" type="datetime-local" onChange={onDateChange}/> */}
//                 <input type="datetime-local" required={true}
//                     value={(dateSelected || new Date()).toString().substring(0, 16)}
//                     onChange={handleChange} />
//                 <button type="submit">Add</button>
//             </form>
//         </section>
//     )
// }
