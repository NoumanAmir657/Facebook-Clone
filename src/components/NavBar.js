import React, {useState} from 'react';
import {FaFacebook} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {MdVideoLibrary} from 'react-icons/md'
import {SiMessenger} from 'react-icons/si'
import {IoMdNotifications} from 'react-icons/io'
import {BsArrowDownShort} from 'react-icons/bs'
import {BrowserRouter as Router, Switch, Link, Route, useParams, useHistory} from "react-router-dom"


const NavBar = () => {
    const [color, setColor] = useState(['blue', 'black', 'black'])

    const changeColor = (index) => {
        setColor(color.map((c, n) => n === index ? c = 'blue' : c = 'black'))
        console.log(color)
    }

    return(
        <Router>
        <nav className='flex items-center justify-between w-full shadow-md bg-white fixed'>
            <div className="flex items-center">
                <Link to='/'><FaFacebook color='blue' className= 'w-10 h-100 rounded-full mx-3 my-1'/></Link>
                <div className="bg-gray-200 flex items-center rounded-full">
                    <BsSearch className='mx-2 h-10 w-5'/>
                    <input type='text' className='bg-transparent rounded-full w-75 py-2' placeholder='Search facebook'></input>
                </div>
            </div>


            <div className="h-full w-60 items-center justify-between hidden md:flex">
                <div><Link to='/'><AiFillHome color={color[0]} className='w-8 h-full' onClick={() => changeColor(0)}/></Link></div>
                <div><Link to='/groups'><AiOutlineUsergroupAdd color={color[1]} className='w-8 h-full' onClick={() => changeColor(1)}/></Link></div>
                <div><Link to='/videos'><MdVideoLibrary color={color[2]} className='w-8 h-full' onClick={() => changeColor(2)}/></Link></div>
            </div>


            <div className="h-full w-48 flex">
                <div className='bg-gray-100 w-75 rounded-full py-2 px-3'><Link to='/profile'>Profile</Link></div>
                <div className='bg-gray-100 p-2 rounded-full'><Link to='/messenger'><SiMessenger className='w-6 h-full'/></Link></div>
                <div className='bg-gray-100 p-2 rounded-full'><Link to='/notifications'><IoMdNotifications className='w-6 h-full'/></Link></div>
                <div className='bg-gray-100 p-2 rounded-full'><Link to='/account'><BsArrowDownShort className='w-6 h-full'/></Link></div>
            </div>
            
        </nav>
        </Router>
    )
}

export default NavBar;