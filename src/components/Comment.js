import React from 'react'

const Comment = ({fullComment}) => {
    return (
        <div className='bg-white container shadow-2xl rounded-sm py-2'>
        <div className='flex'>
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-black my-2 mx-2" src={fullComment.avatar} alt=""></img>
            <h4 className='font-bold my-3'>{fullComment.user}</h4>
        </div>

        <h4 className='mx-4 p-2 bg-gray-200 rounded-lg'>{fullComment.comment}</h4>
        </div>
    )
}

export default Comment
