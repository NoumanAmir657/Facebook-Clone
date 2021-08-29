import React from 'react'
import axios from '../axios'

const Pending = ({singleUser, currentUser, setCurrentUser, pendingUsers, setPendingUsers, allUsers, setAllUsers}) => {
    
    const handleClick = async () => {
        const updatedUser = {
            ...currentUser,
            friends: currentUser.friends.concat(singleUser),
            pending: currentUser.pending.filter(p => p.email !== singleUser.email)
        }
        console.log(updatedUser)

        setCurrentUser(updatedUser)

        let userWhoseRequestAccepted = allUsers.filter(x => x.email === singleUser.email)
        console.log(userWhoseRequestAccepted)
        userWhoseRequestAccepted = {
            ...userWhoseRequestAccepted[0],
            friends: userWhoseRequestAccepted[0].friends.concat({userName: currentUser.userName, email: currentUser.email, fbProfilePic: currentUser.fbProfilePic}),
            requestedTo: userWhoseRequestAccepted[0].requestedTo.filter(x => x.email !== currentUser.email)
        }
        console.log(userWhoseRequestAccepted)

        await axios.put(`/upload/user/${currentUser.id}`, updatedUser)
        await axios.put(`/upload/user/${userWhoseRequestAccepted.id}`, userWhoseRequestAccepted)
        
        setPendingUsers(pendingUsers.filter(u => u.email !== userWhoseRequestAccepted.email))
    }

    return (
        <div className='container w-full flex bg-gray-200 h-14 items-center rounded-xl my-3 justify-between'>
            <div className='flex items-center'>
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-black my-2 mx-2" src={singleUser.fbProfilePic} alt=""></img>
                <div className='font-bold'>{singleUser.userName}</div>
            </div>
            <button onClick={handleClick} className='text-center bg-blue-700 text-white rounded-lg w-32'>Accept Request</button>
        </div>
    )
}

export default Pending
