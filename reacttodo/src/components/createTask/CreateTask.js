
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/TodoSlice';
import classes from './CreateTask.module.css';

function createId () {
    let id = 0;
    return function () {
        return id++ ;
    }
}

let id = createId();

function CreateTask () {
    
    const dispatch = useDispatch();
    let [text, setNewText] = useState('');

    function setText (e) {
        setNewText(e.target.value);
    }

    function createTask () {
        if(text !== ''){
            dispatch(addTodo({text, newId: id()}));
        }
        setNewText('');
    }

    return (
        <div className={classes.wrapperBtns}>
            <input className={classes.enterBtn} type="text" value={text} onChange={setText} />
            <input className={classes.clickBtn}  type="button" value="Add"
            onClick={createTask} />
        </div>
    )
}

export default CreateTask;

