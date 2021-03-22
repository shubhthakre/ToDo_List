import React , {useState} from 'react';
import "./App.css"
import MygoalList from './componets/MygoalList';
import Newgoal from "./componets/Newgoal";


const App= ()  =>{
  const title = "ToDo List";

  const [mygoals,setmygoals]= useState([
    {id:"1",text:"eat"}, {id:"2",text:"sleep"},
  {id:"3",text:"repeat"}])

const addnewGoal = (newGoal) =>{
//  setmygoals(mygoals.concat(newGoal));
 setmygoals((prevmygoals)=>{
   return prevmygoals.concat(newGoal); 

 })
}

  return (
    <div className="mygoals">
    <h2>{title} </h2>
    <Newgoal onAddGoal={addnewGoal}/>
      <MygoalList goals={mygoals}/>
    </div>
  )
}

export default App;