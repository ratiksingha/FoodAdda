import React, { useContext, useReducer } from 'react'
import { useState } from 'react';
import { GreetContext } from './Footer';



const Demo = () => {

    const useCont=useContext(GreetContext);
    const reducer=(state,action)=>{
        if(action.type==='increment'){
         return {count:state.count+1}
        }
        else if(action.type==='decrement'){
         return {count:state.count-1}
 
         }
          else{
             return state
          }
     }

    const [state,dispatch]=useReducer(reducer,{count:0})

   

    const handleInc=()=>{
        dispatch({type:"increment"})
    }
    const handleDec=()=>{
        dispatch({type:"decrement"})
    }

 

    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    // });

    // handleInput = (e) => {
    //     //destructuring
    //     const{name,value}=e.target;

    //     //the previous data is not showing in the component  ...formData will store the previous data
    //     //and [name]:value will update the value of the name field
    //     setFormData({...formData,
    //         [name]:value
    //     })
    // }

    // handleSubmit=(e)=>{
    //     console.log("btn clicked");
    //     e.preventDefault();

    // }


  return (
    // <form  onSubmit={handleSubmit}>
    //     <label>Name
    //     <input type='text' name="name" value={formData.name} onChange={(handleInput)}/>
    //     </label>
    //     <label>Email
    //     <input type='email' name="email" value={formData.email} onChange={(handleInput)}/>
    //     </label>
    //     <label>Password
    //     <input type='password' name="password" value={formData.password} onChange={(handleInput)}/>
    //     </label>

    //     <button type='submit'>Submit</button>
       
    // </form>
   
  <div>
    <h2>Developed By: {useCont}</h2>
    <h2>{state.count}</h2>
    <button onClick={handleInc}>+</button>
    <button onClick={handleDec}>-</button>
  </div>
   
  )
}

export default Demo