import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCircleCheck, faPen, faTrashCan 
} from '@fortawesome/free-solid-svg-icons';

const ToDo = ({ todo, markDone, setUpdateData, deleteTask}) => {
    return(
        <>
        {todo && todo
        .sort( (a, b) => a.id > b.id ? 1 : -1)
        .map( (task, index) => {
          return(
            <React.Fragment key={task.id}>
              <div className='col taskBg'>
                <div className={task.status ? 'done' : ''}>
                  <span className='taskNumber'>{index + 1}</span>
                  <span className='taskText'>{task.title}</span>
                </div>
                <div className='iconsWrap'>
                  <span className="tick" title='Completed / Not Completed' onClick={ (e) => markDone(task.id)}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>

                  {task.status ? null : (
                    <span className="edit" title='Edit' onClick={() => setUpdateData({
                      id: task.id,
                      title: task.title,
                      status: task.status ? true : false
                    })}>
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                  )}
                  {/* onClick of the edit icon whole record will be populated */}
                  <span className="trash" title='Delete' onClick={() => deleteTask(task.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>                  
                </div>
              </div>
            </React.Fragment>
          )
        })}
        </>
    )
}

export default ToDo;