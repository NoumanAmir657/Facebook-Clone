import React, {useState, useEffect} from 'react'
import axios from '../axios'
import { useStateValue } from '../StateProvider'
import Accepted from './Accepted'
import NavbarForFriends from './NavbarForFriends'
import People from './People'
import Pending from './Pending'

export const Friends = ({currentUser, setCurrentUser}) => {
    const [index, setIndex] = useState(1)
    const [allUsers, setAllUsers] = useState([])
    const [pendingUsers, setPendingUsers] = useState([])
    const [friends, setFriends] = useState([])

    useEffect(() => {
        getUsers()
        console.log(currentUser)
      }, [])

    const getUsers = async () => {
        const res = await axios.get("/retrieve/users/")
        console.log(res.data)
        console.log(currentUser)
        setAllUsers(res.data.filter(x => x.email !== currentUser.email))
    }

    if (index === 1){
        return (
            <React.Fragment>
            <NavbarForFriends index={index} setIndex={setIndex}/>
            <div>
            {
                allUsers.map((singleUser,i) => (
                  <People
                      key={i}
                      singleUser = {singleUser}
                      currentUser={currentUser}
                      setCurrentUser={setCurrentUser}
                      allUsers={allUsers}
                      setAllUsers={setAllUsers}
                  />
              ))
            }
            </div>
            </React.Fragment>
        )
    }
    else if(index === 0){
        return(
        <React.Fragment>
            <NavbarForFriends index={index} setIndex={setIndex}/>
            <Accepted/>
        </React.Fragment>
        )
    }
    else {
        return(
            <React.Fragment>
                <NavbarForFriends index={index} setIndex={setIndex}/>
                <Pending/>
            </React.Fragment>
        )
    }
}
