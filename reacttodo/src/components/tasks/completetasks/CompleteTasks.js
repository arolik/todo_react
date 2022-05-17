
import { useSelector } from 'react-redux';
import classes from './../alltasks/AllTasks.module.css';
import DoneTask from './DoneTask';

function CompleteTasks (props) {
    
    const completeTasks = useSelector(state => state.todos.todos.completeTasks);
    const activeCompleteTasks = completeTasks.filter((todo) => {
        return todo.delete !== true;
    });
    
    return (
        <div className={classes.TasksWrapper}>
            <ul>{
                activeCompleteTasks.map((todo) => {
                    return <DoneTask key={todo.id} text={todo.text} id={todo.id} />
                })
            }
            </ul>
        </div>
    )
}

export default CompleteTasks;
