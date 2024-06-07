import React, { useState } from 'react'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'
import Todocontext from  './components/context/Todocontext'
 
const App = () => {

  const [list, setList] = useState([
    { id: 1, todoData: 'todo 1',finished:false },
    { id: 2, todoData: 'todo 2',finished:true },
  ]);
  return (
      <Todocontext.Provider value={[list, setList]} >
        <AddTodo updateList={(todo) => setList([...list, { id: list.length + 1, todoData: todo, finished: false }])} />
        <TodoList />
      </Todocontext.Provider>

  )
}

export default App