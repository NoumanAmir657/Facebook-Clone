import React from 'react'
import {BrowserRouter as Router, Switch, Link, Route, useParams, useHistory} from "react-router-dom"

const PostShow = () => {
    return (
        <Router>
        <div className='bg-white container shadow-2xl rounded-sm'>
            <div className='flex'>
                <Link to='/profile'><img className="inline-block h-10 w-10 rounded-full ring-2 ring-black my-2 mx-2" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img></Link>
                <h4 className='font-bold my-3'>Lake <span className='font-thin text-xs'><em>posted at {(new Date()).toUTCString()}</em></span></h4>
            </div>

            <div className='py-4 mx-3'>Hello</div>
            <div className='py-4 mx-3'>Hello</div>
            <div className='py-4 mx-3'>Hello</div>

            <div className='flex w-full border-2 border-black'>
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
