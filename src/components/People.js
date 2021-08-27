import React, {useState} from 'react'
import axios from '../axios'

const People = ({singleUser, currentUser, setCurrentUser, allUsers, setAllUsers}) => {
    const [text, setText] = useState('Add as Friend')

    const handleClick = async () => {
        if (text === 'Add as Friend'){
            setText('Remove Friend')
            const updatedUser = {
                ...currentUser,
                friends: currentUser.friends.concat(singleUser.email)
            }
            setCurrentUser(updatedUser)
            await axios.put(`/upload/user/${currentUser.id}`, updatedUser)
        }
        else {
            setText('Add as Friend')
            const updatedUser = {
                ...currentUser,
                friends: currentUser.friends.filter(x => x !== singleUser.email)
            }
            setCurrentUser(updatedUser)
            await axios.put(`/upload/user/${currentUser.id}`, updatedUser)
        }
    }

    return (
        <div className='container w-full flex bg-gray-200 h-14 items-center rounded-xl my-3 justify-between'>
            <div className='flex items-center'>
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-black my-2 mx-2" src={singleUser.fbProfilePic} alt=""></img>
                <div className='font-bold'>{singleUser.userName}</div>
            </div>
            <button onClick={handleClick} className='text-center bg-blue-700 text-white rounded-lg w-32'>{text}</button>
        </div>
    )
}

export default People
