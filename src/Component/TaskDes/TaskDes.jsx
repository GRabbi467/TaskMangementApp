import React, { useState } from 'react';
import './TaskDes.css'
import { FaFlag } from "react-icons/fa";
const TaskDes = () => {
    const [select,setSelect] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        var TaskList = [];
        const title = e.target.title.value;
        const description= e.target.description.value;
        const date = e.target.date.value;
        const priority = select;

        const TaskDetails = {
            title:title,
            description:description,
            date:date,
            priority:priority 
      }
       console.log(TaskDetails)
        TaskList.push(TaskDetails);
        //TaskList.push(JSON.parse(localStorage.getItem('TaskList')));
        TaskList = TaskList.concat(JSON.parse(localStorage.getItem('TaskList')||'[]'));
        localStorage.setItem('TaskList',JSON.stringify(TaskList));
        e.target.reset();
    }
 
    return (
        <div className='description'>
            <div className='grid justify-center'>
            <form onSubmit={handleSubmit} className='grid justify-items-start gap-4 items-center my-4  p-12 bg-teal-100 rounded-lg' >
            <input type="text" name='title' placeholder="Title" className="input w-full max-w-xs p-2" required />
            <textarea name='description' className="textarea w-full max-w-xs textarea-success" placeholder="Description" required/>
            <label>Set Due Date</label>
            <input className='' type="date" name='date' required></input>
            <select className="select input-bordered border select-success w-full max-w-xs" onChange={e=> setSelect(e.target.value)} required>
            <option selected disabled>SET PRIORITY</option>
            <option><FaFlag/>Easy</option>
            <option>Medium</option>
            <option>High</option>      
            </select>
            <button type='submit' className="py-2 px-4 bg-blue-700 rounded-md text-white">Save</button>
            </form>
        </div>
        </div>
    );
};

export default TaskDes;