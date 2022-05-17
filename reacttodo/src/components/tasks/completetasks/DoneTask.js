
import classes from './../taskitem/TaskItem.module.css';
import s from './../taskitem/MarkTask.module.css';
import ss from './../taskitem/TaskHandle.module.css';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../../store/TodoSlice';

function DoneTask (props) {
    
    let dispatch = useDispatch();

    function markForDeleteTask (event) {
        let id = event.target.id;
        dispatch(deleteTodo({id}));
    }
    
    return (
        <li className={classes.taskitem}>
        <input type="checkbox" checked={true} disabled className={s.taskcheck} />
            <span>  
                {props.text}
            </span>
        <div className={ss.itembtnwrapper}>
            <button className={ss.itembtn} id={props.id} onClick={markForDeleteTask} ><FaTrashAlt className={ss.itembtnfa} /></button>
        </div>
        </li>
    )
}

export default DoneTask;