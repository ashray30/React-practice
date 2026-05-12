import { useState } from "react";
import {v4 as uuidv4} from "uuid";
const TodoApp = () => {
    const [task, setTask] = useState([{id: uuidv4(), task: "go to gym", isCompleted: false}]);
    const [newTask, setNewTask] = useState("");

    let TaskCompelet = (id) => {
    const updatedTask = task.map((item) => {
        if (item.id === id) {
            return {
                ...item,
                isCompleted: !item.isCompleted
            };
        }

        return item;
    });

    setTask(updatedTask);
}

    return(
        <div>
            <h1>Todo App</h1>
            <input type = "text" 
            placeholder="Enter a task" 
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}  
            />
            &nbsp;
            <button onClick={() =>
                                    { 
                                        setTask([...task, {id: uuidv4(), task: newTask, isCompleted: false}]);
                                        setNewTask("")
                                    }}  >
                Add Task</button>
                <br /><br /> <br />
                <hr />
                <div>                                                  
                    <h3>Task List</h3>
                <ul>
                    {task.map((t, index) => (
                        <li key={t.id}>
                            <span style={{ textDecoration: t.isCompleted ? 'line-through' : 'none' }}>
                                {t.task}
                            </span>
                            &nbsp;
                            <button onClick={() => {
                                const updatedTask = task.filter((item) => item.id !== t.id);
                                setTask(updatedTask);
                            }}>Delete</button>
                                &nbsp;
                            {/* <button onClick = {()=>{
                                const updatedTask = task.map((item) => {
                                    if(item.id === t.id){
                                        return {...item, isCompleted: true};
                                    }
                                    return item;
                                });
                                setTask(updatedTask);
                            }}>Mark as Complete</button>
                                                       
                            <button onClick = {()=>{
                                const updatedTask = task.map((item) => {
                                    if(item.id === t.id){
                                        return {...item, isCompleted: false};
                                    }
                                    return item;
                                });
                                setTask(updatedTask);
                            }}>Mark as Incomplete</button> */}

                            <button onClick={() => TaskCompelet(t.id)}>{t.isCompleted ? 'Mark as Incomplete' : 'Mark as Complete'}</button>
                        </li>
                    ))}
                </ul>             

                </div>
                
        </div>
    )
}
export default TodoApp;