import React, {useState, useEffect} from 'react'
import TodoHead from './TodoHead'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import '../todo/todo.css'

function Todo() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || []
    const [inputval, setInputval] = useState("")
    const [todos, setTodos] = useState(initialState)
    const [edittodos, setEditTodos] = useState(null)
    const [userInfo, setUserInfo] = useState("")
    useEffect(()=>{
      localStorage.setItem("todos", JSON.stringify(todos))
    })
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userInfo"))
    setUserInfo(userData)
  },[])
  return (

    <div className='todo__overall'>
      <div className="div__all">
      <div className='todohead'>
      <div className='div__user'>
        <p>Hello</p> <h1>{userInfo.firstName}</h1>
       </div>

      <TodoHead />
      </div>
      <div className="todoinput">
      <TodoInput 
        inputval={inputval}
        setInputval={setInputval}
        todos={todos}
        setTodos={setTodos}
        setEditTodos={setEditTodos}
        edittodos={edittodos}
        />
      </div>
        <div className='todolist'>
        <TodoList todos={todos} setTodos={setTodos} setEditTodos={setEditTodos}/>
        </div>
      </div>

    </div>
  )
}

export default Todo