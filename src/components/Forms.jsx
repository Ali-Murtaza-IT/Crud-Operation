import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {createUser}  from '../features/userDetailSlice';
import { Navigate, useNavigate } from 'react-router-dom';

const Forms = () => {
  const [users,setUsers] = useState ({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUserData = (e) =>{
    setUsers({...users,[e.target.name] : e.target.value})
    console.log(users)
}

const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(createUser(users));
  navigate("/datas");
}


  return (
    <div>
    

    

<form className="max-w-sm mx-auto bg-black m-10 p-10" onSubmit={handleSubmit}>
  <h1 className='text-white text-center font-bold'> Enter the Data</h1>
  <div className="mb-5">
    <label   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
    <input type="text" onChange={getUserData} id="email" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div>
  <div className="mb-5">
    <label   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
    <input type="email" onChange={getUserData} id="password" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Age</label>
    <input type="text" onChange={getUserData} id="password" name="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input  onChange={getUserData} type="checkbox" value="Male" name="gender" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"  />
    </div>
    <label  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input  onChange={getUserData} type="checkbox" value="Female" name="gender" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"  />
    </div>
    <label  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>



    </div>
  )
}

export default Forms
