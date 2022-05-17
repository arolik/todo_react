
import MarkTask from './MarkTask';
import TaskHandle from './TaskHandle';
import classes from './TaskItem.module.css';


function TaskItem (props) {
     
    let task = props.iscomplete ? 
        <li className={classes.taskitem} >
            <MarkTask id={props.id} ischecked={props.ischecked} />
            <span className={classes.complete}>
                {props.text}
            </span>
            <TaskHandle id={props.id} />
        </li>
     : 
        <li className={classes.taskitem}>
            <MarkTask id={props.id} ischecked={props.ischecked} />
            <span>
                {props.text}
            </span>
            <TaskHandle id={props.id} />
        </li>
    return (
            task
    )
}

export default TaskItem;