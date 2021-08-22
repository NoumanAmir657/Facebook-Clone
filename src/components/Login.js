import React from 'react'
import { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes} from '../Reducer'
import axios from '../axios'

const Login = ({currentUser, setCurrentUser}) => {
    const [state, dispatch] = useStateValue()

    const signIn = async () => {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result)

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })

            const newUser = {
                userName: result.user.displayName,
                email: result.user.email,
                fbProfilePic: null,
                coverImage: null,
            }

            axios.post('/upload/user', newUser)
            console.log(currentUser)
            setCurrentUser(currentUser.find(u => u.email === newUser.email))

        }).catch(error => alert(error.message))
    }

    return (
        <div>
            <div className='my-10 container'>
                <img className='w-50 m-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" alt="fb text"/>
            </div>
            <div className='container w-48 my-52 bg-blue-400 hover:bg-blue-300 rounded-lg'><button className='font-bold w-full m-auto' type='submit' onClick={signIn}>Sign In</button></div>
        </div>
    )
}

export default Login