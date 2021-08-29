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
    const [people, setPeople] = useState([])

    useEffect(() => {
        getUsers()
        console.log(currentUser)
      }, [])

      useEffect(() => {
        console.log(people)
      }, [people])

    const getUsers = async () => {
        const res = await axios.get("/retrieve/users/")
        console.log(res.data)
        setAllUsers(allUsers.concat(res.data))

        const f = currentUser.friends !== undefined ? currentUser.friends.filter(friend => res.data.filter(u => u.email === friend.email)) : null
        console.log(f)
        setFriends(f)

        const p = currentUser.pending !== undefined ? currentUser.pending.filter(pending => res.data.filter(u => u.email === pending.email)) : null
        console.log(p)
        setPendingUsers(p)

        const r = currentUser.requestedTo !== undefined ? currentUser.requestedTo.filter(requestedTo => res.data.filter(u => u.email === requestedTo.email)) : null
        console.log(r)

        //
        //const peop = res.data.filter(u => f.filter(f => f.email !== u.email) && p.filter(p => p.email !== u.email) && r.filter(r => r.email !== u.email) && u.email !== currentUser.email)
        //console.log(peop)

        let temp = []
        for (let i = 0; i < res.data.length; ++i){
            let email = res.data[i].email
            let c1 = f.find(f => f.email === email)
            console.log(c1)
            let c2 = p.find(p => p.email === email)
            console.log(c2)
            let c3 = r.find(r => r.email === email)
            console.log(c3)

            if (c1 || c2 || c3 ){
                console.log("Do not add")
            }
            else{
                if(currentUser.email !== email){
                    temp = temp.concat(res.data[i])
                }
            }
        }
        console.log(temp)

        //setPeople(temp)
        temp.map(p => setPeople(people.concat({userName: p.userName, email: p.email, fbProfilePic :p.fbProfilePic})))
    }

    if (index === 1){
        return (
            <React.Fragment>
            <NavbarForFriends index={index} setIndex={setIndex}/>
            <div>
            {
                people.map((singleUser,i) => (
                  <People
                      key={i}
                      singleUser = {singleUser}
                      currentUser={currentUser}
                      setCurrentUser={setCurrentUser}
                      people={people}
                      setPeople={setPeople}
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
                <div>
                {
                    pendingUsers.map((singleUser, i) => (
                        <Pending
                            key={i}
                            singleUser={singleUser}
                            currentUser={currentUser}
                            setCurrentUser={setCurrentUser}
                            pendingUsers={pendingUsers}
                            setPendingUsers={setPendingUsers}
                            allUsers={allUsers}
                            setAllUsers={setAllUsers}
                        />
                    ))
                }
                </div>
            </React.Fragment>
        )
    }
}
