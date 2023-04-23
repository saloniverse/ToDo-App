import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
    return(
        <>
        {/* Add Task */}
        <div className="row m">
          <div className='col'>
            <input 
            value={newTask} 
            onChange={ (e) => setNewTask(e.target.value)} 
            className='myinput' />
          </div>
          <div className='col-auto'>
            <button 
            onClick={addTask} 
            className='mybtn'>
            <FontAwesomeIcon icon={faPlus} /></button>
          </div>
        </div>
        <br />
        </>
    )
}

export default AddTaskForm;