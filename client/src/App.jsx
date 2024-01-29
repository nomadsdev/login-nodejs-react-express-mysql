import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', { username, password });
      if (response.data.success) {
        setMessage(response.data.message);
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className='flex justify-center'>
        <div className='p-10'>
        <h2 className='text-red-600 text-2xl'>Login</h2>
        <div className='bg-red-600 w-5 h-1 rounded-full'></div>
        </div>
      </div>
      <div className='py-5 flex justify-center'>
      <p className='text-blue-500 bg-blue-200 px-5 py-1 rounded-md'>{message}</p>
      </div>
      <div className='flex justify-center'>
        <div>
          <div>
            <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            className='border border-red-600 rounded-md pl-2 text-zinc-600'
            onChange={(e) => setUsername(e.target.value)} />
            <br />
            <br />
            <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            className='border border-red-600 rounded-md pl-2 text-zinc-600'
            onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='flex justify-center pt-5'>
          <button onClick={handleLogin} className='text-white bg-red-600 px-5 rounded-md shadow-md'>Login</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
