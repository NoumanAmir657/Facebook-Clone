import React from 'react'
import Story from './Story'
import {BrowserRouter as Router, Switch, Link, Route, useParams, useHistory} from "react-router-dom"
import { FaFacebook } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'

const StoryReel = () => {
    return (
        <Router>
        <div>
        <div className='flex justify-start md:justify-evenly px-0 md:px-36'>
            <Story src="https://wallpaperaccess.com/full/4601511.jpg"/>
            <Story src="https://i.pinimg.com/originals/55/d3/da/55d3da613205f893235a081c6c62c104.jpg"/>
            <Story src="https://i.pinimg.com/564x/b4/91/19/b49119207fca27d1849fdb0948881c7d.jpg"/>
        </div>

        {/*Profile icon and Post Bar*/}
        <div className=' bg-white shadow-2xl rounded-sm'>
            <div className="flex items-center">
                <Link to='/profile'><img className="inline-block h-14 w-14 rounded-full ring-2 ring-black my-2 mx-2" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img></Link>
                <div className="bg-gray-200 flex items-center rounded-full mx-4 w-96">
                    <BsSearch className='mx-2 h-10 w-5'/>
                    <input type='text' className='w-full bg-transparent rounded-full py-2' placeholder='What is on your mind?'></input>
                </div>
            </div>

            <br></br>
            <br></br>
            <br></br>
            
        </div>


        </div>
        </Router>
    )
}

export default StoryReel
