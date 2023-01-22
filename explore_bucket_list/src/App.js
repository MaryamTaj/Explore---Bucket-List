import React, {useState} from "react";
import './App.css';
import Form from "./components/form";
import BucketList from "./components/bucket_list";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1> Bucket List </h1>
      </header>
      <p> Life's too short to do nothing. Explore while you can.</p>
      <Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText}/>
      <BucketList />
    </div>
  );
}

export default App;
