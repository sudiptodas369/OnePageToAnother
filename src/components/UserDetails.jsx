import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const GoBackHandler = () => {
        //navigate("/user");
        navigate(-1);
    };
  return (
    <>
    
    <div className='mt-10'>
    <h1 className='text-red-300 text-2xl mb-2 '>User details</h1>
    <h1 className='text-2xl mt-3 '>username: {name}</h1>

    <button onClick={GoBackHandler}
    
    className='mt-5 text-white p-3 bg-red-300 '>
        Go Back
    </button>

    </div>
    </>
  )
}

export default UserDetails