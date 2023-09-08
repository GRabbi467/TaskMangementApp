import React, { useEffect, useState } from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import TaskCard from '../TaskCard/TaskCard';
const AddTask = () => {
    const[tasks,setTasks] = useState([]);
    const{title,description,date,priority} = tasks;
    useEffect(()=>{
        const items = JSON.parse(localStorage.getItem('TaskList'));
        if(items){
            setTasks(items)
        }
    },[])

    return (
        <div className='addTask'>
            <div className='m-10'>
            <Link to ='/taskdescription'>
                <button className='flex p-3 bg-blue-600 rounded-lg text-white'><FaPlusCircle className='mt-1 mr-2'/>Add Task</button>
                </Link>
            {
              tasks.map(task=><TaskCard
              task = {task}
              ></TaskCard>
              )
            }
            </div>
        </div>
    );
};

export default AddTask;