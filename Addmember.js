import { useState } from 'react'

const Addmember = ({onAdd}) => {
  
const [text, setText ] = useState("")
const [work, setWork ] = useState("")
const [Image, setImage] = useState("")
const onSubmit =(e)=>{
    e.preventDefault()

    if(!text){
        alert('Please add member')
        return
    }else{
      console.log(text)
    }

     onAdd({text, work, Image})
     
     setText('')
    setWork('')
    setImage('')
}



  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>

      <img src={Image} width={"80"} height={"80"} border-radious={"50%"} alt=''
    value={Image} onChange={(e) =>setImage(e.target.value)} />
       
       <label> Member</label>
        <input type='text' placeholder='Add Member' value={text} onChange={(e)=>
        setText(e.target.value)
    }   />
        
      </div>
      <div className='form-control'>
        <label>Work</label>
        <input type='text' placeholder='work' value={work} onChange={(e)=>
        setWork(e.target.value)
        } />

      </div>
      <input type="submit" value= 'Save Member' className='btn-block'/>
    
    </form>
  )
}


// const editmember = ({ member, editmember }) => {
//   const [updatedName, setUpdatedName] = useState(member.name);

//   const handleNameChange = (event) => {
//     setUpdatedName(event.target.value);
//   };

//   const handleUpdateClick = () => {
//     onUpdate(member.id, updatedName);
//   };

//   return (
//     <div>
//       <input type="text" value={updatedName} onChange={handleNameChange} />
//       <button onClick={handleUpdateClick}>Update</button>
//     </div>
//   );
// };




export default Addmember
