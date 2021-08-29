import React, {useState} from 'react'
import axios from '../axios'

const People = ({singleUser, currentUser, setCurrentUser, people, setPeople, allUsers, setAllUsers}) => {
    const [text, setText] = useState('Add as Friend')

    const handleClick = async () => {

            const updatedUser = {
                ...currentUser,
                requestedTo: currentUser.requestedTo.concat(singleUser)
            }
            console.log(updatedUser)

            setCurrentUser(updatedUser)

            
            let requestedToUser = allUsers.filter(x => x.email === singleUser.email)
            console.log(requestedToUser)
            requestedToUser = {
                ...requestedToUser[0],
                pending: requestedToUser[0].pending.concat({userName: currentUser.userName, email: currentUser.email, fbProfilePic: currentUser.fbProfilePic})
            }
            console.log(requestedToUser)

            await axios.put(`/upload/user/${currentUser.id}`, updatedUser)
            await axios.put(`/upload/user/${requestedToUser.id}`, requestedToUser)

            setPeople(people.filter(u => u.email !== requestedToUser.email))
        
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
