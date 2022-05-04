
import { useSelector } from 'react-redux';
import classes from './../alltasks/AllTasks.module.css';
import DoneTask from './DoneTask';

function CompleteTasks () {

    const completeTasks = useSelector(state => state.todos.todos.completeTasks);
    console.log(completeTasks)
    return (
        <div className={classes.TasksWrapper}>
            <ul>{
                completeTasks.map((todo) => {
                    return <DoneTask key={todo.id} text={todo.text} />
                })
            }
            </ul>
        </div>
    )
}

export default CompleteTasks;
