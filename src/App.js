import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Form from './components/form/Form';
import Todo from './components/todo/Todo';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Routes>
         <Route path='/todo' element={
                    <Todo />

         }/>
      </Routes> */}
      <Routes>
        <Route path='/' element={
          <Form />
        }/>
      </Routes>
    </div>
    </Router>

  );
}

export default App;
