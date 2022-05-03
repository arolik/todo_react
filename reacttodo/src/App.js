
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import classes from './App.module.css'
import ControlTasks from './components/controlTasks/ControlTasks';
import CreateTask from './components/createTask/CreateTask';
import AllTasks from './components/tasks/alltasks/AllTasks';
import CompleteTasks from './components/tasks/completetasks/CompleteTasks';
import RemowedTasks from './components/tasks/remowedtasks/RemowedTasks';

function App(props) {
  
  return (
    <BrowserRouter>
      <div className={classes.wrapperTodo}>
        <div className={classes.captionWrapper}>
          <h1>Todo List</h1>
        </div>
        <CreateTask />
        <ControlTasks />
        <Routes>
          <Route path="/allTasks"  element={<AllTasks />} />
          <Route path="/completeTasks"  element={<CompleteTasks />} />
          <Route path="/remowedTasks" element={<RemowedTasks />} />
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
