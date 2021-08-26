import userEvent from '@testing-library/user-event'
import React from 'react'

export const ShowFriends = ({singleUser}) => {
    return (
        <div className='container w-full flex bg-gray-200 h-14 items-center rounded-xl my-3 justify-between'>
            <div className='flex items-center'>
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-black my-2 mx-2" src={singleUser.fbProfilePic} alt=""></img>
                <div className='font-bold'>{singleUser.userName}</div>
            </div>
            <button className='text-center bg-blue-700 text-white rounded-lg w-32'>Add as Friend</button>
        </div>
    )
}
