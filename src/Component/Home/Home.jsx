import React, { useState } from 'react';
import TaskDes from '../TaskDes/TaskDes';
import AddTask from '../AddTask/AddTask';
import Login from '../LoginDemo/LoginDemo';

const Home = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleLogin = (user) => {
      setCurrentUser(user);
    }
    return (
        <div className=''>
            {currentUser ? (
        <div>
          <h2>Welcome, {currentUser.username}!</h2>
          <button onClick={() => setCurrentUser(null)}>Logout</button>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
            {/* <TaskDes/> */}
            <AddTask/>
        </div>
    );
};

export default Home;