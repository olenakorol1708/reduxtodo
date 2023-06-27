
import './App.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useState } from 'react';
import { addTask, doEdit, doImportant } from './redux/reducers/tasks';
import { deleteTask } from './redux/reducers/tasks';
import { doFinished } from './redux/reducers/tasks';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const [task,setTask] =  useState();
  const todos = useSelector((store)=> store.tasks.todos)
  return (
    <div className="App">
      <div>
      <input value = {task} onChange = {(e)=>setTask(e.target.value)}/>
      
      <button type = 'button'  onClick = {()=>{
          dispatch(addTask(task));
        setTask('')
        }
        } >Add</button>
     </div>
      
<ul>
 {todos.map((item)=>(
  <li key = {item.id} style = {{margin:'20px 0', color: item.isImportant ? 'red':'',
 textDecoration:  item.isDone ? 'line-through':''}}>{item.title}
 <button style = {{marginLeft:'0px 40px'}} type = "button" onClick = {()=>dispatch(deleteTask(item.id))}>Delete</button>
 <button style = {{marginLeft:'0px 40px'}} type = 'button' onClick = {()=>dispatch(doImportant(item.id))}>Important</button>
 <button style = {{marginLeft:'0px 40px'}} type = 'button' onClick = {()=>dispatch(doFinished(item.id))}>Finished</button>

 <button style = {{marginLeft:'0px 40px'}} type = 'button' onClick = {()=>dispatch(doEdit(item.id))}>Edit</button>

 </li>
 ))}
</ul>
<div>
  <input/>
  <button>Search</button>
</div>
    </div>
  );
}

export default App;
