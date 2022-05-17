
import { useDispatch, useSelector } from 'react-redux';
import classes from './../alltasks/AllTasks.module.css';
import ss from './../taskitem/TaskHandle.module.css';
import sss from './../taskitem/TaskItem.module.css';
import { FaTrashAlt } from 'react-icons/fa';
import { clearTasks } from '../../../store/TodoSlice';


function RemowedTasks () {

    const dispatch = useDispatch();
    const remowedTasks = useSelector(state => state.todos.todos.remowedTasks );
    function deleteTask (event) {
        let id = event.target.id;
        dispatch(clearTasks({id}));
    }

    return (
        <div className={classes.TasksWrapper}>
            <ul>
                {
                    remowedTasks.map((elem) => {
                        return <li className={sss.taskitem} key={elem.id}>
                            <span>
                                {elem.text}
                            </span>
                            <div className={ss.itembtnwrapper}>
                                <button className={ss.itembtn} id={elem.id} onClick={deleteTask}>
                                    <FaTrashAlt className={ss.itembtnfa} />
                                </button>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default RemowedTasks;
