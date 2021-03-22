import React from 'react';

const MygoalList = props => {

   
  

    return (
        <ul className="goal-list">{

            //mapping the existing data
            props.goals.map((goal)=>{
                return <li key={goal.id}>{goal.text}</li>;
            })
        }
      </ul>
    )
}

export default MygoalList;
