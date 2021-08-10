import React from 'react'
import {CgProfile} from 'react-icons/cg'
import {BrowserRouter as Router, Switch, Link, Route, useParams, useHistory} from "react-router-dom"

const Story = ({src}) => {
    return (
        <div className='mx-2 my-3 bg-cover w-36 h-60 rounded-lg shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110  p-4' style={{backgroundImage: `url(${src})`}} >
        <img className="inline-block h-10 w-10 rounded-full ring-2 ring-black" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
        </div>
    )
}

export default Story