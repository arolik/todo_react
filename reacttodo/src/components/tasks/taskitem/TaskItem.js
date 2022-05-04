
import MarkTask from './MarkTask';
import TaskHandle from './TaskHandle';
import classes from './TaskItem.module.css';


function TaskItem (props) {

    // let textOfTask = props.iscomplete ? 
    // <span className={classes.complete}>
    // {props.text}
    // </span> : 
    // <span>
    // {props.text}
    // </span>

    let textOfTask = props.iscomplete ? 
        <li className={classes.taskitem} >
            <MarkTask id={props.id} ischecked={props.ischecked} />
            <span className={classes.complete}>
                {props.text}
            </span>
            <TaskHandle />
        </li>
     : 
        <li className={classes.taskitem}>
            <MarkTask id={props.id} />
            <span >
                {props.text}
            </span>
            <TaskHandle />
        </li>
    return (
            // <li className={classes.taskitem}>
            //     <MarkTask id={props.id} />
            //     {textOfTask}
            //     <TaskHandle />
            // </li>
            textOfTask
    )
}

export default TaskItem;