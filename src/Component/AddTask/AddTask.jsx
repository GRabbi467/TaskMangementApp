import React from 'react';
import { FaPlusCircle } from "react-icons/fa";
const AddTask = () => {
    return (
        <div>
            <button className='flex p-3 bg-blue-600 rounded-lg text-white'><FaPlusCircle className='mt-1 mr-2'/>Add Task</button>
            
        </div>
    );
};

export default AddTask;