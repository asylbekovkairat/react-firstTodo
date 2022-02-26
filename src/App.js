import React, { useState } from "react";
import "./App.css";
import Input from "./components/input/Input.jsx";
import Button from "./components/button/button.js";
import { Todos } from "./components/todos/Todos.js";
import Changecash from "./components/changeCash/changeCash";
function App() {
  const [inp, setInp] = useState("");
  const [todoList, setTodoList] = useState([ {id:1 , title: "Купить соль", status:false} ]);

  const handleClick = () => {
    if(inp){
      setTodoList([...todoList, { id: Math.random(), title: inp, status:false}]) 
      setInp('')
    }
  }

  const handleDelete = (el) => {
    const newArr = todoList.filter((item) => item.id !== el.id)
    setTodoList(newArr)
  }

  return (
    <div className="App">
      <Input value={inp} change={setInp} />
      <Button click={handleClick} />
      <Todos list={todoList} onDelete={handleDelete}/>
      <Changecash/>
    </div>
  );
}


export default App;


function f (a,b){
  return a + b
}

f(5, 9)