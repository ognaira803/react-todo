import React from 'react'

function TodoInput(props) {
    const inputval = props.inputval
    const setInputval = props.setInputval
    const todos = props.todos
    const setTodos = props.setTodos
    const edittodos = props.edittodos
    const setEditTodos = props.setEditTodos
    // const updateTodo = (i, j) => {
    //     const newTodo = todos.map((a) => 
    //         a.title === i ? {i, j} : i
    //     );
    //     setTodos(newTodo)
    //     setEditTodos("");
    // };
    // useEffect(() => {
    //   if (edittodos) {
    //     setInputval(edittodos.title)
    //   }else{
    //     setInputval("")
    //   };
    // }, [setInputval, edittodos])
    
    console.log(inputval)
    const onFormSubmit = (e) =>{
       e.preventDefault()
       if (inputval === "") {
        alert("input")
       }else{
        setTodos([...todos, {title:inputval, completed: false}])
       setInputval("")   
       }
    }
    console.log(todos)
  return (
    <div className='todo__input'>
      <input type="text" placeholder='Enter your task' 
      value={inputval}
      onChange={e => setInputval(e.target.value)}
      /> 
      <button
      onClick={(e) =>{
        onFormSubmit(e)
      }}
      >add</button>
    </div>
  )
}

export default TodoInput
