import React from 'react'

function TodoList(props) {
    const todos = props.todos
    const setTodos = props.setTodos
    const setEditTodos = props.setEditTodos

     
    const handleComplete = (i) =>{
        setTodos(
            todos.map((a) => {
               if (a.title === i.title) {
                return {...a, completed: !a.completed}
               }
               return a;
            })
        )
    }
    // const handleEdit = ({title}) => {
    //   const findTodo = todos.find((i) => i.title === title)
    //   setEditTodos(findTodo)
    // }
    const handleDelete = ({title}) => {
         setTodos(todos.filter((i) => i.title !== title ))
    }
  return (
    <div className='todo__list'>
      {
        todos.map((i,j) => (
           <li className='lis' key={j}>
            <input type="text" 
            className={`list ${i.completed ? "complete" : ""}`}
            value={i.title}
            onChange={(e) => e.preventDefault}
            />
            <button
            onClick={() => handleComplete(i)}
            >check</button>
            {/* <button
            onClick={() => handleEdit(i)}
            >edit</button> */}
            <button
            onClick={() => handleDelete(i)}
            >delete</button>
           </li>
        ))}
    </div>
  )
}

export default TodoList
