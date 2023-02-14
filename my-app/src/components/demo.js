import React from 'react'
import MissedGoal from './MissedGoal';
import MadeGoal from './madeGoal';

const Demo = (props) => {

  

    const bool=false;

    if(bool){
        return <MadeGoal/>;
    }
  return <MissedGoal/>;


    // <button onClick={()=>handleClick(10,50)}>Button</button>
    // </div>


   
  
}

export default Demo;