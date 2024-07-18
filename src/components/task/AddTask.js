import React from 'react'

export const AddTask = ({tasklist,setTasklist,task,setTask}) => {
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(task.id){
            const date =new Date();
            const updateTask=tasklist.map((todo)=>(
                todo.id===task.id?{id:task.id,name:e.target.task.value,time:`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}:todo
            ))

            setTasklist(updateTask);

        }else{

            const date =new Date();
            const newTask={
            id: date.getTime(),
            name:e.target.task.value,
            time:`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}
            setTasklist([...tasklist,newTask]);
            e.target.task.value="";
       
    };
        
    }
  return (
<section className="addTask">

    <form onSubmit={handleSubmit}>

        <input type="text" name="task" value={task.name} onChange={e=>setTask({...task,name:e.target.value})} autoComplete="off" placeholder='add Task'/>
        <button type="submit">Add</button>
    </form>
</section>
)
}
