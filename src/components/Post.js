import React, { Fragment, useState } from 'react'
import {BrowserRouter as Router, Switch, Link, Route, useParams, useHistory} from "react-router-dom"
import { BsSearch } from 'react-icons/bs'
import {IoMdPhotos} from 'react-icons/io'
import {BsCameraVideoFill} from 'react-icons/bs'
import {VscSmiley} from 'react-icons/vsc'

const Post = ({posts, setPosts, user}) => {
    const [image, setImage] = useState(null)
    const [postMsg, setPostMsg] = useState(null)

    const handleChange = (e) => {
        if (e.target.files[0]){
            setImage(e.target.files[0])
            // console.log(e.target.files[0])
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Submitting')
        let currentPost = {
            user: user,
            postMsg: postMsg,
            media: image
        }
        setPostMsg('')
        setPosts(posts.concat(currentPost))
    }

    const handlePostMsg = (event) => {
        console.log(event.target.value)
        setPostMsg(event.target.value)
    }

    

    return(
        <Router>
        <React.Fragment>
        {/*Profile icon and Post Bar*/}
        <form onSubmit={handleSubmit}>
        <div className=' bg-white shadow-2xl rounded-sm container'>
            <div className="flex items-center">
                <Link to='/profile'><img className="inline-block h-10 w-10 rounded-full ring-2 ring-black my-2 mx-2" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img></Link>
                <div className="bg-gray-200 flex items-center rounded-full mx-4 w-96">
                    <BsSearch className='mx-2 h-10 w-5'/>
                    <input type='text' className='w-full bg-transparent rounded-full py-2' placeholder='What is on your mind?' onChange={handlePostMsg}></input>
                </div>
            </div>
            
            <div className='w-full flex justify-between container'>
            <div className='flex font-bold'><IoMdPhotos size='2em' color='green' className='mx-1'/>Photos</div>
            <div className='flex font-bold'><BsCameraVideoFill size='2em' color='red' className='mx-1'/>Live Video</div>
            <div className='flex font-bold'><VscSmiley size='2em' color='yellow' className='mx-1'/>Feeling</div>
            </div>

            <div className='flex justify-center my-2 w-full'>
            
            <input type='file' className='' onChange={handleChange}></input>
            <button type='submit' className='bg-blue-300 rounded-lg px-3 border-2 border-black font-bold'>Post</button>
            
            </div>

            <br></br>
        </div>
        </form>
        <br></br>
        </React.Fragment>
        </Router>
    )
}

export default Post