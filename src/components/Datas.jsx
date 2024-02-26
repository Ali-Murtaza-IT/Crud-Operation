import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, showUser } from '../features/userDetailSlice';
import Popup from './Popup';
import { Link } from 'react-router-dom';

const Datas = () => {
    const dispatch = useDispatch();

    const { users, loading, searchData } = useSelector((state) => state.app);

    const [id, setId] = useState();

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        dispatch(showUser());
      }, []);


      if (loading) {
        return <h2>Loading</h2>;
      }

  return (

    <div className=''>
      {showPopup && (
        <Popup
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      
    <div class="items-start justify-between sm:flex ml-52 mr-52 mt-20 ">
        <div>
            <h4 class="text-gray-800 text-xl font-semibold">Team members</h4>
            <p class="mt-2 text-gray-600 text-base sm:text-sm">Give your team members access to manage the system.</p>
        </div>
        <Link to="/" class="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg sm:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"/>
            </svg>
            New member
        </Link>
    </div>
    {users && 
  users
.filter((ele) => {
  if (searchData.length === 0) {
    return ele;
  } else {
    return ele.name
      .toLowerCase()
      .includes(searchData.toLowerCase());
  }
})
    
    .map((userdata)=>(<ul key={userdata.id} class="mt-12 divide-y ml-52 mr-52 bg-black p-10">
        
        <li class="py-5 flex items-center justify-evenly flex-wrap ">
            <div class="flex gap-3">
                <h1 className="text-white font-extrabold ">{userdata.name}</h1>
                <div>
                    <span class="block text-sm text-white font-semibold" x-text="item.name">{userdata.email}</span>
                    <span class="block text-sm text-white font-semibold" x-text="item.email">{userdata.age}</span>
                </div>
            </div>
            <button  onClick={() => [setId(userdata.id), setShowPopup(true)]} class="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 bg-white hover:bg-gray-100">View</button>
            <Link  onClick={() => dispatch(deleteData(userdata.id))} class="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 bg-white hover:bg-gray-100">Delete</Link>
            <Link to={`/edit/${userdata.id}`} class="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 bg-white hover:bg-gray-100">Edit</Link>
        </li>
   
</ul>)
    )}
   
</div>
    
  )
}

export default Datas
