import React, {useEffect, useState} from "react";
import "./App.css";
import Input from "./components/input/Input.jsx";
import Button from "./components/button/button.js";
import { Todos } from "./components/todos/Todos.js";
import putin from "./img/putin.jpg"

const Plus = (props) => { // props = {a: 5, b: 15}
  return (
    <div>
      {props.a + props.b}
    </div>
  )
}  

const GetUser = (props) =>  {
  return (
    <div>
      Меня зовут dsf {props.name} и мне {props.age}лет 
      <br />
      <img width={150} src={props.img} alt="User" />
    </div>
  )
} 



function App() {
  const [state, setState] = useState("normal");


  console.log(state);
  const getFood = () => {
    if(state === "normal") {
      setState("good")
    } else  if(state === "good"){
      setState("excellent")
    } else if(state === "excellent") {
      setState("empty")
    } else {
      setState("normal")
    }
  }

  return (
    <div className="App">
      <button onClick={getFood}>Кушать сендвич</button>
      <div className="test">Hello from App</div>
      <Input />
      <Button />
      <Todos />
      <Plus a={5} b={18} />  {/* Plus({a: 5, b: 18})  */}
      <GetUser name="Amanbek" age="45" img={putin} />
    </div>
  );
}


export default App;
