import React, {useState} from 'react'

import AddTaskForm from './component/AddTaskForm.jsx';
import UpdateForm from './component/UpdateForm.jsx';
import ToDo from './component/ToDo.jsx';
import DateTime from './component/AddDateTime';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  // Tasks (ToDo List) Initial State
  const [todo, setTodo] = useState([]);

  // Temp State
  // newTask will hold new task added
  const [newTask, setNewTask] = useState('');
  //updateData will hold the task that is being edited
  const [updateData, setUpdateData] = useState('');


  // Add Task
  const addTask = () => {
    if(newTask) {
      let num = todo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setTodo([...todo, newEntry]);
      setNewTask('');
    }
  }

  // Delete Task
  const deleteTask = (id) => {
    let newTasks = todo.filter( task => task.id !== id);
    //we're filtering out the array of records with that id
    setTodo(newTasks);
  }

  // Mark task as done or completed
    const markDone = (id) => {
      let newTask = todo.map( task => {
        if(task.id == id){
          return ({ ...task, status: !(task.status) })
        }
        return task;
      })
      setTodo(newTask);
    }

  // Cancel Update
  const cancelTask = () => {
    setUpdateData('');
  }
  
  // Change Task for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  // Update Task
  const updateTask = () => {
    let filterRecords = [...todo].filter( task => task.id !== updateData.id )
    let updatedObject = [...filterRecords, updateData];
    setTodo(updatedObject);
    setUpdateData('');
  }

  const refreshPage = () => {
    window.location.reload(false);
  }
  
  const tickAll = () => {
    let newTask = todo.map( task => {
      return ({ ...task, status: !(task.status) })
    })
    setTodo(newTask); 
  }

  return (
    <div className="container-fluid App">
      <div className='myhead'>
        <DateTime />
        <h1 className='myheading'>ToDo App</h1>
        <button onClick={refreshPage} className='myNewtodo'>+ New List</button>
      </div>
      <br />
      {/* {Update Task} */}
      {updateData && updateData ? (
        <UpdateForm
        updateData={updateData} updateTask={updateTask} changeTask={changeTask} cancelTask={cancelTask}
        />
      ) : (
        <AddTaskForm
        newTask={newTask} setNewTask={setNewTask} addTask ={addTask}
        />
      )}


      <div className='bottomdiv'>
        <span className='mr'>Done with all the tasks?</span>
        <button onClick={tickAll} className='btn btn-success'>Mark All</button>
      </div>

      {/* {Display ToDos} */}

      {todo && todo.length ? '' : 'No Task to Display'}
      
      <ToDo className="mytodo"
      todo={todo} markDone={markDone} setUpdateData={setUpdateData} deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
