
import { useDispatch } from 'react-redux';
import { completeTodo } from '../../../store/TodoSlice';
import classes from './MarkTask.module.css';

function MarkTask (props) {
    const dispatch = useDispatch();

    function changeStatus (event) {
        let id = event.target.id;
        dispatch(completeTodo({id}));
    }

    return (
        <input className={classes.taskcheck} id={props.id} type="checkbox" checked={props.ischecked} onChange={changeStatus} />
    )
}

export default MarkTask;