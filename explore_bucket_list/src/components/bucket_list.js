import React from "react";
import Bucket from "./bucket";

function BucketList(props){
    
    return (
      
        <div className="todo-container">
            <ul className="todo-list">
                {props.filteredTodos.map(todo => (
                    <Bucket text={todo.text} key={todo.id} setTodos={props.setTodos} todos={props.todos} todo={todo}/>
                ))}
            </ul>
        </div>
    );
};

export default BucketList;