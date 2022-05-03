
import classes from './../taskitem/TaskItem.module.css';
import s from './../taskitem/MarkTask.module.css';

function DoneTask (props) {

    
    return (
        <li className={classes.taskitem}>
        <input type="checkbox" checked="true" disabled className={s.taskcheck} />
            <span>
                
            {props.text}</span>
        </li>
    )
}

export default DoneTask;