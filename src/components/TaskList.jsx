import React from 'react';
import TaskItem from './TaskItem';
import useGetTasks from '../hooks/useGetTasks';


const TaskList = ({Api}) => {
    const tasks = useGetTasks(Api)
    return (
        <div className='h-screen my-5 p-2 bg-slate-100'>
            {tasks.map(item =>(
                <TaskItem item= {item}/>
            ))}
        </div>
    );

};

export default TaskList;