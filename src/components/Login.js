import React, {useEffect} from 'react'
import { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes} from '../Reducer'
import axios from '../axios'

const Login = ({currentUser, setCurrentUser}) => {
    const [state, dispatch] = useStateValue()

    useEffect(() => {
        console.log(currentUser)
    }, [currentUser])


    const signIn = async () => {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result)

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })

            console.log(result.user)

            const newUser = {
                userName: result.user.displayName,
                email: result.user.email,
                fbProfilePic: result.user.photoURL,
                coverImage: null,
            }

            localStorage.setItem('logged-in-user', JSON.stringify(result.user))

            axios.post('/upload/user', newUser)
            .then(v => {
                if (currentUser.length !== 0){
                    console.log(v.data)
                    //const temp = currentUser.concat(v.data)
                    //console.log(temp)
                    //setCurrentUser(temp.filter(u => u.email === v.data.email))
                    Array.isArray(v.data) ? setCurrentUser(v.data[0]) : setCurrentUser(v.data)
                    //console.log(currentUser.find(u => u.email === newUser.email))
                    //setCurrentUser(currentUser.find(u => u.email === newUser.email))
                }
                else {
                    console.log(v.data)
                    setCurrentUser(v.data)
                }
            })
            
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