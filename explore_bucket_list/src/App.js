import React, {useState, useEffect} from "react";
import './App.css';
import Form from "./components/form";
import BucketList from "./components/bucket_list";

function App() {
   
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] =useState('all');
  const [filteredTodos,setFilteredTodos]= useState([]);

  useEffect(() => {
    filterHandler()
   }, [todos, status])

  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }
  return (
    <div className="App">
      <header>
        <h1> Bucket List </h1>
      </header>
      <p> Life's too short to do nothing. Explore while you can.</p>
      <Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} setStatus={setStatus} />
      <BucketList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
