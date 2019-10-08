import React from 'react';

const userInput = (props) => {
  return(
    <div>
      <h1> User Input </h1>
      <input type="text"
             onChange={props.changed}
             value={props.username} />
    </div>  
  )
};

export default userInput