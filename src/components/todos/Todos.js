import { useState } from "react";
import css from "./Todos.module.css"


export const Todos = (props) => {
  
  return (
    <ul>
      {
        props.list.map((item)=> {
          return <TodoItem value={item} onDelete={props.onDelete} onDone={props.onDone}/> 
        })
      }
    </ul>
  );
};

export const TodoItem = (props) => {
  return (
    <li className={css.item} >
      <button onClick={()=> props.onDelete(props.value)}>del</button>
      {" "}
      { props.value.status ? null : <button onClick={()=> props.onDone(props.value.status)}>Done</button>}
      {" "}
      {props.value.title}
    </li>
  )
}

function Test() {
  return <div>Test</div>
}

export default Test;

