
import { useSelector } from 'react-redux';
import TaskItem from '../taskitem/TaskItem';
import classes from './AllTasks.module.css';

function AllTasks () {

const allTodos = useSelector(state => state.todos.todos.allTasks);
console.log(allTodos);
    return (
        <div className={classes.TasksWrapper}>
            <ul>{allTodos.map(function(todo){
                return todo.complete === true ?
                <TaskItem key={todo.id} text={todo.text} id={todo.id} iscomplete={true} ischecked={true} /> :
                <TaskItem key={todo.id} text={todo.text} id={todo.id}  />
            })}</ul>
        </div>
    )
}

export default AllTasks;