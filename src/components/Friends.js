import React, {useState, useEffect} from 'react'
import axios from '../axios'
import { ShowFriends } from './ShowFriends'
import { useStateValue } from '../StateProvider'

export const Friends = () => {
    const [allUsers, setAllUsers] = useState([])
    const [{user}, dispatch] = useStateValue()

    useEffect(() => {
        getUsers()

      }, [])

    const getUsers = async () => {
        const res = await axios.get("/retrieve/users/")
        console.log(res.data)
        res.data = res.data.filter(x => x.email !== user.email)
        setAllUsers(res.data)
    }

    return (
        <React.Fragment>
        <div className='container w-full my-4'>
            <h1 className='text-2xl font-bold text-center'>People you may know</h1>
        </div>
        <div>
        {
            allUsers.map((singleUser,i) => (
              <ShowFriends
                  key={i}
                  singleUser = {singleUser}
              />
          ))
        }
        </div>
        </React.Fragment>

    )
}
