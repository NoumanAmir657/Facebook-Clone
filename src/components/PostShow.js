import axios from '../axios'
import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Link, Route, useParams, useHistory} from "react-router-dom"
import { useStateValue } from '../StateProvider'
import { useEffect } from 'react'

const PostShow = ({fullPost}) => {
    const [color, setColor] = useState('text-black')
    const [tempLikes, setTempLikes] = useState(fullPost.likes)
    const [{user}, dispatch] = useStateValue()

    useEffect(() => {
        setTempLikes(fullPost.likes)

        const temp = fullPost.likedBy.find(email => email === user.email)
        console.log('hello;', temp)
        if (temp) {
            setColor('text-blue-500')
        }
        else {
            setColor('text-black')
        }
      }, [fullPost])

    const handleLikeClick = () => {
        if (color === 'text-black') {
            console.log()
            setColor('text-blue-500')
            setTempLikes(tempLikes+1)

            fullPost = {
                ...fullPost, likes: tempLikes+1, likedBy: fullPost.likedBy.concat(user.email)
            }

            axios.put(`/upload/post/${fullPost.id}`, fullPost)
        }
        else {
            console.log(color)
            setColor('text-black')
            setTempLikes(tempLikes-1)

            fullPost = {
                ...fullPost, likes: tempLikes-1, likedBy: fullPost.likedBy.filter(email => email !== user.email)
            }

            axios.put(`/upload/post/${fullPost.id}`, fullPost)
        }
    }


    return (
        <Router>
        <div className='bg-white container shadow-2xl rounded-sm'>
            <div className='flex'>
                <Link to='/profile'><img className="inline-block h-10 w-10 rounded-full ring-2 ring-black my-2 mx-2" src={fullPost.avatar} alt=""></img></Link>
                <h4 className='font-bold my-3'>{fullPost.user} <span className='font-thin text-xs'><em>posted at {(new Date(parseInt(fullPost.timestamp))).toUTCString()}</em></span></h4>
            </div>

            <div className='py-4 mx-3'>{fullPost.text}</div>

            {
                fullPost.imgName ? (
                    
                        <img src={`/retrieve/image/single?name=${fullPost.imgName}`} className='m-auto' width='500px' height='' alt='image_here' />
                    
                ) : (
                        console.log('')
                    )
            }

            <div className='flex w-full border-2 border-black my-2'>
                <div className= 'w-full '><button className={`w-full font-bold ${color}`} onClick={handleLikeClick}>Like {tempLikes}</button></div>
                <div className=' w-full '><button className='w-full font-bold'>Comment</button></div>
                <div className=' w-full '><button className='w-full font-bold'>Share</button></div>
            </div>
        </div>
        <br></br>
        </Router>
    )
}

export default PostShow
