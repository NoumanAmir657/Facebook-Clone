import React, {useState} from 'react';
import {FaFacebook} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUsergroupAdd, AiOutlineCloseSquare} from 'react-icons/ai'
import {MdVideoLibrary} from 'react-icons/md'
import {SiMessenger} from 'react-icons/si'
import {IoMdNotifications} from 'react-icons/io'
import {BsArrowDownShort} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Switch, Link, Route} from "react-router-dom"
import Home from './Home'
import Profile from './Profile'
import { Friends } from './Friends';


const NavBar = ({postsData, setPostsData, currentUser, setCurrentUser}) => {
    const [color, setColor] = useState(['blue', 'black', 'black'])
    const [display, setDisplay] = useState(['block', 'hidden'])
    const [style, setStyle] = useState('w-full w-60 hidden md:hidden')
    const [profileColor, setProfileColor] = useState('bg-gray-200 text-black')

    const changeColor = (index) => {
        setProfileColor('bg-gray-200 text-black')
        setColor(color.map((c, n) => n === index ? c = 'blue' : c = 'black'))
        console.log(color)
    }

    const handleHamburger = () => {
        if (display[0] === 'block'){
            setDisplay(['hidden', 'block'])
            setStyle('w-full w-60 block md:hidden')
        }
        else {
            setDisplay(['block', 'hidden'])
            setStyle('w-full w-60 hidden md:hidden')
        }   
    }

    const toggleProfile = () => {
        if (profileColor === 'bg-gray-200 text-black' || color[0] === 'black' && color[1] === 'black' &&  color[2] === 'black'){
            setProfileColor('bg-blue-600 text-white')
            setColor(['black', 'black', 'black'])
            
        }
        else {
            setProfileColor('bg-gray-200 text-black')
        }
    }

    const logOut = () => {
        localStorage.clear()
        window.location.reload()
    }

    return(
        <React.Fragment>
        <nav className='flex items-center justify-between w-full shadow-md bg-white fixed z-40'>

            {/*Facebook icon and Search Bar*/}
            <div className="flex items-center">
                <Link to='/'><FaFacebook color='blue' className= 'w-10 h-100 rounded-full mx-3 my-1'/></Link>
                <div className="bg-gray-200 flex items-center rounded-full">
                    <BsSearch className='mx-2 h-10 w-5'/>
                    <input type='text' className='bg-transparent rounded-full w-75 py-2' placeholder='Search facebook'></input>
                </div>
            </div>

            {/*Home, Groups, Watch*/}
            <div className="flex md:hidden">
             <button id="hamburger" onClick={handleHamburger}>
                <GiHamburgerMenu className={display[0]} color='black' size='2em'/>
                <AiOutlineCloseSquare className={display[1]} color='black' size='2em'/>
            </button>
            </div>

            <div className="h-full w-60 items-center justify-between hidden md:flex">
                <div className='block md:inline-block'><Link to='/'><AiFillHome color={color[0]} className='w-8 h-full' onClick={() => changeColor(0)}/></Link></div>
                <div className='block md:inline-block'><Link to='/friends'><AiOutlineUsergroupAdd color={color[1]} className='w-8 h-full' onClick={() => changeColor(1)}/></Link></div>
                <div className='block md:inline-block'><Link to='/watch'><MdVideoLibrary color={color[2]} className='w-8 h-full' onClick={() => changeColor(2)}/></Link></div>
            </div>

            {/*Profile, Messenger, Notif, Account*/}
            <div className="h-full w-70 flex justify-end items-center">
                <div className={`${profileColor} w-20 rounded-full py-2 px-3`}><Link to='/profile' onClick={toggleProfile}>Profile</Link></div>
                <div className='bg-gray-100 p-2 rounded-full'><Link to='/messenger'><SiMessenger className='w-6 h-full'/></Link></div>
                <div className='bg-gray-100 p-2 rounded-full'><Link to='/notifications'><IoMdNotifications className='w-6 h-full'/></Link></div>
                <button className='hidden md:block' onClick={logOut}><div className={`bg-gray-100 hover:bg-gray-300 md:w-30 rounded-full py-2 px-3`}>Log Out</div></button>
            </div>
            
        </nav>



        <br></br>
        <br></br>

        <div className={style}>

        <div className='flex w-full bg-gray-400'>
        <div><Link to='/'><AiFillHome color={color[0]} className='w-8 h-full' onClick={() => changeColor(0)}/></Link></div>
        <div className='py-4 px-3 font-bold text-xl'><Link to='/' onClick={() => changeColor(0)}>Home</Link></div>
        </div>

        <div className='flex w-full bg-gray-400'>
        <div><Link to='/'><AiOutlineUsergroupAdd color={color[1]} className='w-8 h-full' onClick={() => changeColor(1)}/></Link></div>
        <div className='py-4 px-3 font-bold text-xl'><Link to='/friends' onClick={() => changeColor(1)}>Friends</Link></div>
        </div>

        <div className='flex w-full bg-gray-400'>
        <div><Link to='/'><MdVideoLibrary color={color[2]} className='w-8 h-full' onClick={() => changeColor(2)}/></Link></div>
        <div className='py-4 px-3 font-bold text-xl'><Link to='/watch' onClick={() => changeColor(2)}>Watch</Link></div>
        </div>

        <div className=' px-1 py-2 w-full bg-gray-400'><button className='bg-blue-700 hover:bg-blue-800 p-2 text-white rounded-xl' onClick={logOut}>Log Out</button></div>

        </div>

        <Switch>
        <Route path='/profile'>
          <Profile postsData={postsData} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>
        <Route path='/friends'>
            <Friends></Friends>
        </Route>
        <Route path='/'>
          <Home postsData={postsData} setPostsData={setPostsData}/>
        </Route>
        </Switch>
        </React.Fragment>
    )
}

export default NavBar;