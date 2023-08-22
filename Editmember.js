import React, { useState } from 'react';

const UpdateMember = ({ member, editmember }) => {
  const [updatedName, setUpdatedName] = useState(member.name);

  const handleNameChange = (event) => {
    setUpdatedName(event.target.value);
  };
  const handleWorkChange = (event) => {
    setUpdatedName(event.target.value);
  };

  const handleUpdateClick = () => {
    
    editmember(member.id, updatedName);
  };

  return (
    <div>
        <img src={Image} width={"80"} height={"80"} fa-img alt=''
    value={Image} onChange={(e) =>setImage(e.target.value)} />
      <input type="text" value={updatedName} onChange={handleNameChange} /> 
      <input type="text" value={updatedWork} onChange={handleWorkChange} />
      <button onClick={handleUpdateClick}>Update</button>
    </div>
  );
};

export default UpdateMember;
