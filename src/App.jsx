import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Users from './Users'
import Friends from './friends'
function App() {
  
function handleClick(){
  alert('button click')
}
const handleClick2 = () =>{
  alert('tore click korse toi 2 number sala')
}
const addToFive = (num) =>{
  alert(num +5)
}
  return (
    <>
      
      <h3>React Core Concepts 2 </h3>
      <Friends></Friends>
      <Users></Users>


      <Counter></Counter>
     <button onClick={handleClick}>Click Me</button>
     <button onClick={handleClick2}> Click 2</button>
     <button onClick={() =>{alert('click 3 hoise')}}> Click 3</button>
     {/* vejaila jinis */}
     <button onClick={ () => addToFive(3)}> click 4</button>
        
    
    </>
  )
}

export default App
