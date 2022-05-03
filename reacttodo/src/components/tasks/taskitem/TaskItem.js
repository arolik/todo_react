
import MarkTask from './MarkTask';
import TaskHandle from './TaskHandle';
import classes from './TaskItem.module.css';


function TaskItem (props) {

    
    return (
            <li className={classes.taskitem}>
                <MarkTask id={props.id} />
                <span>
                {props.text}
                </span>
                <TaskHandle />
            </li>
        
    )
}

export default TaskItem;