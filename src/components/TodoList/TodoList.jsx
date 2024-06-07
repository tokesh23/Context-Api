import React, { useContext } from 'react'
import Todo from '../Todo/Todo'
import Todocontext from '../context/Todocontext';

const TodoList = () => {
    const [list, setList]   = useContext(Todocontext);

    return (
        <div>
            {list.length > 0 && list.map(todo => <Todo 
                key={todo.id}
                id={todo.id} 
                isFinished={todo.isFinished} 
                todoData={todo.todoData}
                changeFinished={(isFinished) => {
                    const upDateList = list.map(t => {
                        if (t.id === todo.id) {
                            todo.isFinished = isFinished;
                        }
                        return t;
                    });
                    setList(upDateList);
                }}
                onDelete={() => {
                    const updateList = list.filter(t => t.id != todo.id)
                    setList(updateList);

                }}

                onEdit={(todoText) => {
                    const updateList = list.map(t => {
                        if (t.id === todo.id) {
                            todo.todoData = todoText;
                        }
                        return t;

                    })
                    setList(updateList);
                    }
                }
            />)}
        </div>
    );

}

export default TodoList