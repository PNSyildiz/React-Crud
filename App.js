import Addmember from './components/Addmember';
import Header from './components/Header'
import Task from './components/Task'
import { useState, useEffect } from "react"

function App() {
  
  const [showAddMember, setShowAddMember] = useState(false);

  const [tasks, seTtasks] = useState([])
 

  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      seTtasks (tasksFromServer)
    }
        getTasks()
  },[])

  //fetch tasks
    const fetchTasks =async() =>{
      const res = await fetch('http://localhost:5000/members')
      const data = await res.json()
    
     return data
    }
     
     //fetch tasks
     const fetchTask =async(id) =>{
      const res = await fetch(`http://localhost:5000/members/${id}`)
      const data = await res.json()
    
     return data
    }


// Add Member
const addMember = async (task) =>{
  const res = await fetch('http://localhost:5000/members', {
    method: 'POST',
    headers:{
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
  })

const data = await res.json()

seTtasks([...tasks, data])

  // const id = Math.floor(Math.random()* 1000) +1
  // const newTask = {id, ...task}
  // seTtasks([...tasks, newTask])
}
//Edit member
function editMember(memberId, updatedName) {
  const updatedMembers = tasks.map((member) =>
    member.id === memberId ? { ...member, name: updatedName } : member
  );

  return updatedMembers;
}


//Delete task
const deleteTask = async (id) => {
await fetch(`http://localhost:5000/members'/
${id}`, {
  method: 'DELETE'
})

seTtasks(tasks.filter((task)=> task.id !==id))
}

 
  return (
    <div className="container">
      <Header onAdd={() => setShowAddMember(!showAddMember)} showAdd={showAddMember} />
      {showAddMember && <Addmember onAdd={addMember}/>}
      {tasks.length> 0 ? (  <Task tasks={tasks} onDelete={deleteTask} 
     />):('No tasks to show')}
    </div>
  );
}

export default App;
