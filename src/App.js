import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const inputRef = useRef();

  const handleAddTodo = () =>{
    const text = inputRef.current.value;
    const newItem = {completed: false, text};
    setTodos([...todos,newItem]);
    inputRef.current.value = "";
  }
  
  const handleItemDone = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }
  const clearTodos = () => {
    setTodos([]);
  };

 
  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className='todo-container'>
      <ul>
        {todos.map(({text, completed}, index) =>{
          return(<li className={completed ? "done" : ""} key={index} onClick={ () => handleItemDone(index)}>{text}</li>);
        })}
      </ul>
      <input ref={inputRef} placeholder='Enter Item ..' />
      <button onClick={handleAddTodo}>Add</button>
      <button onClick={clearTodos}>Clear</button>
      </div>
    </div>
  );
}

export default App;
