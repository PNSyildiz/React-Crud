import Tasks from "./Tasks"

const Task = ({tasks, onDelete, editmember}) => {
  return (
    <>
      {tasks.map((task)=> (
      <Tasks key={task.id} task={task}
      onDelete={onDelete} editmember={editmember}/>))}
    </>
  )
}

export default Task
