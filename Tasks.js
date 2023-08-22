import {FaEdit, FaTimes} from 'react-icons/fa'


const Tasks = ({task, onDelete, editmember}) => {
  

  return (
    <div className='tasks'>
      <h3>{task.text} {''}    
        <FaEdit  onClick={()=> editmember(task.id) } />
      <FaTimes style={{color:'red', cursor:'pointer'}}
       onClick={()=> onDelete(task.id)}
       />
      </h3>
      <p>{task.work} {' '}
</p>
    </div>
  )
} 

export default Tasks
