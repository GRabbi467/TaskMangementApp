import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSubmit=e=>{
        e.preventDefault();
        var userList = [];
        const userName = e.target.userID.value;
        const bio= e.target.bio.value;
        const imgURL = e.target.url.value;

        const userDetails = {
            userName:userName,
            bio:bio,
            imageURL:imgURL
      }
      console.log(userDetails)
        userList.push(userDetails);
        userList = userList.concat(JSON.parse(localStorage.getItem('userList')||'[]'));
        localStorage.setItem('userList',JSON.stringify(userList));
        e.target.reset();

    }

    return (
        <div className='grid justify-center'>
            <form onSubmit={handleSubmit} className='grid  gap-4 items-center my-4  p-12 bg-zinc-200 rounded-lg'>
                <h1 className='text-center'>LOGIN</h1>
                <input type="text" name='userID' className='p-2' placeholder='Enter Username'required/>
                <input type="text" name='bio' className='p-2' placeholder='Enter Bio'required/>
                <input type="url" name="url" className='p-1' id="" placeholder='Enter Photo URL' required/>
                <button type="submit" className='p-2 bg-black text-white rounded-md'>Login</button>
            </form>
            <Link to ='/signup' className="text-xs font-light text-center text-zinc-950 hover:text-purple-600 hover:underline">Don't have an account?</Link>
        </div>
    );
};

export default Login;