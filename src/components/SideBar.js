import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Link, Route, useParams, useHistory} from "react-router-dom"
import {HiInformationCircle} from 'react-icons/hi'
import {FaUserFriends} from 'react-icons/fa'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {MdVideoLibrary} from 'react-icons/md'

const SideBar = () => {
    return (
        <div className=' bg-gray-100 w-1/5 my-3 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 h-96 overflow-y-scroll flex-row'>
        <div className='bg-gray-100 py-3 mx-2 font-bold hidden md:flex items-center'><HiInformationCircle color='purple' size='2em' className='px-1'/> Covid-19 Information Center</div>
        <div className='bg-gray-100 py-3 mx-2 font-bold hidden md:flex items-center'><FaUserFriends color='blue' size='2em' className='px-1'/> Friends</div>
        <div className='bg-gray-100 py-3 mx-2 font-bold hidden md:flex items-center'><AiOutlineUsergroupAdd color='blue' size='2em' className='px-1'/> Groups</div>
        <div className='bg-gray-100 py-3 mx-2 font-bold hidden md:flex items-center'><MdVideoLibrary color='blue' size='2em' className='px-1'/> Watch</div>
        </div>
    )
}

export default SideBar