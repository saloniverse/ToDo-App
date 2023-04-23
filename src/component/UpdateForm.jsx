import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons';

const UpdateForm = ({ updateData, updateTask, changeTask, cancelTask}) => {
    return(
        <>
        <div className='row'>
          <div className='col'>
            <input className='myinput'
              value = {updateData && updateData.title}
              onChange = { (e) => changeTask(e)}
            />
          </div>
          <div className='col-auto'>
            <button onClick={updateTask} 
            className='mybtn mr'><FontAwesomeIcon icon={faPenToSquare} /></button>
            <button 
            onClick={cancelTask} 
            className='mybtn'><FontAwesomeIcon icon={faXmark} /></button>
          </div>
        </div>
        <br/>
        </>
    )
}

export default UpdateForm;