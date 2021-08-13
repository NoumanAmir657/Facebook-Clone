import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Link, Route, useParams, useHistory} from "react-router-dom"

const PostShow = ({profilePic, imgName, username, timestamp, message}) => {
    console.log(timestamp)
    console.log(imgName)
    return (
        <Router>
        <div className='bg-white container shadow-2xl rounded-sm'>
            <div className='flex'>
                <Link to='/profile'><img className="inline-block h-10 w-10 rounded-full ring-2 ring-black my-2 mx-2" src={profilePic} alt=""></img></Link>
                <h4 className='font-bold my-3'>{username} <span className='font-thin text-xs'><em>posted at {(new Date(parseInt(timestamp))).toUTCString()}</em></span></h4>
            </div>

            <div className='py-4 mx-3'>{message}</div>

            {
                imgName ? (
                    
                        <img src={`/retrieve/image/single?name=${imgName}`} className='m-auto' width='500px' height='' alt='image_here' />
                    
                ) : (
                        console.log('DEBUG >>> no image here')
                    )
            }

            <div className='flex w-full border-2 border-black my-2'>
                <div className= 'w-full '><button className='w-full font-bold'>Like</button></div>
                <div className=' w-full '><button className='w-full font-bold'>Comment</button></div>
                <div className=' w-full '><button className='w-full font-bold'>Share</button></div>
            </div>
        </div>
        <br></br>
        </Router>
    )
}

export default PostShow
