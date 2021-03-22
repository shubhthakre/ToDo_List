import React ,{useState} from 'react';

const Newgoal =props=> {

    const [userInput,setuserInput]=useState("");


    const Gaolhandler = event =>{

        event.preventDefault();


        const newGoal ={
            id: Math.random().toString(),
            text: userInput
        }

        setuserInput('');
        props.onAddGoal(newGoal);


    }

    const textChange = event =>{
        setuserInput(event.target.value);
    };



    return (
        <form className="goal" onSubmit={Gaolhandler}>
        <input className="input" type="text" value ={userInput } onChange={textChange}/>
            <button type ="submit">Add Goal</button>
        
    </form>
    )
    
}

export default Newgoal;