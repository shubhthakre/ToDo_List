import React , {useState} from 'react';
import "./App.css"
import MygoalList from './componets/MygoalList';
import Newgoal from "./componets/Newgoal";


const App= ()  =>{
  const title = "ToDo List";

  const mylist = [
    {id:"1",text:"code"}, 
    {id:"2",text:"practice"},
  {id:"3",text:"repeat"}]


  const [mygoals,setmygoals]= useState(mylist)

  

const addnewGoal = (newGoal) =>{
//  setmygoals(mygoals.concat(newGoal));
 setmygoals((prevmygoals)=>{
   return prevmygoals.concat(newGoal); 

 })
}

  return (
    <div className="mygoals">
    <h2>{title} </h2>
    <Newgoal onAddGoal={addnewGoal} />
    
      <MygoalList goals={mygoals} />
     
      <button variant="secondary" class="clear" onClick={()=>setmygoals([])}>clear all</button>
     
    </div>
  )
}

export default App;