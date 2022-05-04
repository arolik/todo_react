
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { completeTodo } from '../../../store/TodoSlice';
import classes from './MarkTask.module.css';

function MarkTask (props) {
    console.log(props);
    const dispatch = useDispatch();

    const [status, changeNewStatus] = useState({
        isactive : false
    });

    function changeStatus (event) {
        changeNewStatus({...status, isactive: !status.isactive});
        let id = event.target.id
        dispatch(completeTodo({id}));
    }

    // function checkTask (event) {
    //     console.log(event.target.checked);
    //     let id = event.target.id
    //     dispatch(completeTodo({id}));
    // }

    return (
        <input className={classes.taskcheck} id={props.id} type="checkbox" checked={status.isactive} onChange={changeStatus} />
        // <input className={classes.taskcheck} id={props.id} type="checkbox"  onChange={checkTask} />
    )
}

export default MarkTask;