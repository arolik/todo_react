
import { useDispatch } from 'react-redux';
import { completeTodo } from '../../../store/TodoSlice';
import classes from './MarkTask.module.css';

function MarkTask (props) {
    const dispatch = useDispatch();

    function changeStatus (event) {
        let id = event.target.id
        dispatch(completeTodo({id}));
    }

    // function checkTask (event) {
    //     console.log(event.target.checked);
    //     let id = event.target.id
    //     dispatch(completeTodo({id}));
    // }

    return (
        <input className={classes.taskcheck} id={props.id} type="checkbox" checked={props.ischecked} onChange={changeStatus} />
        // <input className={classes.taskcheck} id={props.id} type="checkbox"  onChange={checkTask} />
    )
}

export default MarkTask;