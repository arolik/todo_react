
import { Link } from 'react-router-dom';
import classes from './ControlTasks.module.css';

function ControlTasks () {


    return (
        <div className={classes.controlWrapper}>
            <div className={classes.linkItem}>
                <Link to="/allTasks" >All Tasks</Link>
            </div>
            <div className={classes.linkItem}>
                <Link to="/completeTasks" >Complete Tasks</Link>
            </div>
            <div className={classes.linkItem}>
                <Link to="/remowedTasks" >Remowed Tasks</Link>
            </div>
        </div>
    )
}

export default ControlTasks;