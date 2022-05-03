
import { useDispatch } from 'react-redux';
import { completeTodo } from '../../../store/TodoSlice';
import classes from './MarkTask.module.css';

function MarkTask (props) {

    const dispatch = useDispatch();

    function checkTask (event) {
        let id = event.target.id
        dispatch(completeTodo({id}));
    }

    return (
        <input className={classes.taskcheck} id={props.id} type="checkbox" onChange={checkTask} />
        
    )
}

export default MarkTask;