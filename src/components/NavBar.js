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
import {BrowserRouter as Router, Switch, Link, Route, useParams, useHistory} from "react-router-dom"
import Home from './Home'
import Profile from './Profile'


const NavBar = ({postsData, setPostsData}) => {
    const [color, setColor] = useState(['blue', 'black', 'black'])
    const [display, setDisplay] = useState(['block', 'hidden'])
    const [style, setStyle] = useState('w-full w-60 hidden md:hidden')

    const changeColor = (index) => {
        setColor(color.map((c, n) => n === index ? c = 'blue' : c = 'black'))
        console.log(color)
    }

    const handleHamburger = () => {
        if (display[0] === 'block'){
            setDisplay(['hidden', 'block'])
            setStyle('w-full w-60 block md:hidden')
            console.log('hello')
        }
        else {
            setDisplay(['block', 'hidden'])
            setStyle('w-full w-60 hidden md:hidden')
            console.log('hello 2')
        }   
    }

    return(
        <Router>
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
                <div className='block md:inline-block'><Link to='/groups'><AiOutlineUsergroupAdd color={color[1]} className='w-8 h-full' onClick={() => changeColor(1)}/></Link></div>
                <div className='block md:inline-block'><Link to='/watch'><MdVideoLibrary color={color[2]} className='w-8 h-full' onClick={() => changeColor(2)}/></Link></div>
            </div>

            {/*Profile, Messenger, Notif, Account*/}
            <div className="h-full w-48 flex">
                <div className='bg-gray-100 w-75 rounded-full py-2 px-3'><Link to='/profile'>Profile</Link></div>
                <div className='bg-gray-100 p-2 rounded-full'><Link to='/messenger'><SiMessenger className='w-6 h-full'/></Link></div>
                <div className='bg-gray-100 p-2 rounded-full'><Link to='/notifications'><IoMdNotifications className='w-6 h-full'/></Link></div>
                <div className='bg-gray-100 p-2 rounded-full'><Link to='/account'><BsArrowDownShort className='w-6 h-full'/></Link></div>
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
        <div className='py-4 px-3 font-bold text-xl'><Link to='/groups' onClick={() => changeColor(1)}>Groups</Link></div>
        </div>

        <div className='flex w-full bg-gray-400'>
        <div><Link to='/'><MdVideoLibrary color={color[2]} className='w-8 h-full' onClick={() => changeColor(2)}/></Link></div>
        <div className='py-4 px-3 font-bold text-xl'><Link to='/watch' onClick={() => changeColor(2)}>Watch</Link></div>
        </div>

        </div>

        <Switch>
        <Route path='/profile'>
          <Profile postsData={postsData}/>
        </Route>
        <Route path='/'>
          <Home postsData={postsData} setPostsData={setPostsData}/>
        </Route>
        </Switch>

        </Router>
    )
}

export default NavBar;