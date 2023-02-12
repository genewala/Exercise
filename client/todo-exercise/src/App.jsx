
import React from 'react';
import './App.css'
import ToDo from './Components/Todo/ToDo';

function App() {
  const todo = [
    {
        id: "1",
        text: "Exercise",
        
     },
     {
        id: "2",
        text: "Exercise2",
        
     }
  
];
  return (
    <div>

<ToDo />
      
      {todo.map((item) =>
      <div key={item.id} className="todo-item">
      {item.text}
      </div>
      )}
      
      

      <div className='todo-item'>  
      Exercise
      </div>
    </div>
  );
};

export default App
