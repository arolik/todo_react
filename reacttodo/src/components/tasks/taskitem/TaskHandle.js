
import classes from './TaskHandle.module.css';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

function TaskHandle () {

    return (
        <div className={classes.toggletaskitem}>
            <div className={classes.itembtnwrapper}>
                <button className={classes.itembtn}><FaPencilAlt className={classes.itembtnfa} /></button>
            </div>
            <div className={classes.itembtnwrapper}>
                <button className={classes.itembtn}><FaTrashAlt className={classes.itembtnfa} /></button>
            </div>
        </div>
        
    )
}

export default TaskHandle;