import React from 'react';
import './TaskCard.css';
import { FaFlag } from "react-icons/fa";

const TaskCard = ({task}) => {
    const{title,description,priority,date} = task;
    return ( 
            
                <div className='taskCard'>
                <p>{title}</p>
                <p>{description}</p>
                <p>{priority}</p>
               {/* {
                if(priority === Easy){
                    <FaFlag className='text-green-600'/>
                }
                elseif(priority === medium){
                    <FaFlag className='text-blue-600'/>
                }
                else{
                    <FaFlag className='text-red-600'/>
                }
               } */}

                <p>Due:{date}</p>
                <button class="px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-full">Assign</button>
                {/* <button class="px-2 py-1 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-full">Delete</button> */}

            </div>

    );
};

export default TaskCard; 