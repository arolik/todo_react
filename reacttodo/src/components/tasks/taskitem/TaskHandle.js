
import classes from './TaskHandle.module.css';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../../store/TodoSlice';

function TaskHandle (props) {
    let dispatch = useDispatch();

    function markForDeleteTask (event) {
        let id = event.target.id;
        dispatch(deleteTodo({id}));
    }

    return (
        <div className={classes.toggletaskitem}>
            <div className={classes.itembtnwrapper}>
                <button className={classes.itembtn}>
                    <FaPencilAlt className={classes.itembtnfa} />
                </button>
            </div>
            <div className={classes.itembtnwrapper}>
                <button className={classes.itembtn} id={props.id} onClick={markForDeleteTask} >
                    <FaTrashAlt className={classes.itembtnfa} />
                </button>
            </div>
        </div>
        
    )
}

export default TaskHandle;