import axios from '../axios'
import React, {useState} from 'react'
import {BrowserRouter as Router, Link} from "react-router-dom"
import { useStateValue } from '../StateProvider'
import { useEffect } from 'react'
import Comment from './Comment'

const PostShow = ({fullPost}) => {
    const [color, setColor] = useState('text-black')
    const [tempLikes, setTempLikes] = useState(fullPost.likes)
    const [{user}, dispatch] = useStateValue()
    const [showComments, setShowComments] = useState(false)
    const [comment, setComment] = useState('')

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

    const handleComment = (event) => {
        setComment(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newComment = {
            email: user.email,
            comment: comment,
            avatar: user.photoURL,
            user: user.displayName,
        }
        fullPost = {
            ...fullPost, comments: fullPost.comments.concat(newComment)
        }

        axios.put(`/upload/post/${fullPost.id}`, fullPost)
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
                <div className=' w-full '><button className='w-full font-bold' onClick={() =>setShowComments(!showComments)}>Comment</button></div>
                <div className=' w-full '><button className='w-full font-bold'>Share</button></div>
            </div>

            {
                showComments ?
                <div>
                <form onSubmit={handleSubmit}> 
                <div className="flex items-center">
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-black my-2 mx-2" src={user.photoURL} alt=""></img>

                    <div className="bg-gray-200 flex items-center rounded-full mx-4 w-96">
                        <input  onChange={handleComment} type='text' className='w-full bg-transparent rounded-full py-2 px-2' placeholder='Write a comment'></input>
                    </div>
                    <br></br>
                </div>
                <button className='bg-blue-700 hover:bg-blue-900 text-white rounded-xl mx-2 w-36 my-2' type='submit'>Post Comment</button>
                </form>

                {fullPost.comments.map((com,i) => (
                    <Comment
                        key={fullPost.comments.length-i}
                        fullComment = {com}
                    />
                ))}
                </div>

                : console.log('')
            }

        </div>
        <br></br>
        </Router>
    )
}

export default PostShow
